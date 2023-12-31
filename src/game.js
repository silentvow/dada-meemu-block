import shuffle from 'array-shuffle'
import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import {
  ACCELERATION,
  API_URLS,
  BALL_ATK,
  BALL_COLOR,
  BALL_DEFAULT_RADIUS,
  BALL_MAX_RADIUS,
  BALL_MIN_RADIUS,
  BALL_UNIT_RADIUS,
  BLOCK_HEIGHT,
  BLOCK_HP,
  BLOCK_WIDTH,
  BUFF_ITEMS,
  BULLET_ATK,
  BULLET_DEFAULT_COUNT,
  BULLET_HEIGHT,
  BULLET_MAX_COUNT,
  BULLET_RELOAD_COUNT,
  BULLET_SPEED,
  BULLET_WIDTH,
  DEBUFF_ITEMS,
  DEFAULT_LIVES,
  DEFAULT_SPEED,
  DELTA_UNIT,
  DROP_RATIO_BUFF,
  DROP_RATIO_DEBUFF,
  DROP_RATIO_MONEY_LG,
  DROP_RATIO_MONEY_MD,
  DROP_RATIO_MONEY_SM,
  DROP_RATIO_MONEY_XL,
  DROP_RATIO_MONEY_XS,
  GAME_MODE,
  GAME_STATE,
  HIGH_SCORE_KEYS,
  ITEM,
  ITEM_DROP_SPEED_FROM,
  ITEM_DROP_SPEED_TO,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  LIFE_AS_MONEY_VALUE,
  LOCAL_STORAGE_KEY,
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
  PADDLE_YODA_DEFAULT_WIDTH,
  PADDLE_YODA_MAX_WIDTH,
  PADDLE_YODA_MIN_WIDTH,
  REAL_ACCELERATION,
  REAL_BUFF_ITEMS,
  REAL_DEBUFF_ITEMS,
  REAL_DEFAULT_SPEED,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SPEED_MULTIPLIER,
  TOP_BORDER_HEIGHT,
} from './constants/game'
import { IMG_KEY, PADDLE_IMG_KEY } from './constants/image'
import { SOUND_KEY } from './constants/sound'
import { BLOCK_CHAR_MAP, FULL_STAGE_MAPS, STORY_STAGE_MAPS } from './constants/stages'
import { ALL_CHAPTERS, EXTRA_CHAPTER, STORY_CHAPTER_1 } from './constants/story'
import { calculateCollision, isSegmentRectangleIntersect } from './utils'
import { sendEvent } from './utils/gtag'

export const useGame = create(
  immer((set, get) => ({
    gId: null,
    state: GAME_STATE.MAIN_MENU,
    mode: GAME_MODE.STORY,
    money: 0,
    displayMoney: 0,
    life: 0,
    items: [],
    balls: [],
    blocks: [],
    bullets: [],
    paddle: { x: 0, y: 0, width: 0, height: 0, bullet: 0, imgKey: IMG_KEY.PADDLE_MD },
    stage: 0,
    stageMaps: [],
    stageComplete: false,
    knownItems: [],
    chapter: [],
    sceneIndex: 0,
    showSubmitModal: false,
    soundQueue: [],
    bgm: null,

    initBGM: () => { set(state => { state.bgm = SOUND_KEY.BGM_MENU }) },
    getMediaInstance: () => { return get().mediaInstance },
    setMediaInstance: (instance) => { set(state => { state.mediaInstance = instance }) },

    reset: () => {
      set(state => {
        state.gId = uuidv4()
        state.money = 0
        state.displayMoney = 0
        state.life = DEFAULT_LIVES
        state.stageComplete = false

        if ([GAME_MODE.STORY].includes(state.mode)) {
          state.stageMaps = STORY_STAGE_MAPS
        } else if ([GAME_MODE.EXTRA_STORY].includes(state.mode)) {
          state.stageMaps = []
        } else {
          state.stageMaps = FULL_STAGE_MAPS
        }
      })
    },

    enterMainMenu: () => {
      set(state => {
        state.bgm = SOUND_KEY.BGM_MENU
        state.state = GAME_STATE.MAIN_MENU
      })
    },

    enterStoryMode: () => {
      set(state => {
        state.stage = 0
        state.mode = GAME_MODE.STORY
        state.state = GAME_STATE.STORY
        state.chapter = STORY_CHAPTER_1
        state.sceneIndex = 0
        state.bgm = state.chapter[0].bgm
      })
      get().reset()
      sendEvent('enter-story-mode')
    },

    enterExtraStoryMode: () => {
      set(state => {
        state.stage = 0
        state.mode = GAME_MODE.EXTRA_STORY
        state.state = GAME_STATE.STORY
        state.chapter = EXTRA_CHAPTER
        state.sceneIndex = 0
        state.bgm = state.chapter[0].bgm
      })
      get().reset()
      sendEvent('enter-extra-story-mode')
    },

    enterDadaChallengeMode: () => {
      set(state => { state.mode = GAME_MODE.CHALLENGE_DADA })
      get().enterGame()
      sendEvent('enter-dada-challenge-mode')
    },

    enterYodaChallengeMode: () => {
      set(state => { state.mode = GAME_MODE.CHALLENGE_YODA })
      get().enterGame()
      sendEvent('enter-yoda-challenge-mode')
    },

    enterRealChallengeMode: () => {
      set(state => { state.mode = GAME_MODE.CHALLENGE_REAL })
      get().enterGame()
      sendEvent('enter-real-challenge-mode')
    },

    enterReadme: () => {
      set(state => { state.state = GAME_STATE.README })
      sendEvent('enter-readme')
    },

    enterScoreboard: () => {
      set(state => { state.state = GAME_STATE.SCOREBOARD })
      sendEvent('enter-scoreboard')
    },

    enterSandbox: () => {
      set(state => { state.state = GAME_STATE.SANDBOX })
      sendEvent('enter-sandbox')
    },

    enterGame: () => {
      get().reset()
      get().enterStage(0)
      set(state => {
        state.bgm = null
        state.state = GAME_STATE.READY
      })
    },

    setupBlocks: (stage) => {
      set(state => {
        state.blocks = []
        const stageMap = state.stageMaps[stage]
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
              item: null,
              type,
            })
          }
        }

        const length = state.blocks.filter(block => isFinite(block.hp)).length
        const items = [ITEM.CHICKEN]
        let buffItems = BUFF_ITEMS.concat([ITEM.UNKNOWN])
        let debuffItems = DEBUFF_ITEMS.concat([ITEM.UNKNOWN])
        if ([GAME_MODE.CHALLENGE_REAL, GAME_MODE.EXTRA_STORY].includes(state.mode)) {
          buffItems = REAL_BUFF_ITEMS.concat([ITEM.UNKNOWN])
          debuffItems = REAL_DEBUFF_ITEMS.concat([ITEM.UNKNOWN])
        }
        state.knownItems = [...buffItems, ...debuffItems].filter(item => item !== ITEM.UNKNOWN)

        for (let i = 1; i < length * DROP_RATIO_BUFF; ++i) {
          items.push(buffItems[Math.floor(Math.random() * buffItems.length)])
        }
        for (let i = 1; i < length * DROP_RATIO_DEBUFF; ++i) {
          items.push(debuffItems[Math.floor(Math.random() * debuffItems.length)])
        }
        for (let i = 1; i < length * DROP_RATIO_MONEY_XL; ++i) {
          items.push(ITEM.MONEY_XL)
        }
        for (let i = 1; i < length * DROP_RATIO_MONEY_LG; ++i) {
          items.push(ITEM.MONEY_LG)
        }
        for (let i = 1; i < length * DROP_RATIO_MONEY_MD; ++i) {
          items.push(ITEM.MONEY_MD)
        }
        for (let i = 1; i < length * DROP_RATIO_MONEY_SM; ++i) {
          items.push(ITEM.MONEY_SM)
        }
        for (let i = 1; i < length * DROP_RATIO_MONEY_XS; ++i) {
          items.push(ITEM.MONEY_XS)
        }
        for (let i = items.length; i < length; ++i) {
          items.push(null)
        }
        const shuffledItems = shuffle(items)
        for (let i = 0, j = 0; i < state.blocks.length; ++i) {
          if (!isFinite(state.blocks[i].hp)) continue
          state.blocks[i].item = shuffledItems[j++]
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
          width: state.mode === GAME_MODE.CHALLENGE_YODA ? PADDLE_YODA_DEFAULT_WIDTH : PADDLE_DEFAULT_WIDTH,
          height: PADDLE_HEIGHT,
          bullet: [GAME_MODE.CHALLENGE_REAL, GAME_MODE.EXTRA_STORY].includes(state.mode) ? 0 : BULLET_DEFAULT_COUNT,
        }
        if ([GAME_MODE.CHALLENGE_REAL, GAME_MODE.EXTRA_STORY].includes(state.mode)) {
          state.paddle.imgKey = IMG_KEY.PADDLE_REAL
        } else {
          state.paddle.imgKey = PADDLE_IMG_KEY[state.paddle.width]
        }

        /* setup ball */
        const ballX = state.paddle.x + state.paddle.width / 2
        const ballY = state.paddle.y - BALL_DEFAULT_RADIUS * 2
        state.balls = [
          {
            id: uuidv4(),
            px: ballX,
            py: ballY,
            x: ballX,
            y: ballY,
            vx: 0,
            vy: 0,
            color: BALL_COLOR.BLUE,
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
      sendEvent('game-start', { stage })
    },

    enterEndingPage: (complete) => {
      if (get().mode === GAME_MODE.EXTRA_STORY) {
        window.localStorage.setItem(LOCAL_STORAGE_KEY.UNLOCK_SANDBOX, 'true')
        get().enterMainMenu()
        return
      }

      if (complete) {
        window.localStorage.setItem(LOCAL_STORAGE_KEY.UNLOCK_REAL_CHALLENGE, 'true')
        set(state => { state.bgm = SOUND_KEY.BGM_END })
      } else {
        set(state => { state.bgm = SOUND_KEY.GAME_OVER })
      }
      const { money, life, mode, stage } = get()
      const score = money + life * LIFE_AS_MONEY_VALUE
      const highScore = parseInt(window.localStorage.getItem(HIGH_SCORE_KEYS[mode]) || '0')
      if (score > highScore) {
        window.localStorage.setItem(HIGH_SCORE_KEYS[mode], score.toString())
      }
      set(state => { state.state = GAME_STATE.ENDING; state.stageComplete = complete })
      sendEvent('game-over', { mode, stage, complete, score })
    },

    enterNextStage: () => {
      const { stage, stageMaps, enterStage, enterEndingPage } = get()
      if (stage + 1 >= stageMaps.length) {
        enterEndingPage(true)
        return
      }
      enterStage(stage + 1)
    },

    enterNextChapter: () => {
      set(state => {
        state.stage += 1
        if (state.mode === GAME_MODE.STORY) {
          state.chapter = ALL_CHAPTERS[state.stage]
        }
        state.sceneIndex = 0
        state.state = GAME_STATE.STORY
        state.bgm = state.chapter[0].bgm
      })
    },

    updateMoney: (delta) => {
      const { money, displayMoney } = get()
      if (displayMoney < money) {
        set(state => {
          state.displayMoney += Math.max(1, Math.floor((state.money - state.displayMoney) * 0.03 * delta / DELTA_UNIT))
          state.displayMoney = Math.min(state.displayMoney, state.money)
        })
      }
    },

    updateBullets: (delta) => {
      set(state => {
        for (let i = 0; i < state.bullets.length; ++i) {
          state.bullets[i].y -= BULLET_SPEED * delta / DELTA_UNIT
        }
        state.bullets = state.bullets.filter(bullet => bullet.y > 0).filter(bullet => !bullet.hit)
      })
    },

    updateItems: (delta) => {
      get().items.forEach(item => { if (item.catch) get().catchItem(item.item) })
      set(state => {
        for (let i = 0; i < state.items.length; ++i) {
          state.items[i].y += state.items[i].vy * delta / DELTA_UNIT
        }
        state.items = state.items.filter(item => item.y < SCREEN_HEIGHT).filter(item => !item.catch)
      })
    },

    updatePaddle: () => {
    },

    updateBalls: (delta) => {
      if (get().state === GAME_STATE.READY) {
        set(state => {
          for (let i = 0; i < state.balls.length; ++i) {
            state.balls[i].px = state.balls[i].x
            state.balls[i].x = state.paddle.x + state.paddle.width / 2
            state.balls[i].py = state.balls[i].y
            state.balls[i].y = state.paddle.y - state.balls[0].radius
          }
        })
      }

      if (get().state !== GAME_STATE.PLAYING) {
        return
      }

      for (let i = 0; i < get().balls.length; ++i) {
        set(state => {
          state.balls[i].px = state.balls[i].x
          state.balls[i].x += state.balls[i].vx * delta / DELTA_UNIT
          state.balls[i].py = state.balls[i].y
          state.balls[i].y += state.balls[i].vy * delta / DELTA_UNIT
          state.balls[i].angle += 1 * delta / DELTA_UNIT
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
      set(state => { state.state = GAME_STATE.STAGE_FAILED })
      get().pushSoundQueue(SOUND_KEY.FAILURE)
      if (get().life > 0) {
        set(state => { state.life -= 1 })
      } else {
        get().gameOver()
      }
    },

    pause: () => {
      set(state => {
        state.resumeState = state.state
        state.state = GAME_STATE.PAUSED
      })
    },

    resume: () => {
      set(state => {
        state.state = state.resumeState
        delete state.resumeState
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
            get().damageBlock(j, BULLET_ATK)
            get().pushSoundQueue(SOUND_KEY.BULLET_HIT)
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
      const { balls, paddle, mode } = get()
      for (let i = 0; i < balls.length; ++i) {
        const ball = balls[i]
        if (ball.x + ball.radius < paddle.x) continue
        if (ball.x - ball.radius > paddle.x + paddle.width) continue
        if (ball.y + ball.radius < paddle.y) continue
        if (ball.y - ball.radius > paddle.y + PADDLE_HEIGHT) continue
        if (ball.vy < 0) continue

        /* 根據碰撞的位置計算反彈角度，加速 */
        const hitX = Math.min(paddle.width, Math.max(0, ball.x - paddle.x))
        const hitPercent = ((hitX / paddle.width) - 0.5) * 0.7 + 0.5 /* 0.15 ~ 0.85 */
        const acceleration = [GAME_MODE.CHALLENGE_REAL, GAME_MODE.EXTRA_STORY].includes(mode) ? REAL_ACCELERATION : ACCELERATION
        const velocity = Math.min(MAX_SPEED, Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy) * acceleration)
        const angle = Math.PI - hitPercent * Math.PI
        const vx = Math.cos(angle) * velocity
        const vy = -Math.sin(angle) * velocity
        set(state => {
          state.balls[i].vx = vx
          state.balls[i].vy = vy
        })
        get().pushSoundQueue(SOUND_KEY.BOUNCE)
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

      if (ball.y - ball.radius > SCREEN_HEIGHT) {
        set(state => {
          state.balls[i].lived = false
        })
      }
    },

    detectAllBallBlockCollision: () => {
      const { balls, blocks } = get()
      let hasAnyCollision = false
      for (let i = 0; i < balls.length; ++i) {
        let isCollidedX = false
        let isCollidedY = false
        const possibleHitBlocks = []
        for (let j = 0; j < blocks.length; ++j) {
          if (blocks[j].hp <= 0) continue

          const isIntersect = isSegmentRectangleIntersect({
            circle: {
              x: balls[i].x,
              y: balls[i].y,
              px: balls[i].px,
              py: balls[i].py,
              radius: balls[i].radius,
            },
            rect: {
              x: blocks[j].x,
              y: blocks[j].y,
              width: BLOCK_WIDTH,
              height: BLOCK_HEIGHT,
            },
          })
          if (!isIntersect) continue

          const { time, surface } = calculateCollision({
            circle: {
              x: balls[i].px,
              y: balls[i].py,
              vx: balls[i].vx,
              vy: balls[i].vy,
              radius: balls[i].radius,
            },
            rect: {
              x: blocks[j].x,
              y: blocks[j].y,
              width: BLOCK_WIDTH,
              height: BLOCK_HEIGHT,
            },
          })

          /* NOTE: remove strange collision */
          if (balls[i].px < blocks[j].x &&
            balls[i].py < blocks[j].y &&
            balls[i].vx <= 0 &&
            balls[i].vy <= 0) {
            continue
          }
          if (balls[i].px < blocks[j].x &&
            balls[i].py > blocks[j].y + BLOCK_HEIGHT &&
            balls[i].vx <= 0 &&
            balls[i].vy >= 0) {
            continue
          }
          if (balls[i].px > blocks[j].x + BLOCK_WIDTH &&
            balls[i].py < blocks[j].y &&
            balls[i].vx >= 0 &&
            balls[i].vy <= 0) {
            continue
          }
          if (balls[i].px > blocks[j].x + BLOCK_WIDTH &&
            balls[i].py > blocks[j].y + BLOCK_HEIGHT &&
            balls[i].vx >= 0 &&
            balls[i].vy >= 0) {
            continue
          }

          possibleHitBlocks.push({ blockIdx: j, time, surface })
        }

        if (possibleHitBlocks.length === 0) continue
        possibleHitBlocks.sort((x1, x2) => {
          if (x1.time < x2.time) {
            return -1
          }
          if (x1.time > x2.time) {
            return 1
          }
          return 0
        })
        if (!isFinite(possibleHitBlocks[0].time)) continue

        possibleHitBlocks.forEach(({ blockIdx, time, surface }) => {
          if (time > possibleHitBlocks[0].time) {
            return
          }

          get().damageBlock(blockIdx, BALL_ATK[balls[i].color])
          if (surface === 'horizontal') {
            isCollidedY = true
          } else if (surface === 'vertical') {
            isCollidedX = true
          }
        })

        const t = possibleHitBlocks[0].time
        if (t > 0) {
          set(state => {
            const duration = state.balls[i].vx !== 0
              ? (state.balls[i].x - state.balls[i].px) / state.balls[i].vx
              : (state.balls[i].y - state.balls[i].py) / state.balls[i].vy
            state.balls[i].x = state.balls[i].px + state.balls[i].vx * t
            state.balls[i].y = state.balls[i].py + state.balls[i].vy * t
            if (isCollidedX) {
              state.balls[i].x -= state.balls[i].vx * (duration - t)
              state.balls[i].y += state.balls[i].vy * (duration - t)
            }
            if (isCollidedY) {
              state.balls[i].x += state.balls[i].vx * (duration - t)
              state.balls[i].y -= state.balls[i].vy * (duration - t)
            }
            state.balls[i].px = state.balls[i].x
            state.balls[i].py = state.balls[i].y
          })
        }
        if (isCollidedX) {
          set(state => {
            state.balls[i].vx = -state.balls[i].vx
          })
          hasAnyCollision = true
        }
        if (isCollidedY) {
          set(state => {
            state.balls[i].vy = -state.balls[i].vy
          })
          hasAnyCollision = true
        }
      }

      get().removeDeadBlocks()
      if (hasAnyCollision) {
        get().pushSoundQueue(SOUND_KEY.BALL_HIT)
      }
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
      const { catchItem, knownItems } = get()
      switch (item) {
        case ITEM.UNKNOWN: {
          catchItem(knownItems[Math.floor(Math.random() * knownItems.length)])
          return
        }
        case ITEM.BULLET_PACK:
          set(state => {
            state.paddle.bullet = Math.min(BULLET_MAX_COUNT, state.paddle.bullet + BULLET_RELOAD_COUNT)
          })
          break
        case ITEM.PADDLE_PLUS:
          set(state => {
            const maxWidth = state.mode === GAME_MODE.CHALLENGE_YODA ? PADDLE_YODA_MAX_WIDTH : PADDLE_MAX_WIDTH
            state.paddle.width = Math.min(maxWidth, state.paddle.width + PADDLE_UNIT_WIDTH)
            state.paddle.imgKey = PADDLE_IMG_KEY[state.paddle.width]
          })
          break
        case ITEM.PADDLE_MINUS:
          set(state => {
            const minWidth = state.mode === GAME_MODE.CHALLENGE_YODA ? PADDLE_YODA_MIN_WIDTH : PADDLE_MIN_WIDTH
            state.paddle.width = Math.max(minWidth, state.paddle.width - PADDLE_UNIT_WIDTH)
            state.paddle.imgKey = PADDLE_IMG_KEY[state.paddle.width]
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
            state.balls = state.balls.map(ball => ({ ...ball, color: BALL_COLOR.RED }))
          })
          break
        case ITEM.BALL_BLUE:
          set(state => {
            state.balls = state.balls.map(ball => ({ ...ball, color: BALL_COLOR.BLUE }))
          })
          break
        case ITEM.BALL_BLACK:
          set(state => {
            state.balls = state.balls.map(ball => ({ ...ball, color: BALL_COLOR.BLACK }))
          })
          break
        case ITEM.BALL_LARGE:
          set(state => {
            state.balls = state.balls.map(ball => ({ ...ball, radius: Math.min(BALL_MAX_RADIUS, ball.radius + BALL_UNIT_RADIUS) }))
          })
          break
        case ITEM.BALL_SMALL:
          set(state => {
            state.balls = state.balls.map(ball => ({ ...ball, radius: Math.max(BALL_MIN_RADIUS, ball.radius - BALL_UNIT_RADIUS) }))
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
        case ITEM.CHICKEN:
          set(state => {
            state.life = Math.min(MAX_LIVES, state.life + 1)
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
          get().pushSoundQueue(SOUND_KEY.CATCH_COIN)
          return
        default:
          console.warn('unknown item', item)
          break
      }
      get().pushSoundQueue(SOUND_KEY.CATCH_ITEM)
    },

    endEnterStageTransition: () => {
      set(state => { state.isTransitioning = false })
      get().enterStage(get().stage)
    },

    gotoNextScene: () => {
      const { chapter, sceneIndex, stage, stageMaps, enterEndingPage } = get()
      if (sceneIndex + 1 >= chapter.length) {
        if (stage >= stageMaps.length) {
          enterEndingPage(true)
          return
        }
        set(state => {
          state.isTransitioning = true
          state.bgm = null
        })
        return
      }
      set(state => {
        state.sceneIndex += 1
        if (typeof state.chapter[state.sceneIndex].bgm === 'string') {
          state.bgm = state.chapter[state.sceneIndex].bgm
        }
      })
    },

    skipScenes: () => {
      const { stage, stageMaps, enterEndingPage } = get()
      if (stage >= stageMaps.length) {
        enterEndingPage(true)
        return
      }
      set(state => {
        state.isTransitioning = true
        state.bgm = null
      })
    },

    submitScoreAndCloseModal: async (name) => {
      const { gId, mode, life, money, closeSubmitModal } = get()
      const score = money + life * LIFE_AS_MONEY_VALUE
      try {
        await fetch(API_URLS[mode], {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: gId, name, score }),
        })
      } catch (e) {
        sendEvent('error-submit-score', { message: e.message })
      }
      closeSubmitModal()
    },

    openSubmitModal: () => {
      set(state => { state.showSubmitModal = true })
    },

    closeSubmitModal: () => {
      set(state => { state.showSubmitModal = false })
    },

    setSandboxText: (text) => { set(state => { state.sandboxText = text }) },

    mainLoop: (delta) => {
      switch (get().state) {
        case GAME_STATE.READY:
          get().updateBalls(delta)
          break
        case GAME_STATE.PLAYING:
          get().updateMoney(delta)
          get().updateBullets(delta)
          get().updateItems(delta)
          get().updateBalls(delta)
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
        case GAME_STATE.PAUSED:
          break
      }
    },

    shoot: () => {
      if (get().paddle.bullet > 0) {
        if (get().paddle.width <= PADDLE_YODA_MAX_WIDTH) {
          get().pushSoundQueue(SOUND_KEY.SHOOT_YODA)
        } else {
          get().pushSoundQueue(SOUND_KEY.SHOOT_DADA)
        }

        set(state => {
          state.paddle.bullet -= 1
          state.bullets.push({
            id: uuidv4(),
            x: state.paddle.x + (state.paddle.width - BULLET_WIDTH) / 2,
            y: state.paddle.y - BULLET_HEIGHT,
            hit: false,
          })
        })
      }
    },

    popSoundQueue: () => {
      const sound = get().soundQueue[0]
      set(state => { state.soundQueue = state.soundQueue.slice(1) })
      return sound
    },

    pushSoundQueue: (sound) => {
      set(state => { state.soundQueue = [...state.soundQueue, sound] })
    },

    onGameMouseMove: (event) => {
      if ([GAME_STATE.READY, GAME_STATE.PLAYING].includes(get().state)) {
        set(state => {
          state.paddle.x = Math.min(Math.max(-state.paddle.width / 2, event.globalX - state.paddle.width / 2), SCREEN_WIDTH - state.paddle.width / 2)
        })

        if (get().state === GAME_STATE.READY) {
          set(state => {
            state.balls[0].px = state.balls[0].x
            state.balls[0].x = state.paddle.x + state.paddle.width / 2
          })
        }
      }
    },

    onGameClick: (event) => {
      event.preventDefault()
      if (get().state === GAME_STATE.READY) {
        set(state => {
          const speed = [GAME_MODE.CHALLENGE_REAL, GAME_MODE.EXTRA_STORY].includes(state.mode) ? REAL_DEFAULT_SPEED : DEFAULT_SPEED
          state.state = GAME_STATE.PLAYING
          state.balls[0].vx = speed * Math.cos(Math.PI / 3)
          state.balls[0].vy = -speed * Math.sin(Math.PI / 3)
        })
        return
      }

      if (get().state === GAME_STATE.PLAYING) {
        if (event.type.toLowerCase() === 'pointerdown' && event.pointerType.toLowerCase() === 'touch') return
        get().shoot()
        return
      }

      if (get().state === GAME_STATE.STAGE_CLEAR) {
        if ([GAME_MODE.STORY, GAME_MODE.EXTRA_STORY].includes(get().mode)) {
          get().enterNextChapter()
        } else {
          get().enterNextStage()
        }
        return
      }

      if (get().state === GAME_STATE.STAGE_FAILED) {
        get().setupStage(get().stage)
        return
      }

      if (get().state === GAME_STATE.GAME_OVER) {
        get().enterEndingPage(false)
        return
      }

      console.warn('unknown state')
    },

    onGameKeyDown: (event) => {
      if (event.key === 'p' || event.key === 'P') {
        event.preventDefault()
        if (get().state === GAME_STATE.PLAYING) {
          get().pause()
        } else if (get().state === GAME_STATE.PAUSED) {
          get().resume()
        }
      }
      if (event.key === 'd' || event.key === 'D') {
        event.preventDefault()
        if (get().state === GAME_STATE.PLAYING) {
          get().failStage()
        }
      }
    },

    onGameTouchEnd: (event) => {
      if (get().state === GAME_STATE.PLAYING) {
        get().shoot()
      }
    },
  })),
)
