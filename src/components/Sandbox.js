import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/game'
import { IMG_KEY, SPRITE } from '@/constants/image'
import { useGame } from '@/game'
import { Container, Graphics, Sprite, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import { useCallback, useEffect, useRef, useState } from 'react'
import MenuButton from './MenuButton'

const BG_KEYS = [
  IMG_KEY.BATHROOM,
  IMG_KEY.BEDROOM,
  IMG_KEY.BG_ROCK,
  IMG_KEY.BREAK_WALL,
  IMG_KEY.DINING_ROOM,
  IMG_KEY.RUIN_ENTRY,
  IMG_KEY.OFFICE,
  IMG_KEY.WALL,
]

const DA_KEYS = [
  IMG_KEY.REAL_DA_1,
  IMG_KEY.REAL_DA_2,
  IMG_KEY.REAL_DA_3,
  IMG_KEY.REAL_DA_4,
]

const DIS_VALUES = [
  0.4,
  0.5,
  0.6,
  0.7,
]

const POS_VALUES = [
  320,
  640,
  960,
]

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

const textOffsetX = 10 + TEXT_PADDING
const textOffsetY = 695 + TEXT_PADDING

function Sandbox ({ onEditText }) {
  const [bgIndex, setBgIndex] = useState(0)
  const [daIndex, setDaIndex] = useState(0)
  const [disIndex, setDitIndex] = useState(2)
  const [posIndex, setPosIndex] = useState(1)
  const [mask, setMask] = useState(null)
  const refMask = useRef(null)

  const [showMenu, setShowMenu] = useState(true)

  const sandboxText = useGame(state => state.sandboxText || '')
  const setSandboxText = useGame(state => state.setSandboxText)
  const enterMainMenu = useGame(state => state.enterMainMenu)

  useEffect(() => {
    setMask(refMask.current)
  }, [])

  const changeBg = useCallback(() => {
    setBgIndex(v => (v + 1) % BG_KEYS.length)
  }, [])

  const changeDa = useCallback(() => {
    setDaIndex(v => (v + 1) % DA_KEYS.length)
  }, [])

  const changeDis = useCallback(() => {
    setDitIndex(v => (v + 1) % DIS_VALUES.length)
  }, [])

  const changePos = useCallback(() => {
    setPosIndex(v => (v + 1) % POS_VALUES.length)
  }, [])

  const handleEditText = useCallback(() => {
    onEditText()
    setShowMenu(false)
  }, [onEditText])

  return (
    <Container width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
      <Container x={0} y={0}>
        <Graphics draw={drawMainArea} />
        <Sprite
          mask={mask}
          anchor={[0, 0]}
          scale={{ x: 1, y: 1 }}
          {...SPRITE[BG_KEYS[bgIndex]]}
        />
        <Sprite
          mask={mask}
          {...SPRITE[DA_KEYS[daIndex]]}
          x={POS_VALUES[posIndex]}
          y={695}
          anchor={[0.5, 1]}
          scale={{ x: DIS_VALUES[disIndex], y: DIS_VALUES[disIndex] }}
        />
        <Graphics ref={refMask} preventRedraw draw={drawMask} />
      </Container>
      {!showMenu && (
        <Container x={0} y={0}>
          <Graphics
            draw={drawTextArea}
            eventMode='static'
            onclick={() => { setSandboxText(''); setShowMenu(true) }}
            ontouchstart={() => { setSandboxText(''); setShowMenu(true) }}
          />
          <Text
            x={textOffsetX}
            y={textOffsetY}
            text={sandboxText}
            style={textStyle}
          />
        </Container>
      )}
      {showMenu && (
        <Container x={0} y={695}>
          <MenuButton x={100} y={30} text='改變背景' onClick={changeBg} />
          <MenuButton x={480} y={30} text='改變姿勢' onClick={changeDa} />
          <MenuButton x={860} y={30} text='設定文字' onClick={handleEditText} />
          <MenuButton x={100} y={140} text='改變位置' onClick={changePos} />
          <MenuButton x={480} y={140} text='改變比例' onClick={changeDis} />
          <MenuButton x={860} y={140} text='返回前頁' onClick={enterMainMenu} />
        </Container>
      )}
    </Container>
  )
}

export default Sandbox
