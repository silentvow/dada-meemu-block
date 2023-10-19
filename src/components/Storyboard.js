import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/game'
import { useGame } from '@/game'
import { Container, Graphics, Sprite, Text, withFilters } from '@pixi/react'
import { ColorMatrixFilter, TextStyle } from 'pixi.js'
import { useEffect, useRef, useState } from 'react'

const TEXT_PADDING = 16

const FilterContainer = withFilters(Container, {
  matrix: ColorMatrixFilter,
})

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
  g.beginFill(0xFFFFFF, 1)
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

function Storyboard () {
  const { chapter, sceneIndex, gotoNextScene } = useGame(state => ({
    chapter: state.chapter,
    sceneIndex: state.sceneIndex,
    gotoNextScene: state.gotoNextScene,
  }))
  const story = chapter[sceneIndex] ?? {}
  const [mask, setMask] = useState(null)
  const refMask = useRef(null)

  useEffect(() => {
    setMask(refMask.current)
  }, [])

  return (
    <Container width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
      <Graphics draw={drawMainArea} />
      <Graphics draw={drawTextArea} eventMode='static' onclick={gotoNextScene} ontouchstart={gotoNextScene} />
      <FilterContainer
        matrix={{ enabled: true }}
        apply={({ matrix }) => {
          matrix.reset()
          if (story.desaturate) { matrix.desaturate() }
          return matrix
        }}
      >
        {story.graphics?.map((graphic, i) => <Graphics key={i} mask={mask} {...graphic} />)}
        {story.sprites?.map(({ filters, ...sprite }, i) => <Sprite key={`${sprite.image}-${sprite.x}-${sprite.y}`} mask={mask} {...sprite} filters={filters?.() ?? null} />)}
        {story.texts?.map((text, i) => <Text key={i} style={textStyle} {...text} />)}
      </FilterContainer>
      {story.content && (
        <Text
          x={10 + TEXT_PADDING}
          y={695 + TEXT_PADDING}
          text={story.content}
          style={textStyle}
          eventMode='static'
          onclick={gotoNextScene}
          ontouchstart={gotoNextScene}
        />
      )}
      <Graphics ref={refMask} preventRedraw draw={drawMask} />
    </Container>
  )
}

export default Storyboard
