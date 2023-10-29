import { IMG_URLS } from '@/constants/image'
import { Container, Sprite, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'

const ratio = 80 / 95
const menuStyle = new TextStyle({
  align: 'middle',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: 56,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: 56 * 1.2,
})

function SmallMenuButton ({ x, y, scale, text, onClick }) {
  return (
    <Container x={x} y={y} scale={scale}>
      <Sprite x={0} y={0} width={216 * ratio} height={95 * ratio} scale={ratio} image={IMG_URLS.SMALL_BUTTON} eventMode='static' onclick={onClick} ontouchstart={onClick} />
      <Text x={216 * ratio / 2} y={40} anchor={[0.5, 0.5]} text={text} style={menuStyle} eventMode='static' onclick={onClick} ontouchstart={onClick} />
    </Container>
  )
}

export default SmallMenuButton
