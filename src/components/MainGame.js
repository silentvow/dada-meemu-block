import { useGame } from '@/game'
import { Container, Sprite, useTick, withPixiApp } from '@pixi/react'
import { useEffect } from 'react'

const hitArea = {
  contains: () => true,
}

function MainGame ({ app }) {
  const { reset, blocks, balls, paddle, mainLoop, onMouseMove } = useGame(state => state)
  useTick((delta, ticker) => {
    mainLoop()
  })

  useEffect(() => {
    reset()
  }, [reset])

  console.log({ blocks, balls, paddle })

  return (
    <Container width={1280} height={960} x={0} y={0} eventMode='dynamic' onmousemove={onMouseMove} hitArea={hitArea}>
      {blocks.map(block => {
        return (
          <Sprite key={block.id} x={block.x} y={block.y} image='https://placehold.co/64x32/orange/000' />
        )
      })}
      {balls.map(ball => {
        return (
          <Sprite key={ball.id} x={ball.x} y={ball.y} image='https://placehold.co/16x16/blue/000' />
        )
      })}
      <Sprite x={paddle.x} y={paddle.y} image='https://placehold.co/64x16/green/000' />
    </Container>
  )
}

export default withPixiApp(MainGame)
