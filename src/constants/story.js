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
      SPRITE[IMG_KEY.WALL],
    ],
    content: 'chapter 2',
  },
]

export const STORY_CHAPTER_3 = [
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: 'chapter 3',
  },
]

export const STORY_CHAPTER_4 = [
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: 'chapter 4',
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
