import { Container, Sprite, Stage, Text, withFilters } from '@pixi/react'
import Link from 'next/link'
import { Assets, TextStyle, filters } from 'pixi.js'

import Background from '@/components/Background'
import MainGame from '@/components/MainGame'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { GAME_STATE, IMG_URLS, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
import { useGame } from '@/game'
import { useEffect, useState } from 'react'
// import WebFont from 'webfontloader'

Object.entries(IMG_URLS).forEach(([key, url]) => Assets.add(key, url))

const FilterContainer = withFilters(Container, {
  matrix: filters.ColorMatrixFilter,
})

const menuStyle = new TextStyle({
  align: 'left',
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 50,
  fontWeight: '400',
  fill: ['#ffffff', '#000000'], // gradient
  // stroke: '#01d27e',
  strokeThickness: 5,
  letterSpacing: 12,
  // dropShadow: true,
  // dropShadowColor: '#ccced2',
  // dropShadowBlur: 4,
  // dropShadowAngle: Math.PI / 6,
  // dropShadowDistance: 6,
  // wordWrap: true,
  // wordWrapWidth: 440,
})

function Home () {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const {
    state,
    enterGame,
  } = useGame(state => ({
    state: state.state,
    enterGame: state.enterGame,
  }))

  useEffect(() => {
    Assets.load(Object.keys(IMG_URLS)).then(() => {
      setAssetsLoaded(true)
    })
    const WebFont = require('webfontloader')
    WebFont.load({
      google: {
        families: ['Sono'],
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
                  {state !== GAME_STATE.MENU && <MainGame />}

                  {state === GAME_STATE.MENU && (
                    <>
                      <Sprite x={40} y={20} width={1200} height={675} scale={{ x: 0.625, y: 0.625 }} image={IMG_URLS.COVER} />
                      <Container x={500} y={530}>
                        <Text text='Start' style={menuStyle} eventMode='static' onclick={enterGame} />
                      </Container>
                    </>
                  )}
                </FilterContainer>
              </Stage>)
            : (
              <div>Loading...</div>
              )}
        </div>
      </div>
    </div>
  )
}

export default Home
