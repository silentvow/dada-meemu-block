import { Container, Stage, withFilters } from '@pixi/react'
import { Assets, ColorMatrixFilter } from 'pixi.js'
import { useEffect, useState } from 'react'

import Background from '@/components/Background'
import Ending from '@/components/Ending'
import GameMenu from '@/components/GameMenu'
import Header from '@/components/Header'
import MainGame from '@/components/MainGame'
import Readme from '@/components/Readme'
import Scoreboard from '@/components/Scoreboard'
import Storyboard from '@/components/Storyboard'
import SubmitDialog from '@/components/SubmitDialog'
import { GAME_STATE, IN_GAME_STATES, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
import { IMG_URLS } from '@/constants/image'
import { FONT_TEST_STRING } from '@/constants/text'
import { useGame } from '@/game'

Object.entries(IMG_URLS).forEach(([key, url]) => Assets.add(key, url))

const FilterContainer = withFilters(Container, {
  matrix: ColorMatrixFilter,
})

function handleStageMount (app) {
  const canvas = document.querySelector('canvas')
  if (!canvas) return
  canvas.style.maxWidth = '100vw'
  canvas.style.maxHeight = 'calc(100vw * 3 / 4)'
}

function Home () {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const {
    state,
    showSubmitModal,
    closeSubmitModal,
    submitScoreAndCloseModal,
  } = useGame(state => ({
    state: state.state,
    showSubmitModal: state.showSubmitModal,
    closeSubmitModal: state.closeSubmitModal,
    submitScoreAndCloseModal: state.submitScoreAndCloseModal,
  }))

  useEffect(() => {
    Assets.load(Object.keys(IMG_URLS)).then(() => {
      setAssetsLoaded(true)
    })
    const WebFont = require('webfontloader')
    WebFont.load({
      custom: {
        families: ['Xiaolai Mono SC'],
        urls: ['https://cdn.jsdelivr.net/npm/cn-fontsource-xiaolai-mono-sc-regular/font.css'],
        testStrings: { 'Xiaolai Mono SC': FONT_TEST_STRING },
      },
      google: {
        families: ['Sono', 'Noto Sans TC'],
      },
      active: e => {
        setFontsLoaded(true)
      },
    })
  }, [])

  return (
    <>
      <Header />
      <div className='flex sm:hidden'>
        This website is not supported on screen smaller than 640px.
      </div>
      <div className='hidden flex-col sm:flex'>
        <div className='flex-1 p-8 flex justify-center'>
          <div className='border-2 border-black select-none'>
            {assetsLoaded && fontsLoaded
              ? (
                <Stage
                  width={SCREEN_WIDTH}
                  height={SCREEN_HEIGHT + TOP_BORDER_HEIGHT}
                  onMount={handleStageMount}
                >
                  <FilterContainer
                    matrix={{ enabled: true }}
                    apply={({ matrix }) => {
                      matrix.reset()
                      if ([GAME_STATE.STAGE_FAILED, GAME_STATE.GAME_OVER].includes(state)) {
                        matrix.desaturate()
                      }
                      return matrix
                    }}
                  >
                    <Background />
                    {IN_GAME_STATES.includes(state) && <MainGame />}

                    {state === GAME_STATE.MAIN_MENU && <GameMenu />}
                    {state === GAME_STATE.README && <Readme />}
                    {state === GAME_STATE.SCOREBOARD && <Scoreboard />}
                    {state === GAME_STATE.STORY && <Storyboard />}
                    {state === GAME_STATE.ENDING && <Ending />}
                  </FilterContainer>
                </Stage>)
              : (
                <div className='w-[1280px] h-[960px] text-[#423934] font-comic text-[96px] flex justify-center items-center bg-[url("/img/bg1.png")]'>
                  Loading...
                </div>
                )}
            <SubmitDialog open={showSubmitModal} onSubmit={submitScoreAndCloseModal} onClose={closeSubmitModal} />
          </div>
        </div>
        <div className='flex justify-center'>Please report any bugs, problems, or issues you may have found to GitHub while playing this game.</div>
      </div>
    </>
  )
}

export default Home
