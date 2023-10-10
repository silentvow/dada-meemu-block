import { Container, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import { Fragment } from 'react'

const textStyle = new TextStyle({
  align: 'left',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: 24,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: 24 * 1.2,
})

function ScoreCard ({ x, y, title, records }) {
  if (records.length === 0) return null

  return (
    <Container x={x} y={y}>
      <Text x={0} y={0} text={title} style={textStyle} />
      {records.map((record, index) => (
        <Fragment key={record.id}>
          <Text x={0} y={24 * 1.2 * (index + 1)} text={`${record.name}`} style={textStyle} />
          <Text x={264} y={24 * 1.2 * (index + 1)} text={`${record.score}`} style={textStyle} />
        </Fragment>
      ))}
    </Container>
  )
}

export default ScoreCard
