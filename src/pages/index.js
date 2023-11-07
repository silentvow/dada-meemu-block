import { Container, Stage, withFilters } from '@pixi/react'
import { Assets, ColorMatrixFilter } from 'pixi.js'
import { useCallback, useEffect, useState } from 'react'

import AlertDialog from '@/components/AlertDialog'
import Background from '@/components/Background'
import BounceText from '@/components/BounceText'
import EditTextDialog from '@/components/EditTextDialog'
import Ending from '@/components/Ending'
import GameMenu from '@/components/GameMenu'
import Header from '@/components/Header'
import MainGame from '@/components/MainGame'
import Readme from '@/components/Readme'
import Sandbox from '@/components/Sandbox'
import Scoreboard from '@/components/Scoreboard'
import Storyboard from '@/components/Storyboard'
import SubmitDialog from '@/components/SubmitDialog'
import { GAME_STATE, IN_GAME_STATES, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
import { IMG_URLS } from '@/constants/image'
import { SOUND_URLS } from '@/constants/sound'
import { FONT_TEST_STRING } from '@/constants/text'
import { useGame } from '@/game'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { useShallow } from 'zustand/react/shallow'

const SoundProvider = dynamic(() => import('@/components/SoundProvider'), { ssr: false })

Object.entries(IMG_URLS).forEach(([key, url]) => Assets.add(key, url))

const FilterContainer = withFilters(Container, {
  matrix: ColorMatrixFilter,
})

function handleStageMount (app) {
  const canvas = document.querySelector('canvas')
  if (!canvas) return
  canvas.style.minWidth = 'min(1440px, 100vw - 32px)'
  canvas.style.minHeight = 'min(1080px, calc((100vw - 32px) * 3 / 4))'
  canvas.style.maxWidth = 'calc(100vw - 32px)'
  canvas.style.maxHeight = 'calc((100vw - 32px) * 3 / 4)'
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
    setSandboxText,
  } = useGame(
    useShallow(state => ({
      state: state.state,
      showSubmitModal: state.showSubmitModal,
      closeSubmitModal: state.closeSubmitModal,
      submitScoreAndCloseModal: state.submitScoreAndCloseModal,
      setSandboxText: state.setSandboxText,
    })),
  )

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

  const [showEditTextModal, setShowEditTextModal] = useState(false)
  const handleEditText = useCallback(async () => {
    setShowEditTextModal(true)
  }, [])

  return (
    <SoundProvider>
      <Header />
      <div className='flex sm:hidden w-full pt-8 justify-center'>
        {t('index.small_screen')}
      </div>
      <div className='flex flex-col'>
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
                    {state === GAME_STATE.SANDBOX && <Sandbox onEditText={handleEditText} />}
                  </FilterContainer>
                </Stage>)
              : (
                <div className='w-[min(1440px,calc(100vw-32px))] h-[min(1080px,calc(calc(100vw-32px)*0.75))] text-[#423934] font-comic text-[min(144px,10vw)] flex justify-center items-center bg-[url("/img/bg1.png")]'>
                  <BounceText text='Loading...' />
                </div>
                )}
            <SubmitDialog open={showSubmitModal} onSubmit={submitScoreAndCloseModal} onClose={closeSubmitModal} />
            <AlertDialog open={assetsLoadFailed} onClose={() => setAssetsLoadFailed(false)} />
            <EditTextDialog
              open={showEditTextModal}
              onSubmit={text => { setSandboxText(text); setShowEditTextModal(false) }}
              onClose={() => setShowEditTextModal(false)}
            />
          </div>
        </div>
        <div className='flex justify-center flex-wrap'>{t.rich('index.footnote', { github: chunk => <a className='px-1 underline' target='_blank' href='https://github.com/silentvow/dada-meemu-block/issues'>{chunk}</a> })}</div>
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
