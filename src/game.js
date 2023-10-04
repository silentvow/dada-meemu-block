import shuffle from 'array-shuffle'
import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import {
  ACCELERATION,
  BALL_DEFAULT_RADIUS,
  BALL_MAX_RADIUS,
  BALL_MIN_RADIUS,
  BLOCK, BLOCK_HEIGHT,
  BLOCK_HP,
  BLOCK_WIDTH,
  BUFF_ITEMS,
  BULLET_DEFAULT_COUNT,
  BULLET_HEIGHT,
  BULLET_MAX_COUNT,
  BULLET_OFFSET,
  BULLET_RELOAD_COUNT,
  BULLET_SPEED,
  BULLET_WIDTH,
  DEBUFF_ITEMS,
  DEFAULT_LIVES,
  DEFAULT_SPEED,
  DROP_RATIO_BUFF,
  DROP_RATIO_DEBUFF,
  DROP_RATIO_MONEY_LG,
  DROP_RATIO_MONEY_MD,
  DROP_RATIO_MONEY_SM,
  DROP_RATIO_MONEY_XL,
  DROP_RATIO_MONEY_XS,
  GAME_STATE,
  ITEM,
  ITEM_DROP_SPEED_FROM,
  ITEM_DROP_SPEED_TO,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  MAX_LIVES,
  MAX_SPEED,
  MIN_SPEED,
  MONEY_VALUES,
  PADDLE_DEFAULT_WIDTH,
  PADDLE_DEFAULT_X,
  PADDLE_DEFAULT_Y,
  PADDLE_HEIGHT,
  PADDLE_MAX_WIDTH,
  PADDLE_MIN_WIDTH,
  PADDLE_UNIT_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SPEED_MULTIPLIER,
  TOP_BORDER_HEIGHT,
} from './constants/game'
import { BLOCK_CHAR_MAP, STAGE_MAPS } from './constants/stages'

export const useGame = create(
  immer((set, get) => ({
    state: GAME_STATE.MENU,
    money: 0,
    displayMoney: 0,
    life: 0,
    items: [],
    balls: [],
    blocks: [],
    bullets: [],
    paddle: { x: 0, y: 0, width: 0, height: 0, bullet: 0 },
    stage: 0,

    reset: () => {
      set(state => {
        state.money = 0
        state.displayMoney = 0
        state.life = DEFAULT_LIVES
      })
      get().enterStage(0)
    },

    enterGame: () => {
      get().reset()
      set(state => { state.state = GAME_STATE.READY })
    },

    setupBlocks: (stage) => {
      set(state => {
        state.blocks = []
        const stageMap = STAGE_MAPS[stage]
        for (let y = 0; y < stageMap.length; y++) {
          const line = stageMap[y]
          for (let x = 0; x < line.length; x++) {
            const block = line[x]
            if (block === '.') continue
            const type = BLOCK_CHAR_MAP[block]
            state.blocks.push({
              id: uuidv4(),
              x: x * BLOCK_WIDTH,
              y: y * BLOCK_HEIGHT + TOP_BORDER_HEIGHT,
              hp: BLOCK_HP[type],
              type,
            })
          }
        }

        const items = []
        const buffItems = BUFF_ITEMS.concat([ITEM.UNKNOWN])
        const debuffItems = DEBUFF_ITEMS.concat([ITEM.UNKNOWN])
        for (let i = 0; i < state.blocks.length * DROP_RATIO_BUFF; ++i) {
          items.push(buffItems[Math.floor(Math.random() * buffItems.length)])
        }
        for (let i = 0; i < state.blocks.length * DROP_RATIO_DEBUFF; ++i) {
          items.push(debuffItems[Math.floor(Math.random() * debuffItems.length)])
        }
        for (let i = 0; i < state.blocks.length * DROP_RATIO_MONEY_XL; ++i) {
          items.push(ITEM.MONEY_XL)
        }
        for (let i = 0; i < state.blocks.length * DROP_RATIO_MONEY_LG; ++i) {
          items.push(ITEM.MONEY_LG)
        }
        for (let i = 0; i < state.blocks.length * DROP_RATIO_MONEY_MD; ++i) {
          items.push(ITEM.MONEY_MD)
        }
        for (let i = 0; i < state.blocks.length * DROP_RATIO_MONEY_SM; ++i) {
          items.push(ITEM.MONEY_SM)
        }
        for (let i = 0; i < state.blocks.length * DROP_RATIO_MONEY_XS; ++i) {
          items.push(ITEM.MONEY_XS)
        }
        for (let i = items.length; i < state.blocks.length; ++i) {
          items.push(null)
        }
        const shuffledItems = shuffle(items)
        for (let i = 0; i < state.blocks.length; ++i) {
          state.blocks[i].item = shuffledItems[i]
        }
      })
    },

    setupStage: (stage) => {
      set(state => {
        state.stage = stage
        state.state = GAME_STATE.READY
        state.items = []
        state.bullets = []

        /* setup paddle */
        state.paddle = {
          x: PADDLE_DEFAULT_X,
          y: PADDLE_DEFAULT_Y,
          width: PADDLE_DEFAULT_WIDTH,
          height: PADDLE_HEIGHT,
          bullet: BULLET_DEFAULT_COUNT,
        }

        /* setup ball */
        state.balls = [
          {
            id: uuidv4(),
            x: state.paddle.x + state.paddle.width / 2,
            y: state.paddle.y - BALL_DEFAULT_RADIUS * 2,
            vx: 0,
            vy: 0,
            radius: BALL_DEFAULT_RADIUS,
            lived: true,
            angle: 0,
          },
        ]
      })
    },

    enterStage: (stage) => {
      get().setupStage(stage)
      get().setupBlocks(stage)
    },

    enterEndPage: () => {},

    enterNextStage: () => {
      if (get().stage + 1 >= STAGE_MAPS.length) {
        get().enterEndPage()
        return
      }
      set(state => { state.life = Math.min(MAX_LIVES, state.life + 1) })
      get().enterStage(get().stage + 1)
    },

    updateMoney: () => {
      const { money, displayMoney } = get()
      if (displayMoney < money) {
        set(state => {
          state.displayMoney += Math.max(1, Math.floor((state.money - state.displayMoney) * 0.03))
          state.displayMoney = Math.min(state.displayMoney, state.money)
        })
      }
    },

    updateBullets: () => {
      set(state => {
        for (let i = 0; i < state.bullets.length; ++i) {
          state.bullets[i].y -= BULLET_SPEED
        }
        state.bullets = state.bullets.filter(bullet => bullet.y > 0).filter(bullet => !bullet.hit)
      })
    },

    updateItems: () => {
      get().items.forEach(item => { if (item.catch) get().catchItem(item.item) })
      set(state => {
        for (let i = 0; i < state.items.length; ++i) {
          state.items[i].y += state.items[i].vy
        }
        state.items = state.items.filter(item => item.y < SCREEN_HEIGHT).filter(item => !item.catch)
      })
    },

    updatePaddle: () => {
    },

    updateBalls: () => {
      if (get().state === GAME_STATE.READY) {
        set(state => {
          for (let i = 0; i < state.balls.length; ++i) {
            state.balls[i].x = state.paddle.x + state.paddle.width / 2
            state.balls[i].y = state.paddle.y - state.balls[0].radius
          }
        })
      }

      if (get().state !== GAME_STATE.PLAYING) {
        return
      }

      for (let i = 0; i < get().balls.length; ++i) {
        set(state => {
          state.balls[i].x += state.balls[i].vx
          state.balls[i].y += state.balls[i].vy
          state.balls[i].angle += 1
          if (state.balls[i].angle > 360) state.balls[i].angle = 0
        })
      }

      set(state => {
        state.balls = state.balls.filter(ball => ball.lived)
      })
    },

    updateBlocks: () => {
    },

    updateStage: () => {
      if (get().blocks.every(block => !isFinite(block.hp))) {
        get().clearStage()
        return
      }
      if (get().balls.length === 0) {
        get().failStage()
      }
    },

    clearStage: () => {
      set(state => {
        state.state = GAME_STATE.STAGE_CLEAR
      })
    },

    failStage: () => {
      set(state => {
        state.state = GAME_STATE.STAGE_FAILED
        state.life -= 1
      })
      if (get().life === 0) {
        get().gameOver()
      }
    },

    gameOver: () => {
      set(state => {
        state.state = GAME_STATE.GAME_OVER
      })
    },

    detectCollision: () => {
      get().detectBallPaddleCollision()
      get().detectAllBallWallCollision()
      get().detectAllBulletBlockCollision()
      get().detectAllBallBlockCollision()
      get().detectAllItemPaddleCollision()
    },

    detectAllBulletBlockCollision: () => {
      const { blocks, bullets, detectBulletBlockCollision } = get()
      for (let i = 0; i < bullets.length; ++i) {
        if (bullets[i].hit) continue
        for (let j = 0; j < blocks.length; ++j) {
          if (blocks[j].hp <= 0) continue
          if (detectBulletBlockCollision(i, j)) {
            set(state => {
              state.bullets[i].hit = true
            })
            get().damageBlock(j, 1)
          }
        }
      }
    },

    detectBulletBlockCollision: (bulletIdx, blockIdx) => {
      const bullet = get().bullets[bulletIdx]
      const block = get().blocks[blockIdx]
      if (bullet.x + BULLET_WIDTH < block.x) return false
      if (bullet.x > block.x + BLOCK_WIDTH) return false
      if (bullet.y + BULLET_HEIGHT < block.y) return false
      if (bullet.y > block.y + BLOCK_HEIGHT) return false
      return true
    },

    detectBallPaddleCollision: () => {
      const { balls, paddle } = get()
      for (let i = 0; i < balls.length; ++i) {
        const ball = balls[i]
        if (ball.x + ball.radius < paddle.x) continue
        if (ball.x - ball.radius > paddle.x + paddle.width) continue
        if (ball.y + ball.radius < paddle.y) continue
        if (ball.y - ball.radius > paddle.y) continue
        if (ball.vy < 0) continue

        /* 根據碰撞的位置計算反彈角度，加速 */
        const hitX = ball.x - paddle.x
        const hitPercent = ((hitX / paddle.width) - 0.5) * 0.7 + 0.5 /* 0.15 ~ 0.85 */
        const velocity = Math.min(MAX_SPEED, Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy) * ACCELERATION)
        const angle = Math.PI - hitPercent * Math.PI
        const vx = Math.cos(angle) * velocity
        const vy = -Math.sin(angle) * velocity
        set(state => {
          state.balls[i].vx = vx
          state.balls[i].vy = vy
        })
      }
    },

    detectAllBallWallCollision: () => {
      for (let i = 0; i < get().balls.length; ++i) {
        get().detectBallWallCollision(i)
      }
    },

    detectBallWallCollision: (i) => {
      const ball = get().balls[i]
      if (ball.x - ball.radius < 0) {
        set(state => {
          state.balls[i].vx = Math.abs(state.balls[i].vx)
        })
      }
      if (ball.x + ball.radius > SCREEN_WIDTH) {
        set(state => {
          state.balls[i].vx = -Math.abs(state.balls[i].vx)
        })
      }
      if (ball.y - ball.radius < 0) {
        set(state => {
          state.balls[i].vy = Math.abs(state.balls[i].vy)
        })
      }

      if (ball.y > SCREEN_HEIGHT) {
        set(state => {
          state.balls[i].lived = false
        })
      }
    },

    timeToBallBlockCollisionX: (ballIdx, blockIdx) => {
      const ball = get().balls[ballIdx]
      const block = get().blocks[blockIdx]
      if (ball.vx === 0) return Infinity
      if (ball.vx > 0) {
        return (block.x - ball.radius - ball.x) / ball.vx
      } else {
        return (ball.x - ball.radius - block.x - BLOCK_WIDTH) / ball.vx
      }
    },

    timeToBallBlockCollisionY: (ballIdx, blockIdx) => {
      const ball = get().balls[ballIdx]
      const block = get().blocks[blockIdx]
      if (ball.vy === 0) return Infinity
      if (ball.vy > 0) {
        return (block.y - ball.radius - ball.y) / ball.vy
      } else {
        return (ball.y - ball.radius - block.y - BLOCK_HEIGHT) / ball.vy
      }
    },

    detectAllBallBlockCollision: () => {
      const { balls, blocks, detectBallBlockCollisionX, detectBallBlockCollisionY } = get()
      for (let i = 0; i < balls.length; ++i) {
        let isCollidedX = false
        let isCollidedY = false
        let timeToX = Infinity
        let timeToY = Infinity
        for (let j = 0; j < blocks.length; ++j) {
          if (blocks[j].hp <= 0) continue
          let isBlockHit = false
          if (detectBallBlockCollisionX(i, j)) {
            isBlockHit = true
            isCollidedX = true
            timeToX = Math.min(timeToX, get().timeToBallBlockCollisionX(i, j))
          }
          if (detectBallBlockCollisionY(i, j)) {
            isBlockHit = true
            isCollidedY = true
            timeToY = Math.min(timeToY, get().timeToBallBlockCollisionY(i, j))
          }

          if (isBlockHit) {
            get().damageBlock(j, balls[i].red ? 3 : 1)
          }
        }

        if (isCollidedX && timeToX <= timeToY) {
          set(state => {
            state.balls[i].vx = -state.balls[i].vx
          })
        }
        if (isCollidedY && timeToY <= timeToX) {
          set(state => {
            state.balls[i].vy = -state.balls[i].vy
          })
        }
      }

      get().removeDeadBlocks()
    },

    detectBallBlockCollisionX: (ballIdx, blockIdx) => {
      const ball = get().balls[ballIdx]
      const block = get().blocks[blockIdx]
      if (ball.x + ball.radius < block.x) return false
      if (ball.x - ball.radius > block.x + BLOCK_WIDTH) return false
      if (ball.y + ball.radius < block.y) return false
      if (ball.y - ball.radius > block.y + BLOCK_HEIGHT) return false
      if (ball.x < block.x && ball.vx > 0) return true
      if (ball.x > block.x + BLOCK_WIDTH && ball.vx < 0) return true
      return false
    },

    detectBallBlockCollisionY: (ballIdx, blockIdx) => {
      const ball = get().balls[ballIdx]
      const block = get().blocks[blockIdx]
      if (ball.x + ball.radius < block.x) return false
      if (ball.x - ball.radius > block.x + BLOCK_WIDTH) return false
      if (ball.y + ball.radius < block.y) return false
      if (ball.y - ball.radius > block.y + BLOCK_HEIGHT) return false
      if (ball.y < block.y && ball.vy > 0) return true
      if (ball.y > block.y + BLOCK_HEIGHT && ball.vy < 0) return true
      return false
    },

    detectAllItemPaddleCollision: () => {
      for (let i = 0; i < get().items.length; ++i) {
        if (get().detectItemPaddleCollision(get().items[i])) {
          set(state => {
            state.items[i].catch = true
          })
        }
      }
    },

    detectItemPaddleCollision: (item) => {
      const paddle = get().paddle
      if (item.x + ITEM_WIDTH < paddle.x) return false
      if (item.x > paddle.x + paddle.width) return false
      if (item.y + ITEM_HEIGHT < paddle.y) return false
      if (item.y > paddle.y) return false
      return true
    },

    damageBlock: (blockIdx, damage) => {
      set(state => {
        const block = state.blocks[blockIdx]
        block.hp -= damage
        if (block.type === BLOCK.NORMAL_2 && block.hp < 2) {
          block.type = BLOCK.NORMAL_2_1
        } else if (block.type === BLOCK.NORMAL_3 && block.hp < 3) {
          block.type = BLOCK.NORMAL_3_1
        } else if (block.type === BLOCK.NORMAL_3_1 && block.hp < 2) {
          block.type = BLOCK.NORMAL_3_2
        }
        state.blocks[blockIdx] = block
      })
    },

    removeDeadBlocks: () => {
      get().blocks.forEach(block => {
        if (block.hp <= 0 && !!block.item) {
          const x1 = block.x
          const x2 = block.x + BLOCK_WIDTH
          get().dropItem(block.item, Math.random() * (x2 - x1) + x1, block.y + BLOCK_HEIGHT)
        }
      })
      set(state => {
        state.blocks = state.blocks.filter(block => block.hp > 0)
      })
    },

    dropItem: (item, x, y) => {
      set(state => {
        state.items.push({
          id: uuidv4(),
          item,
          x: x - ITEM_WIDTH / 2,
          y: y - ITEM_HEIGHT / 2,
          vy: Math.random() * (ITEM_DROP_SPEED_TO - ITEM_DROP_SPEED_FROM) + ITEM_DROP_SPEED_FROM,
          catch: false,
        })
      })
    },

    catchItem: (item) => {
      switch (item) {
        case ITEM.UNKNOWN: {
          const allItems = [...BUFF_ITEMS, ...DEBUFF_ITEMS]
          get().catchItem(allItems[Math.floor(Math.random() * allItems.length)])
          break
        }
        case ITEM.BULLET_PACK:
          set(state => {
            state.paddle.bullet = Math.min(BULLET_MAX_COUNT, state.paddle.bullet + BULLET_RELOAD_COUNT)
          })
          break
        case ITEM.PADDLE_PLUS:
          set(state => {
            state.paddle.width = Math.max(PADDLE_MAX_WIDTH, state.paddle.width + PADDLE_UNIT_WIDTH)
          })
          break
        case ITEM.PADDLE_MINUS:
          set(state => {
            state.paddle.width = Math.max(PADDLE_MIN_WIDTH, state.paddle.width - PADDLE_UNIT_WIDTH)
          })
          break
        case ITEM.BALL_DOUBLE: {
          const newBalls = get().balls.map(ball => ({ ...ball, id: uuidv4(), vx: -ball.vx }))
          set(state => {
            state.balls = state.balls.concat(newBalls)
          })
        } break
        case ITEM.BALL_RED:
          set(state => {
            state.balls = state.balls.map(ball => ({ ...ball, red: true }))
          })
          break
        case ITEM.BALL_BLUE:
          set(state => {
            state.balls = state.balls.map(ball => ({ ...ball, red: false }))
          })
          break
        case ITEM.BALL_LARGE:
          set(state => {
            state.balls = state.balls.map(ball => ({ ...ball, radius: Math.min(BALL_MAX_RADIUS, ball.radius * 2) }))
          })
          break
        case ITEM.BALL_SMALL:
          set(state => {
            state.balls = state.balls.map(ball => ({ ...ball, radius: Math.max(BALL_MIN_RADIUS, ball.radius / 2) }))
          })
          break
        case ITEM.SPEED_PLUS:
          set(state => {
            state.balls = state.balls.map(ball => {
              const prevSpeed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy)
              const nextSpeed = Math.min(MAX_SPEED, prevSpeed * SPEED_MULTIPLIER)
              return ({ ...ball, vx: ball.vx * nextSpeed / prevSpeed, vy: ball.vy * nextSpeed / prevSpeed })
            })
          })
          break
        case ITEM.SPEED_MINUS:
          set(state => {
            state.balls = state.balls.map(ball => {
              const prevSpeed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy)
              const nextSpeed = Math.max(MIN_SPEED, prevSpeed / SPEED_MULTIPLIER)
              return ({ ...ball, vx: ball.vx * nextSpeed / prevSpeed, vy: ball.vy * nextSpeed / prevSpeed })
            })
          })
          break
        case ITEM.MONEY_XS:
        case ITEM.MONEY_SM:
        case ITEM.MONEY_MD:
        case ITEM.MONEY_LG:
        case ITEM.MONEY_XL:
          set(state => {
            state.money += MONEY_VALUES[item]
          })
          break
        default:
          console.log('unknown item', item)
          break
      }
    },

    mainLoop: () => {
      switch (get().state) {
        case GAME_STATE.READY:
          get().updateBalls()
          break
        case GAME_STATE.PLAYING:
          get().updateMoney()
          get().updateBullets()
          get().updateItems()
          get().updateBalls()
          get().detectCollision()
          get().updateStage()
          break
        case GAME_STATE.GAME_OVER:
          set(state => { state.displayMoney = state.money })
          break
        case GAME_STATE.STAGE_CLEAR:
        case GAME_STATE.STAGE_FAILED:
          set(state => { state.displayMoney = state.money })
          break
      }
    },

    onMouseMove: (event) => {
      if ([GAME_STATE.READY, GAME_STATE.PLAYING].includes(get().state)) {
        set(state => {
          state.paddle.x = Math.min(Math.max(0, event.globalX - state.paddle.width / 2), SCREEN_WIDTH - state.paddle.width)
        })

        if (get().state === GAME_STATE.READY) {
          set(state => {
            state.balls[0].x = state.paddle.x + state.paddle.width / 2
          })
        }
      }
    },

    onClick: () => {
      if (get().state === GAME_STATE.READY) {
        set(state => {
          state.state = GAME_STATE.PLAYING
          state.balls[0].vx = DEFAULT_SPEED * Math.cos(Math.PI / 3)
          state.balls[0].vy = -DEFAULT_SPEED * Math.sin(Math.PI / 3)
        })
        return
      }

      if (get().state === GAME_STATE.PLAYING) {
        if (get().paddle.bullet > 0) {
          set(state => {
            state.paddle.bullet -= 1
            state.bullets.push({
              id: uuidv4(),
              x: state.paddle.x + state.paddle.width - BULLET_WIDTH - BULLET_OFFSET,
              y: state.paddle.y - BULLET_HEIGHT,
              hit: false,
            })
          })
        }
        return
      }

      if (get().state === GAME_STATE.STAGE_CLEAR) {
        get().enterNextStage()
        return
      }

      if (get().state === GAME_STATE.STAGE_FAILED) {
        get().setupStage(get().stage)
        return
      }

      if (get().state === GAME_STATE.GAME_OVER) {
        set(state => { state.state = GAME_STATE.MENU })
        return
      }

      console.log('unknown state')
    },
  })),
)
