import { API_URLS, GAME_MODE } from '@/constants/game'
import { useGame } from '@/game'
import { Container, Graphics, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import { useEffect, useState } from 'react'
import MenuButton from './MenuButton'
import ScoreCard from './ScoreCard'

const textStyle = new TextStyle({
  align: 'center',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: 64,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: 64 * 1.2,
})

function drawBoard (g) {
  g.clear()
  g.lineStyle({ width: 4, color: 0xF4D29C })
  g.beginFill(0x5B3138, 1)
  g.drawRoundedRect(40, 20, 1280 - 80, 960 - 40, 20)
  g.endFill()
}

function Scoreboard () {
  const enterMainMenu = useGame(state => state.enterMainMenu)
  const [loading, setLoading] = useState(true)
  const [records, setRecords] = useState([[], [], [], [], []])
  const [unlockRealMode] = useState(true)

  useEffect(() => {
    fetch(API_URLS.HIGH_SCORE).then(
      result => {
        return result.json()
      },
    ).then(json => {
      setRecords([
        json?.data?.story || [],
        json?.data?.extra_story || [],
        json?.data?.challenge_dada || [],
        json?.data?.challenge_yoda || [],
        json?.data?.challenge_real || [],
      ])
      setLoading(false)
    })
  }, [])

  return (
    <Container width={1280} height={960}>
      <Graphics draw={drawBoard} />
      {loading && <Text x={640} y={480} text='讀取中...' anchor={[0.5, 0.5]} style={textStyle} />}
      <ScoreCard x={120 + 40} y={20 + 16} title='故事模式' records={records[0]} mode={GAME_MODE.STORY} />
      <ScoreCard x={120 + 40} y={20 + 16 + 375 + 24} title='挑戰模式 (標準難度)' records={records[2]} mode={GAME_MODE.CHALLENGE_DADA} />
      <ScoreCard x={760 - 40} y={20 + 16} title='挑戰模式 (幼妲難度)' records={records[3]} mode={GAME_MODE.CHALLENGE_YODA} />
      {unlockRealMode && <ScoreCard x={760 - 40} y={20 + 16 + 375 + 24} title='挑戰模式 (真妲難度)' records={records[4]} mode={GAME_MODE.CHALLENGE_REAL} />}
      <MenuButton x={760} y={140 + 695} text='返回前頁' onClick={enterMainMenu} />
    </Container>
  )
}

export default Scoreboard
