import { BALL_COLOR, LOCAL_STORAGE_KEY, SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/game'
import { IMG_URLS } from '@/constants/image'
import { TEXT_SPEED, TEXT_SPEED_VALUE } from '@/constants/text'
import { useGame } from '@/game'
import { Container, Graphics, Sprite, Text, withFilters } from '@pixi/react'
import { ColorMatrixFilter, TextStyle } from 'pixi.js'
import { animate, linear } from 'popmotion'
import { useEffect, useRef, useState } from 'react'
import SmallMenuButton from './SmallMenuButton'

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

const textOffsetX = 10 + TEXT_PADDING
const textOffsetY = 695 + TEXT_PADDING
const spinnerOffsetX = 1280 - TEXT_PADDING - 10 - 12
const spinnerOffsetY = 960 - TEXT_PADDING - 10 - 12
const skipButtonOffsetX = 1280 - TEXT_PADDING - 10 - 216 * 0.6 * 80 / 95
const skipButtonOffsetY = 695 + TEXT_PADDING

function Storyboard () {
  const [textSpeed] = useState(() => { return TEXT_SPEED_VALUE[window.localStorage.getItem(LOCAL_STORAGE_KEY.TEXT_SPEED) ?? TEXT_SPEED.NORMAL] })
  const { chapter, sceneIndex, skipScenes, gotoNextScene, isTransitioning, endEnterStageTransition } = useGame(state => ({
    chapter: state.chapter,
    sceneIndex: state.sceneIndex,
    skipScenes: state.skipScenes,
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
    animate({
      from: 1,
      to: 0,
      duration: 300,
      onUpdate: latest => setScaleY(latest),
      onComplete: () => endEnterStageTransition(),
    })
  }, [endEnterStageTransition, isTransitioning])

  const [angle, setAngle] = useState(0)
  useEffect(() => {
    const playback = animate({
      from: 0,
      to: 360,
      ease: linear,
      duration: 2000,
      repeat: Infinity,
      repeatType: 'loop',
      onUpdate: latest => setAngle(Math.round(latest)),
    })

    return () => {
      playback.stop()
    }
  }, [])

  const [displayLength, setDisplayLength] = useState(0)
  const [isTextAppeared, setIsTextAppeared] = useState(false)
  useEffect(() => {
    const contentLength = story.content?.length ?? 0
    animate({
      from: 0,
      to: contentLength,
      ease: linear,
      duration: contentLength * textSpeed,
      onUpdate: latest => setDisplayLength(Math.round(latest)),
      onComplete: () => setIsTextAppeared(true),
    })

    return () => {
      setIsTextAppeared(false)
      setDisplayLength(0)
    }
  }, [story.content, textSpeed])

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
      <Container x={0} y={695 * (1 - scaleY)} scale={{ x: 1, y: scaleY }}>
        <Graphics
          draw={drawTextArea}
          eventMode='static'
          onclick={isTextAppeared ? gotoNextScene : null}
          ontouchstart={isTextAppeared ? gotoNextScene : null}
        />
        {story.content && (
          <Text
            x={textOffsetX}
            y={textOffsetY}
            text={story.content.slice(0, Math.floor(displayLength))}
            style={textStyle}
          />
        )}
        {isTextAppeared && (
          <Sprite
            x={spinnerOffsetX}
            y={spinnerOffsetY}
            anchor={[0.5, 0.5]} scale={0.5}
            angle={angle}
            image={IMG_URLS[BALL_COLOR.BLUE]}
          />
        )}
        <SmallMenuButton x={skipButtonOffsetX} y={skipButtonOffsetY} scale={0.6} text='略過' onClick={skipScenes} />
      </Container>
    </Container>
  )
}

export default Storyboard
