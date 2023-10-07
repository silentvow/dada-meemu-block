import { IMG_URLS } from '@/constants/game'
import { Container, Sprite, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'

const menuStyle = new TextStyle({
  align: 'left',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: 56,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: 80,
})

function MenuButton ({ x, y, text, tooltip, onClick }) {
  return (
    <Container x={x} y={y}>
      <Sprite x={0} y={0} width={320} height={80} scale={{ x: 320 / 380, y: 80 / 95 }} image={IMG_URLS.MENU_BUTTON} eventMode='static' onclick={onClick} />
      <Text x={45} y={0} text={text} style={menuStyle} eventMode='static' onclick={onClick} />
    </Container>
  )
}

export default MenuButton
