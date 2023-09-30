import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { GAME_STATE } from './constants/game'
import { STAGE_MAPS } from './constants/stages'

// export class Game {
//   constructor () {
//     this.money = 0
//     this.life = 3
//     this.enterStage(0)
//   }

//   enterStage (stage) {
//     this.state = GAME_STATE.READY

//     /* setup blocks */
//     this.blocks = []
//     const stageMap = STAGE_MAPS[stage]
//     for (let y = 0; y < stageMap.length; y++) {
//       const line = stageMap[y]
//       for (let x = 0; x < line.length; x++) {
//         const block = line[x]
//         if (block === '.') continue
//         this.blocks.push({
//           id: uuidv4(),
//           x: x * 64,
//           y: y * 32 + 16,
//           hp: 1,
//         })
//       }
//     }

//     /* setup paddle */
//     this.paddle = {
//       x: 600,
//       y: 900,
//       width: 64,
//       height: 16,
//       bullet: 0,
//     }

//     /* setup ball */
//     this.balls = [
//       {
//         id: uuidv4(),
//         x: this.paddle.x + this.paddle.width / 2,
//         y: this.paddle.y - 16,
//         vx: 0,
//         vy: 0,
//         radius: 8,
//       },
//     ]
//   }

//   updatePaddle () {
//   }

//   updateBalls () {
//     if (this.state === GAME_STATE.READY) {
//       this.balls[0].x = this.paddle.x + this.paddle.width / 2
//       this.balls[0].y = this.paddle.y - this.balls[0].radius * 2
//     }

//     if (this.state !== GAME_STATE.PLAYING) {
//       return
//     }

//     for (let i = 0; i < this.balls.length; ++i) {
//       this.balls[i].x += this.balls[i].vx
//       this.balls[i].y += this.balls[i].vy
//     }
//   }

//   mainLoop () {
//     switch (this.state) {
//       case GAME_STATE.READY:
//         this.updatePaddle()
//         this.updateBalls()
//         break
//       case GAME_STATE.PLAYING:
//         this.updatePaddle()
//         this.updateBalls()
//         break
//       case GAME_STATE.GAME_OVER:
//         break
//       case GAME_STATE.STAGE_CLEAR:
//         break
//     }
//   }

//   /* event handlers */
//   onMouseMove = (event) => {
//     console.log('onMouseMove', this.paddle, event)
//     if ([GAME_STATE.READY, GAME_STATE.PLAYING].includes(this.state)) {
//       this.paddle.x = Math.min(Math.max(0, event.clientX - this.paddle.width / 2), 1280 - this.paddle.width)

//       if (this.state === GAME_STATE.READY) {
//         this.balls[0].x = this.paddle.x + this.paddle.width / 2
//       }
//     }
//   }
// }

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
              x: x * 64,
              y: y * 32 + 16,
              hp: 1,
            })
          }
        }

        /* setup paddle */
        state.paddle = {
          x: 600,
          y: 900,
          width: 64,
          height: 16,
          bullet: 0,
        }

        /* setup ball */
        state.balls = [
          {
            id: uuidv4(),
            x: state.paddle.x + state.paddle.width / 2,
            y: state.paddle.y - 16,
            vx: 0,
            vy: 0,
            radius: 8,
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
            state.balls[i].y = state.paddle.y - state.balls[0].radius * 2
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

    mainLoop: () => {
      switch (get().state) {
        case GAME_STATE.READY:
          get().updatePaddle()
          get().updateBalls()
          break
        case GAME_STATE.PLAYING:
          get().updatePaddle()
          get().updateBalls()
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
          state.paddle.x = Math.min(Math.max(0, event.globalX - state.paddle.width / 2), 1280 - state.paddle.width)
        })
        // this.paddle.x = Math.min(Math.max(0, event.clientX - this.paddle.width / 2), 1280 - this.paddle.width)

        if (get().state === GAME_STATE.READY) {
          set(state => {
            state.balls[0].x = state.paddle.x + state.paddle.width / 2
          })
          // this.balls[0].x = this.paddle.x + this.paddle.width / 2
        }
      }
    },
  })),
)
