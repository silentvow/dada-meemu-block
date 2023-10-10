import { IMG_URLS } from '@/constants/image'
import { Container, Sprite, Text, withFilters } from '@pixi/react'
import { ColorMatrixFilter, TextStyle } from 'pixi.js'

const menuStyle = new TextStyle({
  align: 'left',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: 56,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: 80,
})

const FilterContainer = withFilters(Container, {
  matrix: ColorMatrixFilter,
})

function MenuButton ({ x, y, text, disabled, onClick }) {
  return (
    <FilterContainer
      x={x}
      y={y}
      matrix={{ enabled: true }}
      apply={({ matrix }) => {
        matrix.reset()
        if (disabled) { matrix.desaturate() }
        return matrix
      }}
    >
      <Sprite x={0} y={0} width={320} height={80} scale={{ x: 320 / 380, y: 80 / 95 }} image={IMG_URLS.MENU_BUTTON} eventMode='static' onclick={disabled ? null : onClick} />
      <Text x={160} y={40} anchor={[0.5, 0.5]} text={text} style={menuStyle} eventMode='static' onclick={disabled ? null : onClick} />
    </FilterContainer>
  )
}

export default MenuButton
