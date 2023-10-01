import { BALL_IMAGE_RADIUS, BULLET_HEIGHT, BULLET_IMG_HEIGHT, BULLET_IMG_WIDTH, BULLET_WIDTH, IMG_URLS, ITEM_HEIGHT, ITEM_WIDTH, PADDLE_HEIGHT, PADDLE_IMG_HEIGHT, PADDLE_IMG_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
import { useGame } from '@/game'
import { Container, Sprite, Text, useTick, withPixiApp } from '@pixi/react'
import { useEffect } from 'react'

const hitArea = {
  contains: () => true,
}

const footerStyle = {
  fill: '#fff',
  fontSize: 36,
  fontFamily: '"Wellfleet", serif',
  stroke: '#000',
  strokeThickness: 4,
}

function imgUrl (item) {
  return IMG_URLS[item] || `https://placehold.co/${ITEM_WIDTH}x${ITEM_HEIGHT}/red/fff?text=${item}`
}

function MainGame ({ app }) {
  const { reset, displayMoney, blocks, balls, bullets, items, paddle, mainLoop, onMouseMove, onClick } = useGame(state => state)
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
          <Sprite key={block.id} x={block.x} y={block.y} image={imgUrl(block.type)} />
        )
      })}
      {items.map(item => {
        return (
          <Sprite key={item.id} x={item.x} y={item.y} image={imgUrl(item.item)} />
        )
      })}
      {bullets.map(bullets => {
        return (
          <Sprite
            key={bullets.id}
            x={bullets.x}
            y={bullets.y}
            scale={{ x: BULLET_WIDTH / BULLET_IMG_WIDTH, y: BULLET_HEIGHT / BULLET_IMG_HEIGHT }}
            image={IMG_URLS.BULLET}
          />
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
            image={ball.red ? IMG_URLS.RED_BALL : IMG_URLS.BALL}
          />
        )
      })}
      <Text x={4} y={SCREEN_HEIGHT - 46} text={`$ ${displayMoney}`} style={footerStyle} />
      <Sprite
        x={SCREEN_WIDTH - 102}
        y={SCREEN_HEIGHT - 40}
        scale={{ x: BULLET_WIDTH / BULLET_IMG_WIDTH, y: BULLET_HEIGHT / BULLET_IMG_HEIGHT }}
        image={IMG_URLS.BULLET}
      />
      <Text
        x={SCREEN_WIDTH - 68}
        y={SCREEN_HEIGHT - 46}
        text={`x${paddle.bullet.toString().padStart(2, '0')}`}
        style={footerStyle}
      />
      <Sprite
        x={paddle.x}
        y={paddle.y}
        scale={{ x: paddle.width / PADDLE_IMG_WIDTH, y: PADDLE_HEIGHT / PADDLE_IMG_HEIGHT }}
        image={IMG_URLS.PADDLE}
      />
    </Container>
  )
}

export default withPixiApp(MainGame)
