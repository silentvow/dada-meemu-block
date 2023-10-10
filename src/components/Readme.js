import { BUFF_ITEMS, DEBUFF_ITEMS, ITEM, ITEM_HEIGHT, MONEY_VALUES } from '@/constants/game'
import { IMG_URLS } from '@/constants/image'
import { useGame } from '@/game'
import { Container, Graphics, Sprite, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import MenuButton from './MenuButton'

const INTRODUCE_TEXT = `遊戲規則：
用滑鼠移動灰妲反彈咪姆或者點擊左鍵發射火球以消除
所有方塊，獲取掉落的金錢，避免咪姆掉落至灰妲下方。
                                點擊Ｐ鍵暫停遊戲。
方塊掉落物：
  增加咪姆的攻擊力        減少咪姆的攻擊力
  使咪姆數量變成兩倍      復原咪姆的攻擊力
  放大咪姆的尺寸          縮小咪姆的尺寸
  降低咪姆的移動速度      提高咪姆的移動速度
  使灰妲變大              使灰妲變小
  增加火球的發射次數      隨機一種其他物品效果
  獲得 $${MONEY_VALUES[ITEM.MONEY_XL]}            獲得 $${MONEY_VALUES[ITEM.MONEY_LG]}
  獲得 $${MONEY_VALUES[ITEM.MONEY_MD]}             獲得 $${MONEY_VALUES[ITEM.MONEY_SM]}
  獲得 $${MONEY_VALUES[ITEM.MONEY_XS]}
`

const STAFF_TEXT = `設計製作：彼得與狼
彩圖繪製：黑櫻焦阿巴
素材來源：ReLive_灰妲 DaDa、ReLive_咪姆 MeeMu、
          いらすとや、Rotting Pixels`

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
  const { enterMainMenu } = useGame(state => ({ enterMainMenu: state.enterMainMenu }))

  return (
    <Container width={1280} height={960} eventMode='static'>
      <Graphics draw={drawBoard} />
      <Text x={40 + 16} y={20 + 16} text={INTRODUCE_TEXT} style={textStyle} />
      {BUFF_ITEMS.map((item, index) => (
        <Sprite key={index} x={40 + 16} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * (5 + index)} image={IMG_URLS[item]} />
      ))}
      {DEBUFF_ITEMS.map((item, index) => (
        <Sprite key={index} x={40 + 16 + 540} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * (5 + index)} image={IMG_URLS[item]} />
      ))}
      <Sprite x={40 + 16 + 540} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * 10} image={IMG_URLS[ITEM.UNKNOWN]} />
      <Sprite x={40 + 16} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * 11} image={IMG_URLS[ITEM.MONEY_XL]} />
      <Sprite x={40 + 16 + 540} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * 11} image={IMG_URLS[ITEM.MONEY_LG]} />
      <Sprite x={40 + 16} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * 12} image={IMG_URLS[ITEM.MONEY_MD]} />
      <Sprite x={40 + 16 + 540} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * 12} image={IMG_URLS[ITEM.MONEY_SM]} />
      <Sprite x={40 + 16} y={20 + 16 + (LINE_HEIGHT - ITEM_HEIGHT) * 0.5 + LINE_HEIGHT * 13} image={IMG_URLS[ITEM.MONEY_XS]} />
      <Text x={40 + 16} y={960 - 20 - 16} anchor={[0, 1]} text={STAFF_TEXT} style={captionStyle} />
      <MenuButton x={760} y={140 + 695} text='返回前頁' onClick={enterMainMenu} />
    </Container>
  )
}

export default Readme
