import { Container, Stage, Text } from '@pixi/react'
import Link from 'next/link'
import { TextStyle } from 'pixi.js'

import MainGame from '@/components/MainGame'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { useState } from 'react'

const menuStyle = new TextStyle({
  align: 'left',
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 50,
  fontWeight: '400',
  fill: ['#ffffff', '#000000'], // gradient
  stroke: '#01d27e',
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
  const [inGame, setInGame] = useState(false)

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
              DaDa MeeMu Block
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
        <div className='border-2 border-black'>
          <Stage
            width={1280}
            height={960}
            options={{ backgroundColor: 0xdff6f5 }}
          >
            {inGame && <MainGame />}

            {!inGame && (
              <Container x={400} y={330}>
                <Text text='Start Game' style={menuStyle} eventMode='static' onclick={e => setInGame(true)} />
                <Text y={100} text='Rankings' style={menuStyle} eventMode='static' />
              </Container>
            )}
          </Stage>
        </div>
      </div>
    </div>
  )
}

export default Home
