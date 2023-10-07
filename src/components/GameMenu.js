import { IMG_URLS } from '@/constants/game'
import { useGame } from '@/game'
import { Container, Sprite } from '@pixi/react'
import { useState } from 'react'
import MenuButton from './MenuButton'

// FIXME: remove this
// const menuStyle = new TextStyle({
//   align: 'left',
//   fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
//   fontSize: 56,
//   fontWeight: '400',
//   fill: '#ffffff',
//   fill: ['#ffffff', '#000000'], // gradient
//   stroke: '#01d27e',
//   strokeThickness: 8,
//   letterSpacing: 12,
//   dropShadow: true,
//   dropShadowColor: '#ccced2',
//   dropShadowBlur: 4,
//   dropShadowAngle: Math.PI / 6,
//   dropShadowDistance: 6,
//   wordWrap: true,
//   wordWrapWidth: 440,
// })

function GameMenu () {
  const {
    enterStoryMode,
    enterDadaChallengeMode,
    enterYodaChallengeMode,
    enterRealChallengeMode,
    enterReadme,
    enterScoreboard,
  } = useGame(
    state => ({
      enterStoryMode: state.enterStoryMode,
      enterDadaChallengeMode: state.enterDadaChallengeMode,
      enterYodaChallengeMode: state.enterYodaChallengeMode,
      enterRealChallengeMode: state.enterRealChallengeMode,
      enterReadme: state.enterReadme,
      enterScoreboard: state.enterScoreboard,
    }),
  )
  const [inChallengeMenu, setInChallengeMenu] = useState(false)

  return (
    <>
      <Sprite x={40} y={20} width={1200} height={675} scale={{ x: 1200 / 1920, y: 675 / 1080 }} image={IMG_URLS.COVER} />
      <Container x={0} y={695}>
        {inChallengeMenu
          ? (
            <>
              <MenuButton x={200} y={40} text='標準難度' onClick={enterDadaChallengeMode} />
              <MenuButton x={200} y={160} text='？？？？' disabled onClick={enterRealChallengeMode} />
              <MenuButton x={760} y={40} text='幼妲難度' onClick={enterYodaChallengeMode} />
              <MenuButton x={760} y={160} text='返回前頁' onClick={() => setInChallengeMenu(false)} />
            </>
            )
          : (
            <>
              <MenuButton x={200} y={40} text='故事模式' onClick={enterStoryMode} />
              <MenuButton x={200} y={160} text='遊戲說明' onClick={enterReadme} />
              <MenuButton x={760} y={40} text='挑戰模式' onClick={() => setInChallengeMenu(true)} />
              <MenuButton x={760} y={160} text='得分紀錄' onClick={enterScoreboard} />
            </>
            )}
      </Container>
    </>
  )
}

export default GameMenu
