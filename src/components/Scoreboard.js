import { useGame } from '@/game'
import { Container, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'

const textStyle = new TextStyle({
  align: 'left',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: 56,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: 80,
})

function Scoreboard () {
  const { enterMainMenu } = useGame(state => ({ enterMainMenu: state.enterMainMenu }))

  return (
    <Container width={1280} height={960} eventMode='static' onclick={enterMainMenu}>
      <Text x={1280 / 2} y={960 / 2} anchor={[0.5, 0.5]} text='Under Construction...' style={textStyle} />
    </Container>
  )
}

export default Scoreboard
