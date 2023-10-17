import { GAME_MODE, SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/game'
import { IMG_URLS } from '@/constants/image'
import { useGame } from '@/game'
import { Container, Graphics, Sprite, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import { useEffect, useRef, useState } from 'react'
import MenuButton from './MenuButton'

const TEXT_PADDING = 16

const textStyle = new TextStyle({
  align: 'left',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: 48,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: 48 * 1.2,
  breakWords: true,
  wordWrap: true,
  wordWrapWidth: 1260 - 32,
})

function drawMask (g) {
  g.beginFill(0x000000)
  g.drawRoundedRect(40 + 2, 10 + 2, 1200 - 4, 675 - 4, 18)
  g.endFill()
}

function drawMainArea (g) {
  g.clear()
  g.lineStyle({ width: 4, color: 0xF4D29C })
  g.beginFill(0x5B3138, 1)
  g.drawRoundedRect(40, 10, 1200, 675, 20)
  g.endFill()
}

function drawTextArea (g) {
  g.clear()
  g.lineStyle({ width: 4, color: 0xF4D29C })
  g.beginFill(0x5B3138, 1)
  g.drawRoundedRect(10, 695, 1260, 255, 20)
  g.endFill()
}

function getResultOf ({ mode, money }) {
  if ([GAME_MODE.STORY, GAME_MODE.EXTRA_STORY].includes(mode)) {
    if (money >= 12000000) { return '鸚鵡王' }
    if (money >= 10500000) { return '挖到石油的鸚鵡' }
    if (money >= 9000000) { return '鸚鵡幫幹部' }
    if (money >= 6500000) { return '正職間諜鸚鵡' }
    if (money >= 4000000) { return '見習間諜鸚鵡' }
    return '雞腿'
  }

  /* NOTE: challenge mode */
  if (money >= 500000000) { return '鸚鵡王' }
  if (money >= 420000000) { return '挖到石油的鸚鵡' }
  if (money >= 360000000) { return '鸚鵡幫幹部' }
  if (money >= 250000000) { return '正職間諜鸚鵡' }
  if (money >= 150000000) { return '見習間諜鸚鵡' }
  return '雞腿'
}

function Ending () {
  const { mode, money, stageComplete, enterMainMenu, openSubmitModal } = useGame(state => ({
    mode: state.mode,
    money: state.money,
    stageComplete: state.stageComplete,
    enterMainMenu: state.enterMainMenu,
    openSubmitModal: state.openSubmitModal,
  }))
  const [mask, setMask] = useState(null)
  const refMask = useRef(null)

  useEffect(() => {
    setMask(refMask.current)
  }, [])

  return (
    <Container width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
      <Graphics draw={drawMainArea} />
      <Graphics draw={drawTextArea} />
      <Sprite mask={mask} x={40} y={10} width={1200} height={675} scale={{ x: 1200 / 1920, y: 675 / 1080 }} image={stageComplete ? IMG_URLS.ENDING : IMG_URLS.GAME_OVER} />
      <Text
        x={10 + TEXT_PADDING}
        y={695 + TEXT_PADDING}
        text={`遊戲結束！感謝您的遊玩！\n本局紀錄：$${money}\n本局評價：${getResultOf({ mode, money })}`}
        style={textStyle}
      />
      <Container x={760} y={695}>
        <MenuButton x={0} y={30} text='提交紀錄' onClick={openSubmitModal} />
        <MenuButton x={0} y={140} text='返回首頁' onClick={enterMainMenu} />
      </Container>
      <Graphics ref={refMask} preventRedraw draw={drawMask} />
    </Container>
  )
}

export default Ending
