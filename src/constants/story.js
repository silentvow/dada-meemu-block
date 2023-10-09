import { TextStyle } from 'pixi.js'
import { IMG_KEY, SPRITE } from './image'

export const STORY_SCREEN_WIDTH = 1200
export const STORY_SCREEN_HEIGHT = 675

export const TEMP_STORY = {
  sprites: [
    SPRITE[IMG_KEY.WALL],
    { ...SPRITE[IMG_KEY.DADA_02], x: -200 },
    SPRITE[IMG_KEY.MEEMU],
  ],
  content: '【灰妲】\n「路是人走出來的，看我的－－」',
}

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
    content: '※本故事純屬虛構，如有雷同，純屬巧合。',
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
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「今天，就是我灰妲發大財的日子！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「你還沒放棄威力彩阿？印象從認識你以來一次都沒中過耶。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【灰妲】\n「閉嘴啦那都是過去的事了，我們要放眼未來！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.LINE_CENTERING],
      SPRITE[IMG_KEY.TREASURE_MAP],
    ],
    content: '灰妲拿出了一張地圖，上頭有各種奇怪的標記。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【灰妲】\n「這是我好不容易從某個幫派偷－－」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【灰妲】\n「呃，借來的，對，應該有不少錢，那幫派挺富的。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「喔是噢。」(毫無興趣的樣子)',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【灰妲】\n「今天其他人都在鐵籠戰，所以就我們一起去找吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「阿你怎麼沒去打？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【灰妲】\n「上屆亞軍不用比預賽啦，出發GOGO！。」',
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
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「我們可以回家了嗎。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      { ...SPRITE[IMG_KEY.DADA_02], x: -200 },
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【灰妲】\n「你在說什麼，這才剛開始而已阿。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      { ...SPRITE[IMG_KEY.DADA_02], x: -200 },
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「前面就沒路了，你那圖顯然是錯的。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      SPRITE[IMG_KEY.DADA_02],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【灰妲】\n「路是人走出來的，看我的－－」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      SPRITE[IMG_KEY.DADA_02],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '灰妲把咪姆抓起來，同時擺出棒球投手的姿勢。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      SPRITE[IMG_KEY.DADA_02],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '咪姆還沒反應過來，就這樣被扔了出去－－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      SPRITE[IMG_KEY.LINE_SPEED_UP],
      SPRITE[IMG_KEY.RED_MEEMU],
    ],
    content: '【咪姆】\n「幹－－－－－－－－」',
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
    content: '【灰妲】\n「你看，路這不就出現了嗎。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【咪姆】\n「我就不該相信你這雞腿！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n「你說誰是雞腿！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【咪姆】\n「雞腿雞腿雞腿！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n「桌球桌球桌球！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【咪姆】\n「你才是桌子！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n「屁啦，我是氣質優雅的灰鸚鵡！」',
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
    content: '【灰妲】\n「什麼聲音？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【咪姆】\n「我有種不好的預感。」',
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
    content: '【灰妲&咪姆】\n「靠盃！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '【灰妲】\n「只能繼續往前了！動作快！」',
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
    content: '【咪姆】\n「灰妲！走哪邊！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「我不知道！隨便啦！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「你這也太不負責任了吧！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「我也沒辦法阿，這地圖上又沒寫！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「那我們怎麼辦？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「我看就隨便選一邊走吧，能有多糟？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「那就選左邊吧，路看起來比較粗。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「你喜歡粗的噢。」',
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
    content: '【灰妲】\n「哈，看來我們選對了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「所以你有鑰匙嗎？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「用膝蓋想也知道怎麼可能有，阿我忘了你沒有膝蓋。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「你又想吵架了是嗎？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「你很沒幽默感欸，咱們先找找有沒有甚麼方法開門吧。」',
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
    content: '【咪姆】\n「我說，這不就是骰子嘛！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「地圖上恰好有一串數字，照著踩踩看吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「有這麼簡單嗎？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「試試看也不虧嘛，還能有多糟？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「我看看，首先是4，然後是1．．．」',
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
    content: '【灰妲】\n「最後是6，好！完成了！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「小心！有破空聲！」',
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
    content: '兩人迅速做出閃躲動作，飛箭擦身而過，射向了牆面。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '但飛箭仍未停止，如雨點般射來，灰妲當即縱身高躍，揮動雙臂，捲起一陣風將飛箭吹散得七零八落。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '咪姆則蓄力一衝，在牆壁之間快速回彈，一個接一個地將機關摧毀。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「呼，差點就抽筋了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「你有得抽嗎？何況這只是小意思吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「也是，ReLive的員工訓練比這精實多了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「倒是你剛才怎麼不順便把門撞開。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「我是史萊姆！不是拆房子的鐵球！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '兩人邊打屁邊走到石門前。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '轟隆隆隆隆隆隆隆隆－－－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '石門緩緩地打開，兩人大步向前。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「照地圖來看，接下來要先往左再往右。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「這地圖真的可信嗎．．．」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「畢竟門都開了，沒問題的吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '一段時間後－－－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「到啦！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「你確定？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「至少圖上是這樣畫的。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「那這個你怎麼解釋？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '在兩人面前的，是一顆巨大的金屬球。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「也許這是－某種創新造型的－保險箱？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「顯然設計的人腦子進水了吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「阿這上面似乎有保齡球的球孔。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '灰妲將手插入金屬球。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【機器音】\n「嗶嗶，指紋無法辨識，請確認手指清潔後再試，系統將於連續失敗時發送警報。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「好像被你矇對了，但這大小我們也搬不出去。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「看來還是只能用老方法了，你也認真一點阿。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「唉，結果還是這樣嗎。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '兩人深吸了一口氣。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲&咪姆】\n「喝阿阿阿阿阿阿阿阿阿阿阿阿阿！！！！！」',
  },
]

export const STORY_FINAL = [
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲&咪姆】\n「歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉！！！！！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '金屬球在兩人狂風暴雨般的攻勢之下，開始出現裂痕。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲&咪姆】\n「無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄！！！！！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '終於，金屬球碎裂開來，裏頭的東西散落一地。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「哦哦哦哦哦！發財了發財了！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【咪姆】\n「居然－有這麼多錢－－」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲】\n「可以告別那些吃泡麵的日子了！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '見到寶藏的兩人，臉上洋溢著極度的喜悅。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '與此同時，他們眼中閃爍著貪婪的光芒，心中的慾望如野火般燃燒起來。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲&咪姆】\n「嘿嘿嘿嘿嘿嘿嘿嘿嘿－－」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '【灰妲&咪姆】\n「哈哈哈哈哈哈哈哈哈哈哈哈！！！！！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL], // NOTE: 轉黑畫面
    ],
    content: '【灰妲&咪姆】\n「哈哈哈哈哈哈哈哈哈哈哈哈！！！！！」',
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
