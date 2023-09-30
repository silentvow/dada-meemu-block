import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { BALL_DEFAULT_RADIUS, BLOCK_HEIGHT, BLOCK_WIDTH, GAME_STATE, PADDLE_DEFAULT_WIDTH, PADDLE_HEIGHT, SCREEN_HEIGHT, SCREEN_WIDTH } from './constants/game'
import { STAGE_MAPS } from './constants/stages'

export const useGame = create(
  immer((set, get) => ({
    money: 0,
    life: 3,
    balls: [],
    blocks: [],
    paddle: { x: 0, y: 0 },

    reset: () => {
      set(state => {
        state.money = 0
        state.life = 3
      })
      get().enterStage(0)
    },

    enterStage: (stage) => {
      set(state => {
        state.state = GAME_STATE.READY

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
              y: y * BLOCK_HEIGHT + 16,
              hp: 1,
            })
          }
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
          },
        ]
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
        })
      }
    },

    updateBlocks: () => {
    },

    detectCollision: () => {
      get().detectAllBallWallCollision()
      get().detectAllBallBlockCollision()
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
          state.balls[i].vx = -state.balls[i].vx
        })
      }
      if (ball.x + ball.radius > SCREEN_WIDTH) {
        set(state => {
          state.balls[i].vx = -state.balls[i].vx
        })
      }
      if (ball.y - ball.radius < 0) {
        set(state => {
          state.balls[i].vy = -state.balls[i].vy
        })
      }
      if (ball.y + ball.radius > SCREEN_HEIGHT) {
        set(state => {
          state.balls[i].vy = -state.balls[i].vy
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

    removeDeadBlocks: () => {
      set(state => {
        state.blocks = state.blocks.filter(block => block.hp > 0)
      })
    },

    mainLoop: () => {
      switch (get().state) {
        case GAME_STATE.READY:
          get().updatePaddle()
          get().updateBalls()
          break
        case GAME_STATE.PLAYING:
          get().updatePaddle()
          get().updateBalls()
          get().detectCollision()
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
          state.balls[0].vx = 4
          state.balls[0].vy = -4
        })
      }
      if (get().state === GAME_STATE.PLAYING) {
        console.log('click')
      }
    },
  })),
)
