import { BLOCK_HEIGHT, BLOCK_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/game'
import { useGame } from '@/game'
import { Container, Sprite, useTick, withPixiApp } from '@pixi/react'
import { useEffect } from 'react'

const hitArea = {
  contains: () => true,
}

function MainGame ({ app }) {
  const { reset, blocks, balls, paddle, mainLoop, onMouseMove, onClick } = useGame(state => state)
  useTick((delta, ticker) => {
    mainLoop()
  })

  useEffect(() => {
    reset()
  }, [reset])

  console.log({ blocks, balls, paddle })

  return (
    <Container width={SCREEN_WIDTH} height={SCREEN_HEIGHT} eventMode='dynamic' onmousemove={onMouseMove} onclick={onClick} hitArea={hitArea}>
      {blocks.map(block => {
        return (
          <Sprite key={block.id} x={block.x} y={block.y} image={`https://placehold.co/${BLOCK_WIDTH}x${BLOCK_HEIGHT}/orange/000`} />
        )
      })}
      {balls.map(ball => {
        return (
          <Sprite key={ball.id} x={ball.x - ball.radius} y={ball.y - ball.radius} image={`https://placehold.co/${ball.radius * 2}x${ball.radius * 2}/blue/000`} />
        )
      })}
      <Sprite x={paddle.x} y={paddle.y} image={`https://placehold.co/${paddle.width}x${paddle.height}/green/000`} />
    </Container>
  )
}

export default withPixiApp(MainGame)
