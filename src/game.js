import shuffle from 'array-shuffle'
import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { ACCELERATION, BALL_DEFAULT_RADIUS, BALL_MAX_RADIUS, BALL_MIN_RADIUS, BLOCK_HEIGHT, BLOCK_WIDTH, BUFF_ITEMS, DEBUFF_ITEMS, DEFAULT_SPEED, GAME_STATE, ITEM, ITEM_DROP_SPEED, ITEM_HEIGHT, ITEM_WIDTH, MAX_SPEED, PADDLE_DEFAULT_WIDTH, PADDLE_HEIGHT, PADDLE_MAX_WIDTH, PADDLE_MIN_WIDTH, PADDLE_UNIT_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH, SPEED_MULTIPLIER, TOP_BORDER_HEIGHT } from './constants/game'
import { STAGE_MAPS } from './constants/stages'

export const useGame = create(
  immer((set, get) => ({
    money: 0,
    life: 3,
    items: [],
    balls: [],
    blocks: [],
    paddle: { x: 0, y: 0 },
    stage: 0,

    reset: () => {
      set(state => {
        state.money = 0
        state.life = 3
      })
      get().enterStage(0)
    },

    enterStage: (stage) => {
      set(state => {
        state.stage = stage
        state.state = GAME_STATE.READY
        state.items = []

        /* setup blocks */
        state.blocks = []
        const stageMap = STAGE_MAPS[stage]
        for (let y = 0; y < stageMap.length; y++) {
          const line = stageMap[y]
          for (let x = 0; x < line.length; x++) {
            const block = line[x]
            if (block === '.') continue
            state.blocks.push({
              id: uuidv4(),
              x: x * BLOCK_WIDTH,
              y: y * BLOCK_HEIGHT + TOP_BORDER_HEIGHT,
              hp: 1,
            })
          }
        }
        const items = []
        for (let i = 0; i < state.blocks.length * 0.1; ++i) {
          items.push(BUFF_ITEMS[Math.floor(Math.random() * BUFF_ITEMS.length)])
        }
        for (let i = 0; i < state.blocks.length * 0.1; ++i) {
          items.push(DEBUFF_ITEMS[Math.floor(Math.random() * DEBUFF_ITEMS.length)])
        }
        for (let i = 0; i < state.blocks.length * 0.05; ++i) {
          items.push(ITEM.MONEY_2000)
        }
        for (let i = 0; i < state.blocks.length * 0.1; ++i) {
          items.push(ITEM.MONEY_1000)
        }
        for (let i = 0; i < state.blocks.length * 0.15; ++i) {
          items.push(ITEM.MONEY_500)
        }
        for (let i = 0; i < state.blocks.length * 0.2; ++i) {
          items.push(ITEM.MONEY_200)
        }
        for (let i = items.length; i < state.blocks.length; ++i) {
          items.push(ITEM.MONEY_100)
        }
        const shuffledItems = shuffle(items)
        for (let i = 0; i < state.blocks.length; ++i) {
          state.blocks[i].item = shuffledItems[i]
        }

        /* setup paddle */
        state.paddle = {
          x: 600,
          y: 900,
          width: PADDLE_DEFAULT_WIDTH,
          height: PADDLE_HEIGHT,
          bullet: 0,
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

    enterEndPage: () => {},

    enterNextStage: () => {
      if (get().stage + 1 >= STAGE_MAPS.length) {
        get().enterEndPage()
        return
      }
      get().enterStage(get().stage + 1)
    },

    updateItems: () => {
      get().items.forEach(item => { if (item.catch) get().catchItem(item) })
      set(state => {
        for (let i = 0; i < state.items.length; ++i) {
          state.items[i].y += ITEM_DROP_SPEED
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
        get().gameOver()
      }
    },

    clearStage: () => {
      set(state => {
        state.state = GAME_STATE.STAGE_CLEAR
      })
    },

    gameOver: () => {
      set(state => {
        state.state = GAME_STATE.GAME_OVER
      })
    },

    detectCollision: () => {
      get().detectBallPaddleCollision()
      get().detectAllBallWallCollision()
      get().detectAllBallBlockCollision()
      get().detectAllItemPaddleCollision()
    },

    detectBallPaddleCollision: () => {
      for (let i = 0; i < get().balls.length; ++i) {
        const ball = get().balls[i]
        const paddle = get().paddle
        if (ball.x + ball.radius < paddle.x) continue
        if (ball.x - ball.radius > paddle.x + paddle.width) continue
        if (ball.y + ball.radius < paddle.y) continue
        if (ball.y - ball.radius > paddle.y) continue
        if (ball.vy < 0) continue

        /* 根據碰撞的位置計算反彈角度，加速 */
        const hitX = ball.x - paddle.x
        const hitPercent = ((hitX / paddle.width) - 0.5) * 0.8 + 0.5 /* 0.1 ~ 0.9 */
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

    detectAllBallBlockCollision: () => {
      for (let i = 0; i < get().balls.length; ++i) {
        let isCollidedX = false
        let isCollidedY = false
        for (let j = 0; j < get().blocks.length; ++j) {
          let isBlockHit = false
          if (get().detectBallBlockCollisionX(i, j)) {
            isBlockHit = true
            isCollidedX = true
          }
          if (get().detectBallBlockCollisionY(i, j)) {
            isBlockHit = true
            isCollidedY = true
          }

          if (isBlockHit) {
            set(state => {
              state.blocks[j].hp -= 1
            })
          }
        }

        if (isCollidedX) {
          set(state => {
            state.balls[i].vx = -state.balls[i].vx
          })
        }
        if (isCollidedY) {
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

    removeDeadBlocks: () => {
      get().blocks.forEach(block => {
        if (block.hp === 0) {
          get().dropItem(block.item, block.x + BLOCK_WIDTH / 2, block.y + BLOCK_HEIGHT)
        }
      })
      set(state => {
        state.blocks = state.blocks.filter(block => block.hp > 0)
      })
    },

    dropItem: (item, x, y) => {
      set(state => { state.items.push({ id: uuidv4(), item, x: x - ITEM_WIDTH / 2, y: y - ITEM_HEIGHT / 2, catch: false }) })
    },

    catchItem: (item) => {
      switch (item.item) {
        case ITEM.BULLET:
          set(state => {
            state.paddle.bullet += 20
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
            state.balls = state.balls.map(ball => ({ ...ball, vx: ball.vx * SPEED_MULTIPLIER, vy: ball.vy * SPEED_MULTIPLIER }))
          })
          break
        case ITEM.SPEED_MINUS:
          set(state => {
            state.balls = state.balls.map(ball => ({ ...ball, vx: ball.vx / SPEED_MULTIPLIER, vy: ball.vy / SPEED_MULTIPLIER }))
          })
          break
        case ITEM.MONEY_100:
          set(state => {
            state.money += 100
          })
          break
        case ITEM.MONEY_200:
          set(state => {
            state.money += 200
          })
          break
        case ITEM.MONEY_500:
          set(state => {
            state.money += 500
          })
          break
        case ITEM.MONEY_1000:
          set(state => {
            state.money += 1000
          })
          break
        case ITEM.MONEY_2000:
          set(state => {
            state.money += 2000
          })
          break
      }
    },

    mainLoop: () => {
      switch (get().state) {
        case GAME_STATE.READY:
          get().updateBalls()
          break
        case GAME_STATE.PLAYING:
          get().updateItems()
          get().updateBalls()
          get().detectCollision()
          get().updateStage()
          break
        case GAME_STATE.GAME_OVER:
          break
        case GAME_STATE.STAGE_CLEAR:
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
      }
      if (get().state === GAME_STATE.PLAYING) {
        if (get().bullet > 0) {
          console.log('click')
          set(state => {
            state.bullet -= 1
            state.bullets.push({ id: uuidv4(), x: state.paddle.x + state.paddle.width / 2, y: state.paddle.y })
          })
        }
      }
    },
  })),
)
