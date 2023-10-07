import { Container, Stage, withFilters } from '@pixi/react'
import Link from 'next/link'
import { Assets, ColorMatrixFilter } from 'pixi.js'

import Background from '@/components/Background'
import GameMenu from '@/components/GameMenu'
import MainGame from '@/components/MainGame'
import Readme from '@/components/Readme'
import Scoreboard from '@/components/Scoreboard'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { GAME_STATE, IMG_URLS, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
import { FONT_TEST_STRING } from '@/constants/text'
import { useGame } from '@/game'
import { useEffect, useState } from 'react'

Object.entries(IMG_URLS).forEach(([key, url]) => Assets.add(key, url))

const FilterContainer = withFilters(Container, {
  matrix: ColorMatrixFilter,
})

function Home () {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const {
    state,
  } = useGame(state => ({
    state: state.state,
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
    <div className='hidden flex-col md:flex'>
      <div className='border-b'>
        <div className='flex h-16 items-center px-4'>
          <nav
            className='flex items-center space-x-4 lg:space-x-6'
          >
            <Link
              href='#'
              className='text-md font-medium transition-colors hover:text-primary'
            >
              DaDa &amp; MeeMu&rsquo;s Treasure Hunt
            </Link>
          </nav>
          <div className='ml-auto flex items-center space-x-4'>
            <Link href='#'>
              <Avatar className='h-8 w-8'>
                <AvatarImage src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='github' />
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-1 p-8 flex justify-center'>
        <div className='border-2 border-black select-none'>
          {assetsLoaded && fontsLoaded
            ? (
              <Stage
                width={SCREEN_WIDTH}
                height={SCREEN_HEIGHT + TOP_BORDER_HEIGHT}
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
                  {[GAME_STATE.READY, GAME_STATE.PLAYING, GAME_STATE.STAGE_CLEAR, GAME_STATE.STAGE_FAILED, GAME_STATE.GAME_OVER].includes(state) && <MainGame />}

                  {state === GAME_STATE.MAIN_MENU && <GameMenu />}
                  {state === GAME_STATE.README && <Readme />}
                  {state === GAME_STATE.SCOREBOARD && <Scoreboard />}
                </FilterContainer>
              </Stage>)
            : (
              <div className='w-[1280px] h-[960px] text-[#423934] font-comic text-[96px] flex justify-center items-center bg-[url("/img/bg1.png")]'>
                Loading...
              </div>
              )}
        </div>
      </div>
    </div>
  )
}

export default Home
