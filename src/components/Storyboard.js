import { BALL_COLOR, SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/game'
import { IMG_URLS } from '@/constants/image'
import { useGame } from '@/game'
import { Container, Graphics, Sprite, Text, useApp, withFilters } from '@pixi/react'
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
  const app = useApp()
  const { chapter, sceneIndex, gotoNextScene, isTransitioning, endEnterStageTransition } = useGame(state => ({
    chapter: state.chapter,
    sceneIndex: state.sceneIndex,
    gotoNextScene: state.gotoNextScene,
    isTransitioning: state.isTransitioning,
    endEnterStageTransition: state.endEnterStageTransition,
  }))
  const story = chapter[sceneIndex] ?? {}
  const [mask, setMask] = useState(null)
  const refMask = useRef(null)

  useEffect(() => {
    setMask(refMask.current)
  }, [])

  const [scaleY, setScaleY] = useState(1)
  useEffect(() => {
    if (!isTransitioning) return
    function fn () {
      setScaleY(y => Math.max(0, y - 0.03))
    }
    app.ticker.add(fn)
    return () => {
      app.ticker.remove(fn)
    }
  }, [app.ticker, isTransitioning])

  useEffect(() => {
    if (scaleY <= 0) {
      endEnterStageTransition()
    }
  }, [endEnterStageTransition, scaleY])

  const [angle, setAngle] = useState(0)
  useEffect(() => {
    function fn () {
      setAngle(a => (a + 1) % 360)
    }
    app.ticker.add(fn)
    return () => {
      app.ticker.remove(fn)
    }
  }, [app.ticker])

  const [displayLength, setDisplayLength] = useState(0)
  const isTextAppeared = displayLength >= story.content?.length
  useEffect(() => {
    function fn () {
      setDisplayLength(a => Math.min(a + 0.5, story.content?.length ?? 0))
    }
    app.ticker.add(fn)
    return () => {
      app.ticker.remove(fn)
      setDisplayLength(0)
    }
  }, [app.ticker, story.content])

  return (
    <Container width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
      <Container x={0} y={695 * (1 - scaleY)} scale={{ x: 1, y: scaleY }}>
        <Graphics draw={drawMainArea} />
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
        <Graphics ref={refMask} preventRedraw draw={drawMask} />
      </Container>
      <Container x={0} y={695 * (1 - scaleY) + 0} scale={{ x: 1, y: scaleY }}>
        <Graphics
          draw={drawTextArea}
          eventMode='static'
          onclick={isTextAppeared ? gotoNextScene : null}
          ontouchstart={isTextAppeared ? gotoNextScene : null}
        />
        {story.content && (
          <Text
            x={10 + TEXT_PADDING}
            y={695 + TEXT_PADDING}
            text={story.content.slice(0, Math.floor(displayLength))}
            style={textStyle}
          />
        )}
        {isTextAppeared && (
          <Sprite
            x={1280 - TEXT_PADDING - 10 - 12}
            y={960 - TEXT_PADDING - 10 - 12}
            anchor={[0.5, 0.5]} scale={0.5}
            angle={angle}
            image={IMG_URLS[BALL_COLOR.BLUE]}
          />
        )}
      </Container>
    </Container>
  )
}

export default Storyboard
