import { Container, Stage, withFilters } from '@pixi/react'
import { Assets, ColorMatrixFilter } from 'pixi.js'
import { useEffect, useState } from 'react'

import AlertDialog from '@/components/AlertDialog'
import Background from '@/components/Background'
import BounceText from '@/components/BounceText'
import Ending from '@/components/Ending'
import GameMenu from '@/components/GameMenu'
import Header from '@/components/Header'
import MainGame from '@/components/MainGame'
import Readme from '@/components/Readme'
import Scoreboard from '@/components/Scoreboard'
import Storyboard from '@/components/Storyboard'
import SubmitDialog from '@/components/SubmitDialog'
import { GAME_STATE, IN_GAME_STATES, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
import { IMG_URLS, SOUND_URLS } from '@/constants/image'
import { FONT_TEST_STRING } from '@/constants/text'
import { useGame } from '@/game'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const SoundProvider = dynamic(() => import('@/components/SoundProvider'), { ssr: false })

Object.entries(IMG_URLS).forEach(([key, url]) => Assets.add(key, url))

const FilterContainer = withFilters(Container, {
  matrix: ColorMatrixFilter,
})

function handleStageMount (app) {
  const canvas = document.querySelector('canvas')
  if (!canvas) return
  canvas.style.minWidth = 'min(1440px, 100vw)'
  canvas.style.minHeight = 'min(1080px, calc(100vw * 3 / 4))'
  canvas.style.maxWidth = '100vw'
  canvas.style.maxHeight = 'calc(100vw * 3 / 4)'
}

function Home () {
  const t = useTranslations()
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [assetsLoadFailed, setAssetsLoadFailed] = useState(false)
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
      const promise = new Promise((resolve, reject) => {
        const { sound } = require('@pixi/sound')
        sound.add(SOUND_URLS, { preload: true, loaded: () => resolve() })
      })
      return promise
    }).then(() => {
      const promise = new Promise((resolve, reject) => {
        const WebFont = require('webfontloader')
        WebFont.load({
          custom: {
            families: ['Xiaolai Mono SC', 'Joystix Monospace'],
            urls: ['https://cdn.jsdelivr.net/npm/cn-fontsource-xiaolai-mono-sc-regular/font.css', '/fonts/fonts.css'],
            testStrings: { 'Xiaolai Mono SC': FONT_TEST_STRING },
          },
          google: {
            families: ['Sono', 'Noto Sans TC'],
          },
          active: e => {
            resolve()
          },
        })
      })
      return promise
    }).then(() => {
      setAssetsLoaded(true)
    }).catch(() => {
      setAssetsLoadFailed(true)
    })
  }, [])

  return (
    <SoundProvider>
      <Header />
      <div className='flex sm:hidden'>
        This website is not supported on screen smaller than 640px.
      </div>
      <div className='hidden flex-col sm:flex'>
        <div className='flex-1 p-8 flex justify-center'>
          <div className='border-2 border-black select-none'>
            {assetsLoaded
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
                <div className='w-[min(1440px,100vw)] h-[min(1080px,calc(100vw*0.75))] text-[#423934] font-comic text-[min(144px,10vw)] flex justify-center items-center bg-[url("/img/bg1.png")]'>
                  <BounceText text='Loading...' />
                </div>
                )}
            <SubmitDialog open={showSubmitModal} onSubmit={submitScoreAndCloseModal} onClose={closeSubmitModal} />
            <AlertDialog open={assetsLoadFailed} onClose={() => setAssetsLoadFailed(false)} />
          </div>
        </div>
        <div className='flex justify-center'>{t.rich('index.footnote', { github: chunk => <a className='px-1 underline' target='_blank' href='https://github.com/silentvow/dada-meemu-block/issues'>{chunk}</a> })}</div>
      </div>
    </SoundProvider>
  )
}

export default Home

export async function getStaticProps (context) {
  return {
    props: {
      messages: (await import(`../locales/${context.locale}.json`)).default,
    },
  }
}
