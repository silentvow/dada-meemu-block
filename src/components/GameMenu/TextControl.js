import { LOCAL_STORAGE_KEY } from '@/constants/game'
import { TEXT_SPEED, TEXT_SPEED_NEXT, TEXT_SPEED_PREV } from '@/constants/text'
import { Container, Graphics, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import { useState } from 'react'
import SmallMenuButton from '../SmallMenuButton'

function drawMainArea (g) {
  g.clear()
  g.lineStyle({ width: 4, color: 0xF4D29C })
  g.beginFill(0x5B3138, 1)
  g.drawRoundedRect(0, 0, 480, 300, 20)
  g.endFill()
}

const FONT_SIZE = 56
const LINE_HEIGHT = FONT_SIZE * 1.2

const textStyle = new TextStyle({
  align: 'left',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: FONT_SIZE,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: LINE_HEIGHT,
})

function TextControl ({ onCancel }) {
  const [textSpeed, setTextSpeed] = useState(localStorage.getItem(LOCAL_STORAGE_KEY.TEXT_SPEED) ?? TEXT_SPEED.NORMAL)

  const addTextSpeed = () => {
    setTextSpeed(v => TEXT_SPEED_NEXT[v])
  }

  const subTextSpeed = () => {
    setTextSpeed(v => TEXT_SPEED_PREV[v])
  }

  const applyVolume = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY.TEXT_SPEED, textSpeed)
    onCancel()
  }

  return (
    <Container x={400} y={300}>
      <Graphics draw={drawMainArea} />
      <Text x={16} y={16} text='速度' style={textStyle} />
      <Text x={16 + 56 * 4.5} y={16} text={textSpeed} style={textStyle} />
      <Text x={16 + 56 * 3} y={16} text='－' style={textStyle} eventMode='static' onclick={subTextSpeed} ontouchstart={subTextSpeed} />
      <Text x={16 + 56 * 7} y={16} text='＋' style={textStyle} eventMode='static' onclick={addTextSpeed} ontouchstart={addTextSpeed} />
      <SmallMenuButton x={16} y={300 - 80 - 16} text='確定' onClick={applyVolume} />
      <SmallMenuButton x={480 - 16 - (216 * 80 / 95)} y={300 - 80 - 16} text='取消' onClick={onCancel} />
    </Container>
  )
}

export default TextControl
