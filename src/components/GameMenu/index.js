import { IMG_URLS } from '@/constants/image'
import { useGame } from '@/game'
import { Container, Graphics, Sprite } from '@pixi/react'
import { useEffect, useRef, useState } from 'react'
import MenuButton from '../MenuButton'
import DisplayControl from './DisplayControl'
import VolumeControl from './VolumeControl'

const MENU = {
  MAIN: 'MAIN',
  STORY: 'STORY',
  CHALLENGE: 'CHALLENGE',
  OPTIONS: 'OPTIONS',
}

const SUB_MENU = {
  NONE: 'NONE',
  VOLUME: 'VOLUME',
  DISPLAY: 'DISPLAY',
}

function drawMask (g) {
  g.beginFill(0x000000)
  g.drawRoundedRect(40 + 2, 10 + 2, 1200 - 4, 675 - 4, 18)
  g.endFill()
}

function drawMainArea (g) {
  g.clear()
  g.lineStyle({ width: 4, color: 0xF4D29C })
  g.beginFill(0x5B3138, 1)
  g.drawRoundedRect(40, 10, 1200, 675, 20)
  g.endFill()
}

function GameMenu () {
  const [unlockRealMode] = useState(true)
  const {
    enterStoryMode,
    enterExtraStoryMode,
    enterDadaChallengeMode,
    enterYodaChallengeMode,
    enterRealChallengeMode,
    enterReadme,
    enterScoreboard,
  } = useGame(
    state => ({
      enterStoryMode: state.enterStoryMode,
      enterExtraStoryMode: state.enterExtraStoryMode,
      enterDadaChallengeMode: state.enterDadaChallengeMode,
      enterYodaChallengeMode: state.enterYodaChallengeMode,
      enterRealChallengeMode: state.enterRealChallengeMode,
      enterReadme: state.enterReadme,
      enterScoreboard: state.enterScoreboard,
    }),
  )
  const [mask, setMask] = useState(null)
  const refMask = useRef(null)

  useEffect(() => {
    setMask(refMask.current)
  }, [])

  const [menu, setMenu] = useState(MENU.MAIN)
  const [subMenu, setSubMenu] = useState(SUB_MENU.NONE)

  return (
    <>
      <Graphics draw={drawMainArea} />
      <Sprite x={40} y={10} width={1200} height={675} scale={{ x: 1200 / 1920, y: 675 / 1080 }} image={IMG_URLS.COVER} mask={mask} />
      <Sprite x={620} y={450} width={755 * 0.8} height={275 * 0.8} scale={{ x: 0.8, y: 0.8 }} image={IMG_URLS.TITLE} mask={mask} />
      {subMenu === SUB_MENU.VOLUME && <VolumeControl onCancel={() => setSubMenu(SUB_MENU.NONE)} />}
      {subMenu === SUB_MENU.DISPLAY && <DisplayControl onCancel={() => setSubMenu(SUB_MENU.NONE)} />}
      <Graphics ref={refMask} preventRedraw draw={drawMask} />
      <Container x={0} y={695}>
        {menu === MENU.STORY && (
          <>
            <MenuButton x={200} y={30} text='正篇故事' onClick={enterStoryMode} />
            <MenuButton x={760} y={30} text={unlockRealMode ? '附錄故事' : '？？？？'} disabled={!unlockRealMode} onClick={enterExtraStoryMode} />
            <MenuButton x={760} y={140} text='返回前頁' onClick={() => setMenu(MENU.MAIN)} />
          </>
        )}
        {menu === MENU.CHALLENGE && (
          <>
            <MenuButton x={200} y={30} text='標準難度' onClick={enterDadaChallengeMode} />
            <MenuButton x={760} y={30} text='幼妲難度' onClick={enterYodaChallengeMode} />
            <MenuButton x={200} y={140} text={unlockRealMode ? '真妲難度' : '？？？？'} disabled={!unlockRealMode} onClick={enterRealChallengeMode} />
            <MenuButton x={760} y={140} text='返回前頁' onClick={() => setMenu(MENU.MAIN)} />
          </>
        )}
        {menu === MENU.OPTIONS && (
          <>
            <MenuButton x={200} y={30} text='顯示設定' onClick={() => setSubMenu(SUB_MENU.DISPLAY)} />
            <MenuButton x={200} y={140} text='音量設定' onClick={() => setSubMenu(SUB_MENU.VOLUME)} />
            <MenuButton x={760} y={30} text='遊戲說明' onClick={enterReadme} />
            <MenuButton x={760} y={140} text='返回前頁' onClick={() => { setSubMenu(SUB_MENU.NONE); setMenu(MENU.MAIN) }} />
          </>
        )}
        {menu === MENU.MAIN && (
          <>
            <MenuButton x={200} y={30} text='故事模式' onClick={() => setMenu(MENU.STORY)} />
            <MenuButton x={760} y={30} text='挑戰模式' onClick={() => setMenu(MENU.CHALLENGE)} />
            <MenuButton x={200} y={140} text='遊戲設定' onClick={() => setMenu(MENU.OPTIONS)} />
            <MenuButton x={760} y={140} text='得分紀錄' onClick={enterScoreboard} />
          </>
        )}
      </Container>
    </>
  )
}

export default GameMenu
