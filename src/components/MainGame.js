import { BALL_IMAGE_RADIUS, ITEM, ITEM_HEIGHT, ITEM_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH, TOP_BORDER_HEIGHT } from '@/constants/game'
import { useGame } from '@/game'
import { Container, Sprite, Text, useTick, withPixiApp } from '@pixi/react'
import { useEffect } from 'react'

const hitArea = {
  contains: () => true,
}

function imgUrl (item) {
  return {
    [ITEM.BALL_RED]: '/img/reddrop.png',
    [ITEM.BALL_BLUE]: '/img/bluedrop.png',
    [ITEM.MONEY_100]: '/img/money100.png',
    [ITEM.MONEY_200]: '/img/money200.png',
    [ITEM.MONEY_500]: '/img/money500.png',
    [ITEM.MONEY_1000]: '/img/money1000.png',
    [ITEM.MONEY_2000]: '/img/money2000.png',
  }[item] || `https://placehold.co/${ITEM_WIDTH}x${ITEM_HEIGHT}/red/fff?text=${item}`
}

function MainGame ({ app }) {
  const { reset, money, blocks, balls, items, paddle, mainLoop, onMouseMove, onClick } = useGame(state => state)
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
      <Sprite x={paddle.x} y={paddle.y} image='/img/paddle.png' />
      <Text x={4} y={SCREEN_HEIGHT - 36} text={`$ ${money}`} style={{ fill: '#000', fontSize: 36 }} />
    </Container>
  )
}

export default withPixiApp(MainGame)
