import { Container, Stage, Text, TilingSprite, withFilters } from '@pixi/react'
import Link from 'next/link'
import { TextStyle, filters } from 'pixi.js'

import MainGame from '@/components/MainGame'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { GAME_STATE, IMG_URLS, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
import { useGame } from '@/game'

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
  const {
    state,
    enterGame,
  } = useGame(state => ({
    state: state.state,
    enterGame: state.enterGame,
  }))

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
          <Stage
            width={1280}
            height={960}
          >
            <FilterContainer
              matrix={{ enabled: true }}
              apply={({ matrix }) => {
                matrix.reset()
                if (state === GAME_STATE.GAME_OVER) {
                  matrix.desaturate()
                }
                return matrix
              }}
            >
              <TilingSprite x={0} y={0} width={SCREEN_WIDTH} height={SCREEN_HEIGHT + TOP_BORDER_HEIGHT} image={IMG_URLS.BACKGROUND} />
              {state !== GAME_STATE.MENU && <MainGame />}

              {state === GAME_STATE.MENU && (
                <Container x={500} y={530}>
                  <Text text='Start' style={menuStyle} eventMode='static' onclick={enterGame} />
                </Container>
              )}
            </FilterContainer>
          </Stage>
        </div>
      </div>
    </div>
  )
}

export default Home
