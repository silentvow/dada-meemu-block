import { LOCAL_STORAGE_KEY } from '@/constants/game'
import { useGame } from '@/game'
import { Container, Graphics, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import { useEffect, useState } from 'react'
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

function VolumeControl ({ onCancel }) {
  const { getMediaInstance } = useGame(state => ({ getMediaInstance: state.getMediaInstance }))
  const [volumeBGM, setVolumeBGM] = useState(() => Math.round((localStorage.getItem(LOCAL_STORAGE_KEY.VOLUME_BGM) ?? 1) * 100))
  const [volumeSFX, setVolumeSFX] = useState(() => Math.round((localStorage.getItem(LOCAL_STORAGE_KEY.VOLUME_SFX) ?? 1) * 100))

  const addVolumeBGM = () => {
    setVolumeBGM(v => Math.min(100, v + 10))
  }

  const subVolumeBGM = () => {
    setVolumeBGM(v => Math.max(0, v - 10))
  }

  const addVolumeSFX = () => {
    setVolumeSFX(v => Math.min(100, v + 10))
  }

  const subVolumeSFX = () => {
    setVolumeSFX(v => Math.max(0, v - 10))
  }

  const handleApply = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY.VOLUME_BGM, volumeBGM / 100)
    localStorage.setItem(LOCAL_STORAGE_KEY.VOLUME_SFX, volumeSFX / 100)
    onCancel()
  }

  const handleCancel = () => {
    const v = localStorage.getItem(LOCAL_STORAGE_KEY.VOLUME_BGM) ?? 1
    getMediaInstance()?.set('volume', parseFloat(v))
    onCancel()
  }

  useEffect(() => {
    getMediaInstance()?.set('volume', volumeBGM / 100)
  }, [getMediaInstance, volumeBGM])

  return (
    <Container x={400} y={300}>
      <Graphics draw={drawMainArea} />
      <Text x={16} y={16} text='音樂' style={textStyle} />
      <Text x={16 + 56 * 5.5} y={16} anchor={[0.5, 0]} text={`${volumeBGM}％`} style={textStyle} />
      <Text x={16 + 56 * 3} y={16} text='－' style={textStyle} eventMode='static' onclick={subVolumeBGM} ontouchstart={subVolumeBGM} />
      <Text x={16 + 56 * 7} y={16} text='＋' style={textStyle} eventMode='static' onclick={addVolumeBGM} ontouchstart={addVolumeBGM} />
      <Text x={16} y={16 + LINE_HEIGHT} text='音效' style={textStyle} />
      <Text x={16 + 56 * 5.5} y={16 + LINE_HEIGHT} anchor={[0.5, 0]} text={`${volumeSFX}％`} style={textStyle} />
      <Text x={16 + 56 * 3} y={16 + LINE_HEIGHT} text='－' style={textStyle} eventMode='static' onclick={subVolumeSFX} ontouchstart={subVolumeSFX} />
      <Text x={16 + 56 * 7} y={16 + LINE_HEIGHT} text='＋' style={textStyle} eventMode='static' onclick={addVolumeSFX} ontouchstart={addVolumeSFX} />
      <SmallMenuButton x={16} y={300 - 80 - 16} text='確定' onClick={handleApply} />
      <SmallMenuButton x={480 - 16 - (216 * 80 / 95)} y={300 - 80 - 16} text='取消' onClick={handleCancel} />
    </Container>
  )
}

export default VolumeControl
