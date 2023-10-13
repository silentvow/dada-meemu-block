import { HIGH_SCORE_KEYS } from '@/constants/game'
import { Container, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import { Fragment, useState } from 'react'

const fontSize = 24
const lineHeight = fontSize * 1.2
const style = {
  align: 'left',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight,
}

const textStyle = new TextStyle(style)
const textTopStyle = new TextStyle({ ...style, fill: '#6dd8f8' })
const textBottomStyle = new TextStyle({ ...style, fill: '#b8b2b4' })

function ScoreCard ({ x, y, title, records, mode }) {
  const [score] = useState(() => { return window.localStorage.getItem(HIGH_SCORE_KEYS[mode]) || 0 })

  if (records.length === 0) return null

  return (
    <Container x={x} y={y}>
      <Text x={0} y={0} text={title} style={textTopStyle} />
      {records.map((record, index) => (
        <Fragment key={record.id}>
          <Text x={0} y={lineHeight * (index + 1)} text={`${record.name}`} style={textStyle} />
          <Text x={264} y={lineHeight * (index + 1)} text={`${record.score}`} style={textStyle} />
        </Fragment>
      ))}
      <Text x={0} y={lineHeight * 11} text='本機最佳' style={textBottomStyle} />
      <Text x={264} y={lineHeight * 11} text={`${score}`} style={textBottomStyle} />
    </Container>
  )
}

export default ScoreCard
