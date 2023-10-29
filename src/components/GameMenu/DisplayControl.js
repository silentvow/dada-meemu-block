import { LOCAL_STORAGE_KEY } from '@/constants/game'
import { FPS_LIMIT, FPS_LIMIT_NEXT, FPS_LIMIT_PREV, FPS_LIMIT_VALUE, TEXT_SPEED, TEXT_SPEED_NEXT, TEXT_SPEED_PREV } from '@/constants/text'
import { Container, Graphics, Text, useApp } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import { useState } from 'react'
import SmallMenuButton from '../SmallMenuButton'

function drawMainArea (g) {
  g.clear()
  g.lineStyle({ width: 4, color: 0xF4D29C })
  g.beginFill(0x5B3138, 1)
  g.drawRoundedRect(0, 0, 480 + 56 + 56, 300, 20)
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

function DisplayControl ({ onCancel }) {
  const app = useApp()
  const [fpsLimit, setFpsLimit] = useState(() => localStorage.getItem(LOCAL_STORAGE_KEY.FPS_LIMIT) ?? FPS_LIMIT.NO_LIMIT)
  const [textSpeed, setTextSpeed] = useState(() => localStorage.getItem(LOCAL_STORAGE_KEY.TEXT_SPEED) ?? TEXT_SPEED.NORMAL)

  const addFpsLimit = () => {
    setFpsLimit(v => FPS_LIMIT_NEXT[v])
  }

  const subFpsLimit = () => {
    setFpsLimit(v => FPS_LIMIT_PREV[v])
  }

  const addTextSpeed = () => {
    setTextSpeed(v => TEXT_SPEED_NEXT[v])
  }

  const subTextSpeed = () => {
    setTextSpeed(v => TEXT_SPEED_PREV[v])
  }

  const handleApply = () => {
    app.ticker.maxFPS = FPS_LIMIT_VALUE[fpsLimit]
    localStorage.setItem(LOCAL_STORAGE_KEY.FPS_LIMIT, fpsLimit)
    localStorage.setItem(LOCAL_STORAGE_KEY.TEXT_SPEED, textSpeed)
    onCancel()
  }

  return (
    <Container x={400 - 56} y={300}>
      <Graphics draw={drawMainArea} />
      <Text x={16} y={16} text='字幕速度' style={textStyle} />
      <Text x={16 + 56 * 6.5} y={16} text={textSpeed} style={textStyle} />
      <Text x={16 + 56 * 5} y={16} text='－' style={textStyle} eventMode='static' onclick={subTextSpeed} ontouchstart={subTextSpeed} />
      <Text x={16 + 56 * 9} y={16} text='＋' style={textStyle} eventMode='static' onclick={addTextSpeed} ontouchstart={addTextSpeed} />
      <Text x={16} y={16 + LINE_HEIGHT} text='最大幀數' style={textStyle} />
      <Text x={16 + 56 * 7.5} y={16 + LINE_HEIGHT} anchor={[0.5, 0]} text={fpsLimit} style={textStyle} />
      <Text x={16 + 56 * 5} y={16 + LINE_HEIGHT} text='－' style={textStyle} eventMode='static' onclick={subFpsLimit} ontouchstart={subFpsLimit} />
      <Text x={16 + 56 * 9} y={16 + LINE_HEIGHT} text='＋' style={textStyle} eventMode='static' onclick={addFpsLimit} ontouchstart={addFpsLimit} />
      <SmallMenuButton x={16} y={300 - 80 - 16} text='確定' onClick={handleApply} />
      <SmallMenuButton x={480 + 56 + 56 - 16 - (216 * 80 / 95)} y={300 - 80 - 16} text='取消' onClick={onCancel} />
    </Container>
  )
}

export default DisplayControl
