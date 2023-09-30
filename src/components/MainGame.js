import { BALL_DEFAULT_RADIUS, BLOCK_HEIGHT, BLOCK_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
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

  return (
    <Container width={SCREEN_WIDTH} height={SCREEN_HEIGHT} y={TOP_BORDER_HEIGHT} eventMode='static' onmousemove={onMouseMove} onclick={onClick} hitArea={hitArea}>
      {blocks.map(block => {
        return (
          <Sprite key={block.id} x={block.x} y={block.y} image={`https://placehold.co/${BLOCK_WIDTH}x${BLOCK_HEIGHT}/orange/000`} />
        )
      })}
      {balls.map(ball => {
        return (
          <Sprite
            key={ball.id}
            x={ball.x - ball.radius}
            y={ball.y - ball.radius}
            scale={{ x: ball.radius / BALL_DEFAULT_RADIUS, y: ball.radius / BALL_DEFAULT_RADIUS }}
            image={`https://placehold.co/${BALL_DEFAULT_RADIUS * 2}x${BALL_DEFAULT_RADIUS * 2}/blue/000`}
          />
        )
      })}
      <Sprite x={paddle.x} y={paddle.y} image={`https://placehold.co/${paddle.width}x${paddle.height}/green/000`} />
    </Container>
  )
}

export default withPixiApp(MainGame)
