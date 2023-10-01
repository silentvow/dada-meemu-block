import { BALL_IMAGE_RADIUS, IMG_URLS, ITEM_HEIGHT, ITEM_WIDTH, PADDLE_HEIGHT, PADDLE_IMG_HEIGHT, PADDLE_IMG_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
import { useGame } from '@/game'
import { Container, Sprite, Text, useTick, withPixiApp } from '@pixi/react'
import { useEffect } from 'react'

const hitArea = {
  contains: () => true,
}

function imgUrl (item) {
  return IMG_URLS[item] || `https://placehold.co/${ITEM_WIDTH}x${ITEM_HEIGHT}/red/fff?text=${item}`
}

function MainGame ({ app }) {
  const { reset, displayMoney, blocks, balls, items, paddle, mainLoop, onMouseMove, onClick } = useGame(state => state)
  useEffect(() => {
    reset()
  }, [reset])

  useTick((delta, ticker) => {
    mainLoop()
  })

  return (
    <Container width={SCREEN_WIDTH} height={SCREEN_HEIGHT} y={TOP_BORDER_HEIGHT} eventMode='static' onmousemove={onMouseMove} onclick={onClick} hitArea={hitArea}>
      {blocks.map(block => {
        return (
          <Sprite key={block.id} x={block.x} y={block.y} image='/img/box.png' />
        )
      })}
      {items.map(item => {
        return (
          <Sprite key={item.id} x={item.x} y={item.y} image={imgUrl(item.item)} />
        )
      })}
      {balls.map(ball => {
        return (
          <Sprite
            key={ball.id}
            x={ball.x}
            y={ball.y}
            scale={{ x: ball.radius / BALL_IMAGE_RADIUS, y: ball.radius / BALL_IMAGE_RADIUS }}
            angle={ball.angle}
            anchor={[0.5, 0.5]}
            image={ball.red ? '/img/red-meemu.png' : '/img/meemu.png'}
          />
        )
      })}
      <Sprite x={paddle.x} y={paddle.y} scale={{ x: paddle.width / PADDLE_IMG_WIDTH, y: PADDLE_HEIGHT / PADDLE_IMG_HEIGHT }} image='/img/paddle.png' />
      <Text x={4} y={SCREEN_HEIGHT - 36} text={`$ ${displayMoney}`} style={{ fill: '#000', fontSize: 36, fontFamily: '"Pixelify Sans", cursive' }} />
    </Container>
  )
}

export default withPixiApp(MainGame)
