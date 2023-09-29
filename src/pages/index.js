import { Container, Sprite, Stage, Text } from '@pixi/react'
import Link from 'next/link'
import { BlurFilter } from 'pixi.js'
import { useMemo } from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

function Home () {
  const blurFilter = useMemo(() => new BlurFilter(4), [])

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
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-1 p-8 flex justify-center'>
        <Stage width={1280} height={720}>
          <Sprite
            image='https://pixijs.io/pixi-react/img/bunny.png'
            x={400}
            y={270}
            anchor={{ x: 0.5, y: 0.5 }}
          />

          <Container x={400} y={330}>
            <Text text='Hello World' anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />
          </Container>
        </Stage>
      </div>
    </div>
  )
}

export default Home
