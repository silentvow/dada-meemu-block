import {
  BALL_IMAGE_RADIUS,
  BLOCK,
  BULLET_HEIGHT,
  BULLET_IMG_HEIGHT,
  BULLET_IMG_WIDTH,
  BULLET_WIDTH,
  GAME_STATE,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  LOCAL_STORAGE_KEY,
  MONEY_ITEMS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TOP_BORDER_HEIGHT,
} from '@/constants/game'
import { IMG_KEY, IMG_URLS, SPRITE } from '@/constants/image'
import { FPS_LIMIT, FPS_LIMIT_VALUE } from '@/constants/text'
import { useGame } from '@/game'
import { Container, Sprite, Text, useTick, withPixiApp } from '@pixi/react'
import { useEffect } from 'react'

const hitArea = {
  contains: () => true,
}

const titleStyle = {
  fill: '#fff',
  fontSize: 96,
  fontFamily: '"Joystix Monospace", sans-serif',
  stroke: '#000',
  strokeThickness: 8,
  align: 'center',
  letterSpacing: 8,
  lineHeight: 96 * 1.2,
  trim: true,
}

const footerStyle = {
  fill: '#fff',
  fontSize: 32,
  fontFamily: '"Joystix Monospace", sans-serif',
  stroke: '#000',
  strokeThickness: 4,
  letterSpacing: 2,
  lineHeight: 32 * 1.2,
  trim: true,
}

function imgUrl (item) {
  return IMG_URLS[item] || `https://placehold.co/${ITEM_WIDTH}x${ITEM_HEIGHT}/red/fff?text=${item}`
}

function blockImgUrl (block) {
  const hasMoney = MONEY_ITEMS.includes(block.item)
  switch (block.type) {
    case BLOCK.NORMAL_1: {
      switch (block.hp) {
        case 1:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_1_DOLLAR_1 : IMG_KEY.BLOCK_NORMAL_1_1)
        case 2:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_1_DOLLAR : IMG_KEY.BLOCK_NORMAL_1)
      }
      break
    }
    case BLOCK.NORMAL_2: {
      switch (block.hp) {
        case 1:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_2_DOLLAR_3 : IMG_KEY.BLOCK_NORMAL_2_3)
        case 2:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_2_DOLLAR_2 : IMG_KEY.BLOCK_NORMAL_2_2)
        case 3:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_2_DOLLAR_1 : IMG_KEY.BLOCK_NORMAL_2_1)
        case 4:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_2_DOLLAR : IMG_KEY.BLOCK_NORMAL_2)
      }
      break
    }
    case BLOCK.NORMAL_3: {
      switch (block.hp) {
        case 1:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_3_DOLLAR_5 : IMG_KEY.BLOCK_NORMAL_3_5)
        case 2:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_3_DOLLAR_4 : IMG_KEY.BLOCK_NORMAL_3_4)
        case 3:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_3_DOLLAR_3 : IMG_KEY.BLOCK_NORMAL_3_3)
        case 4:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_3_DOLLAR_2 : IMG_KEY.BLOCK_NORMAL_3_2)
        case 5:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_3_DOLLAR_1 : IMG_KEY.BLOCK_NORMAL_3_1)
        case 6:
          return imgUrl(hasMoney ? IMG_KEY.BLOCK_NORMAL_3_DOLLAR : IMG_KEY.BLOCK_NORMAL_3)
      }
      break
    }
    case BLOCK.STONE:
      return imgUrl(IMG_KEY.BLOCK_STONE)
  }
}

function MainGame ({ app }) {
  useEffect(() => {
    globalThis.__PIXI_APP__ = app
  }, [app])

  const {
    life,
    stage,
    state,
    displayMoney,
    blocks,
    balls,
    bullets,
    items,
    paddle,
    mainLoop,
    onGameMouseMove,
    onGameClick,
    onGameKeyDown,
    onGameTouchEnd,
  } = useGame()

  useTick((delta, ticker) => {
    mainLoop(delta)
  })

  useEffect(() => {
    document.addEventListener('keydown', onGameKeyDown)
    return () => {
      document.removeEventListener('keydown', onGameKeyDown)
    }
  }, [onGameKeyDown])

  useEffect(() => {
    const fpsLimit = localStorage.getItem(LOCAL_STORAGE_KEY.FPS_LIMIT) ?? FPS_LIMIT.NO_LIMIT
    app.ticker.maxFPS = FPS_LIMIT_VALUE[fpsLimit]
  }, [app])

  return (
    <Container
      x={0}
      y={TOP_BORDER_HEIGHT}
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT}
      eventMode='static'
      onmousemove={onGameMouseMove}
      onclick={onGameClick}
      ontouchmove={onGameMouseMove}
      ontouchstart={onGameClick}
      ontouchend={onGameTouchEnd}
      hitArea={hitArea}
    >
      {blocks.map(block => {
        return (
          <Sprite key={block.id} x={block.x} y={block.y} image={blockImgUrl(block)} />
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
            image={IMG_URLS[ball.color]}
          />
        )
      })}
      {state === GAME_STATE.READY && <Text x={640} y={560} anchor={[0.5, 1]} text={`STAGE ${stage + 1}\nREADY`} style={titleStyle} />}
      {state === GAME_STATE.PAUSED && <Text x={640} y={500} anchor={[0.5, 1]} text='PAUSED' style={titleStyle} />}
      {state === GAME_STATE.STAGE_CLEAR && <Text x={640} y={560} anchor={[0.5, 1]} text={'STAGE\nCLEAR'} style={titleStyle} />}
      <Text x={8} y={8} text={`$${displayMoney}`} style={footerStyle} />
      <Sprite
        x={SCREEN_WIDTH - 8 - 32 - 32}
        y={4}
        anchor={[1, 0]}
        scale={{ x: BULLET_WIDTH / BULLET_IMG_WIDTH, y: BULLET_HEIGHT / BULLET_IMG_HEIGHT }}
        image={IMG_URLS.BULLET}
      />
      <Text
        x={SCREEN_WIDTH - 8}
        y={8}
        anchor={[1, 0]}
        text={`${paddle.bullet.toString().padStart(2, '0')}`}
        style={footerStyle}
      />
      <Sprite
        x={SCREEN_WIDTH - 8 - 32 - 32 - 32 - 16 - 32 - 4}
        y={9}
        anchor={[1, 0]}
        scale={{ x: 30 / 48, y: 24.375 / 39 }}
        image={IMG_URLS.HEART}
      />
      <Text
        x={SCREEN_WIDTH - 8 - 32 - 32 - 32 - 16}
        y={8}
        anchor={[1, 0]}
        text={`${life}`}
        style={footerStyle}
      />
      <Sprite
        x={paddle.x}
        y={paddle.y}
        {...SPRITE[paddle.imgKey]}
      />
    </Container>
  )
}

export default withPixiApp(MainGame)
