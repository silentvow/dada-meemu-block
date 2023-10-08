import { TextStyle } from 'pixi.js'
import { IMG_KEY, SPRITE } from './image'

export const STORY_SCREEN_WIDTH = 1200
export const STORY_SCREEN_HEIGHT = 675

export const STORY_CHAPTER_1 = [
  {
    sprites: [],
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x000000)
          g.drawRoundedRect(40 + 2, 10 + 2, 1200 - 4, 675 - 4, 18)
          g.endFill()
        },
      },
    ],
    texts: [
      {
        x: 1280 / 2,
        y: 695 / 2,
        text: 'This is a work of fiction. Names, characters, businesses, places, events, locales, and incidents are either the products of the author\'s imagination or used in a fictitious manner.\n\nAny resemblance to actual persons, living or dead, or actual events is purely coincidental.',
        anchor: [0.5, 0.5],
        style: new TextStyle({
          align: 'center',
          fontSize: 48,
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          lineHeight: 48 * 1.2,
          fill: '#ffffff',
          wordWrap: true,
          wordWrapWidth: 840,
        }),
      },
    ],
    content: '本故事純屬虛構，如有雷同，純屬巧合。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '某日，ReLive工作室。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '【灰妲】\n今天，就是我灰妲發大財的日子！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '【咪姆】\n你還沒放棄威力彩阿？印象從認識你以來一次都沒中過。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '【灰妲】\n閉嘴啦那都是過去的事了，我們要放眼未來！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '灰妲拿出了一張地圖，上頭有各種奇怪的標記。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '【灰妲】\n這是我好不容易從某個幫派偷－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '【灰妲】\n呃，借來的，對，聽說是一個大祕寶。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '【咪姆】\n喔是噢。(毫無興趣的樣子)',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '【灰妲】\n今天其他人都在鐵籠戰，所以就我們一起出發吧，GOGO！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '【咪姆】\n阿你怎麼沒去打？',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '【灰妲】\n上屆亞軍不用比預賽啦。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '兩人離開了工作室。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '一段時間後，兩人到了一座遺跡裏，面前出現了一堵牆。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n我們可以回家了嗎。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n你在說什麼，這才剛開始而已阿。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n前面就沒路了，你那圖顯然是錯的。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n路是人走出來的，看我的－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '灰妲把咪姆抓起來，同時擺出棒球投手的姿勢，\n把咪姆扔了出去－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n幹～～～～～～～',
  },
]

export const STORY_CHAPTER_2 = [
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '兩人眼前的牆被撞出了一個大洞。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n你看，路這不就出現了嗎。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【咪姆】\n我就不該相信你這雞腿！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n你說誰是雞腿！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【咪姆】\n雞腿雞腿雞腿！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n桌球桌球桌球！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【咪姆】\n你才是桌子！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n屁啦，我是氣質優雅的灰鸚鵡！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '轟隆隆隆隆隆隆隆隆－－－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '突然，遺跡內發出奇怪的聲響。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n什麼聲音？',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【咪姆】\n我有種不好的預感。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '轟隆隆隆隆隆隆隆隆－－－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '遺跡開始劇烈震動，一塊巨大的石塊從天而降，重重地砸在入口前，將其完全堵住。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲&咪姆】\n靠盃！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n只能繼續往前了！動作快！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '兩人快速的衝進洞裡，面前出現了岔路。',
  },
]

export const STORY_CHAPTER_3 = [
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n灰妲！走哪邊！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n我不知道！隨便啦！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n你這也太不負責任了吧！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n我也沒辦法阿，這地圖上又沒寫！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n那我們怎麼辦？',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n我看就隨便選一邊走吧，能有多糟？',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n那就選左邊吧，路看起來比較粗又直。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n你喜歡粗的噢。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '兩人走進了左邊的岔路。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '往前一段路後，兩人來到一座大廳。大廳裡空蕩蕩的，只有一座巨大的石門。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n哈，看來我們選對了。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n所以你有鑰匙嗎？',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n用膝蓋想也知道怎麼可能有，阿我忘了你沒有膝蓋。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n你又想吵架了是嗎？',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n你很沒幽默感欸，咱們先找找有沒有甚麼方法開門吧。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '兩人在大廳裏搜索，發現地板上有似乎有圖案被砂石遮掩著。',
  },
]

export const STORY_CHAPTER_4 = [
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n我說，這不就是骰子嘛！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n地圖上恰好有一串數字，照著踩踩看吧。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n有這麼簡單嗎？',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n試試看也不虧嘛，還能有多糟？',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n我看看，首先是4，然後是1．．．',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '兩人依據地圖上的數字陸續踩下。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n最後是6，好！完成了！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n小心！有破空聲！',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '兩人話音剛落，從大廳的四周射出了一道道飛箭，直奔兩人而來。',
  },
]

export const STORY_CHAPTER_5 = [
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: 'chapter 5',
  },
]

export const STORY_FINAL = [
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: 'final',
  },
]

export const ALL_CHAPTERS = [
  STORY_CHAPTER_1,
  STORY_CHAPTER_2,
  STORY_CHAPTER_3,
  STORY_CHAPTER_4,
  STORY_CHAPTER_5,
  STORY_FINAL,
]
