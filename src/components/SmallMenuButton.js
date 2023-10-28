import { IMG_URLS } from '@/constants/image'
import { Container, Sprite, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'

const scale = 80 / 95
const menuStyle = new TextStyle({
  align: 'middle',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: 56,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: 56 * 1.2,
})

function SmallMenuButton ({ x, y, text, onClick }) {
  return (
    <Container x={x} y={y}>
      <Sprite x={0} y={0} width={216 * scale} height={95 * scale} scale={scale} image={IMG_URLS.SMALL_BUTTON} eventMode='static' onclick={onClick} ontouchstart={onClick} />
      <Text x={216 * scale / 2} y={40} anchor={[0.5, 0.5]} text={text} style={menuStyle} eventMode='static' onclick={onClick} ontouchstart={onClick} />
    </Container>
  )
}

export default SmallMenuButton
