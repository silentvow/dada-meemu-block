import { ITEM, ITEM_HEIGHT, MONEY_VALUES, README_ITEMS } from '@/constants/game'
import { IMG_URLS } from '@/constants/image'
import { useGame } from '@/game'
import { Container, Graphics, Sprite, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import MenuButton from './MenuButton'

export const INTRODUCE_TEXT = `遊戲規則：
用滑鼠移動灰妲反彈咪姆或者點擊左鍵發射火球以消除
所有方塊，獲取掉落的金錢，避免咪姆掉落至灰妲下方。
        點擊Ｐ鍵暫停或恢復遊戲，點擊Ｄ鍵立刻失敗。
方塊掉落物：
  增加咪姆的攻擊力        減少咪姆的攻擊力
  使咪姆數量變成兩倍      復原咪姆的攻擊力
  使咪姆變大              使咪姆變小
  降低咪姆的移動速度      提高咪姆的移動速度
  使灰妲變大              使灰妲變小
  增加                    增加
  獲得 $${MONEY_VALUES[ITEM.MONEY_XL]}            獲得 $${MONEY_VALUES[ITEM.MONEY_LG]}
  獲得 $${MONEY_VALUES[ITEM.MONEY_MD]}             獲得 $${MONEY_VALUES[ITEM.MONEY_SM]}
  獲得 $${MONEY_VALUES[ITEM.MONEY_XS]}              隨機一種非錢物品效果
`

export const STAFF_TEXT = `設計製作：彼得與狼
彩圖繪製：黑櫻焦阿巴
素材來源：ReLive_灰妲 DaDa、ReLive_咪姆 MeeMu、
          いらすとや、Rotting Pixels、ZapSplat`

const FONT_SIZE = 45
const LINE_HEIGHT = FONT_SIZE * 1.2

const textStyle = new TextStyle({
  align: 'left',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: FONT_SIZE,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: LINE_HEIGHT,
  breakWords: true,
  wordWrap: true,
  wordWrapWidth: 1280 - 80 - 32,
})

const captionStyle = new TextStyle({
  align: 'left',
  fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
  fontSize: 24,
  fill: '#ffffff',
  strokeThickness: 5,
  lineHeight: 24 * 1.2,
  breakWords: true,
  wordWrap: true,
  wordWrapWidth: 1280 - 80 - 32,
})

function drawBoard (g) {
  g.clear()
  g.lineStyle({ width: 4, color: 0xF4D29C })
  g.beginFill(0x5B3138, 1)
  g.drawRoundedRect(40, 20, 1280 - 80, 960 - 40, 20)
  g.endFill()
}

function Readme () {
  const enterMainMenu = useGame(state => state.enterMainMenu)

  return (
    <Container width={1280} height={960} eventMode='static'>
      <Graphics draw={drawBoard} />
      <Text x={40 + 16} y={20 + 16} text={INTRODUCE_TEXT} style={textStyle} />
      {README_ITEMS.flatMap((items, idx) => items.map(
        (item, idy) => (
          <Sprite
            key={`${idx}-${idy}`}
            x={40 + 16 + 540 * idx}
            y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * (5 + idy)}
            image={IMG_URLS[item]}
          />
        ),
      ))}
      <Sprite x={40 + 16 + 144} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * 10 - 1.4} image={IMG_URLS.BULLET} scale={{ x: 0.8, y: 0.8 }} />
      <Sprite x={40 + 16 + 540 + 144} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * 10 + 4.5} image={IMG_URLS.HEART} />
      <Text x={40 + 16} y={960 - 20 - 16} anchor={[0, 1]} text={STAFF_TEXT} style={captionStyle} />
      <MenuButton x={760} y={140 + 695} text='返回前頁' onClick={enterMainMenu} />
    </Container>
  )
}

export default Readme
