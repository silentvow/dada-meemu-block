import { TextStyle } from 'pixi.js'

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
      {
        x: 0,
        y: 0,
        width: STORY_SCREEN_WIDTH,
        height: STORY_SCREEN_HEIGHT,
        scale: { x: STORY_SCREEN_WIDTH / 1920, y: STORY_SCREEN_HEIGHT / 1080 },
        image: '/img/bg-doujou.jpg',
      },
    ],
    content: '某日，ReLive工作室。',
  },
  {
    sprites: [
      {
        x: 0,
        y: 0,
        width: STORY_SCREEN_WIDTH,
        height: STORY_SCREEN_HEIGHT,
        scale: { x: STORY_SCREEN_WIDTH / 1920, y: STORY_SCREEN_HEIGHT / 1080 },
        image: '/img/bg-doujou.jpg',
      },
    ],
    content: '【灰妲】\n今天，就是我灰妲發大財的日子！',
  },
  {
    sprites: [
      {
        x: 0,
        y: 0,
        width: STORY_SCREEN_WIDTH,
        height: STORY_SCREEN_HEIGHT,
        scale: { x: STORY_SCREEN_WIDTH / 1920, y: STORY_SCREEN_HEIGHT / 1080 },
        image: '/img/bg-doujou.jpg',
      },
    ],
    content: '【咪姆】\n你還沒放棄威力彩阿？就算是普獎你也都還沒中過吧？',
  },
  {
    sprites: [
      {
        x: 0,
        y: 0,
        width: STORY_SCREEN_WIDTH,
        height: STORY_SCREEN_HEIGHT,
        scale: { x: STORY_SCREEN_WIDTH / 1920, y: STORY_SCREEN_HEIGHT / 1080 },
        image: '/img/bg-doujou.jpg',
      },
    ],
    content: '【灰妲】\n那都是過去的事了，我們要放眼未來！',
  },
  {
    sprites: [
      {
        x: 0,
        y: 0,
        width: 1200,
        height: 675,
        scale: { x: 1200 / 1920, y: 675 / 1080 },
        image: '/img/bg-doujou.jpg',
      },
    ],
    content: '灰妲拿出了一張地圖，上頭有各種奇怪的標記。',
  },
  {
    sprites: [
      {
        x: 0,
        y: 0,
        width: 1200,
        height: 675,
        scale: { x: 1200 / 1920, y: 675 / 1080 },
        image: '/img/bg-doujou.jpg',
      },
    ],
    content: '【灰妲】\n這是我好不容易從某個幫派偷－',
  },
  {
    sprites: [
      {
        x: 0,
        y: 0,
        width: 1200,
        height: 675,
        scale: { x: 1200 / 1920, y: 675 / 1080 },
        image: '/img/bg-doujou.jpg',
      },
    ],
    content: '【灰妲】\n呃，借來的，對，聽說是一個大祕寶。',
  },
]

export const ALL_CHAPTERS = [
  STORY_CHAPTER_1,
]
