import { BlurFilter, TextStyle } from 'pixi.js'
import { IMG_KEY, SPRITE } from './image'
import { SOUND_KEY } from './sound'

export const STORY_SCREEN_WIDTH = 1200
export const STORY_SCREEN_HEIGHT = 675

export const STORY_CHAPTER_1 = [
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x000000)
          g.drawRoundedRect(40 + 2, 10 + 2, 1200 - 4, 675 - 4, 18)
          g.endFill()
        },
      },
    ],
    sprites: [],
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
    content: '※本故事純屬虛構，如有雷同，純屬巧合。\n※如有OOC敬請見諒，請勿上升至本人。',
  },
  {
    bgm: SOUND_KEY.BGM_OFFICE,
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
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「喔喔！你接到了什麼大乾爹的工商嗎？\n該不會是肯Ｏ基吧？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「如果是這樣也不錯啦－－但我不要跟肯Ｏ基！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「不然－－你又去買威力彩了？印象你一次都沒中過耶。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「我刮刮樂有中過一百啊，上期頭彩剛被端走，我要等累積到十億再去買。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「難道你又想作什麼恐怖的企劃？我先聽聽看要搞啥，\n上次箱活那場神前刀工對決差點就讓咱們工作室改名\nReReLive了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「不是啦，而且那都是過去的事了，我們要放眼未來！」',
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
    ],
    content: '【灰妲】\n「這是我好不容易從某個幫派偷－－」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「呃，借來的，對，應該藏了不少錢，那幫派挺富的。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「總覺得好像有哪裡不太對欸。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「今天其他人都在鐵籠戰，所以就我們去撈一票吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「阿你怎麼沒去打？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「上屆亞軍不用比預賽啦，出發GOGO！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.OFFICE],
    ],
    content: '兩人離開了工作室。',
  },
  {
    bgm: SOUND_KEY.BGM_RUINS,
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
    ],
    content: '一段時間後，兩人到了一座遺跡前。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「呼呼，我聞到寶藏的味道了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
    ],
    content: '兩人抱著些許的興奮踏入遺跡。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「話說回來，這年頭居然會有人不把錢存銀行，還藏在荒郊野外，難道是電影看太多啦？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「是有點詭異，但一想到那群人平常的表現又覺得不太意外。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「怎麼說？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「每天都在嚷嚷著雞腿雞腿什麼的，雙手也經常揮舞著雞腿。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「還老是幻想著我家有個關著幼女的地下室，要去解救人家什麼的。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「根本腦袋就不正常，如果真的有地下室的話我還不如在裡面養小精靈。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「養小精靈有比較好嗎。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「小精靈會工作會幫我賺錢啊，CP值超高的啦。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「．．．祝福你家的小精靈平安喜樂」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '走著走著，前方突然出現了一面牆。',
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
    ],
    content: '【灰妲】\n「你在說什麼，這才剛開始而已欸。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「這麼快就沒路了，你那圖顯然是錯的。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      SPRITE[IMG_KEY.DADA_02],
    ],
    content: '【灰妲】\n「路是人走出來的，看我的－－」',
  },
  {
    bgm: SOUND_KEY.BGM_THROW,
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
      SPRITE[IMG_KEY.LINE_SPEED_UP],
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
    bgm: SOUND_KEY.BGM_RUINS,
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
    ],
    content: '兩人眼前的牆被撞出了一個大洞。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「你看，路這不就出現了嗎。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      { ...SPRITE[IMG_KEY.RED_MEEMU], x: 900 },
    ],
    content: '【咪姆】\n「我就不該相信你這雞腿！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      SPRITE[IMG_KEY.DADA_03],
    ],
    content: '【灰妲】\n「你說誰是雞腿！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      { ...SPRITE[IMG_KEY.RED_MEEMU], x: 900 },
    ],
    content: '【咪姆】\n「雞腿雞腿雞腿！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      SPRITE[IMG_KEY.DADA_03],
    ],
    content: '【灰妲】\n「桌球桌球桌球！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      { ...SPRITE[IMG_KEY.RED_MEEMU], x: 900 },
    ],
    content: '【咪姆】\n「你才是桌子啦！誰是桌球啊！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      SPRITE[IMG_KEY.DADA_03],
    ],
    content: '【灰妲】\n「屁啦，我是氣質優雅的灰鸚鵡！」',
  },
  {
    bgm: SOUND_KEY.BGM_EARTHQUAKE,
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      SPRITE[IMG_KEY.DADA_03],
      { ...SPRITE[IMG_KEY.RED_MEEMU], x: 900 },
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
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「什麼聲音？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「我有種不好的預感。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '轟隆隆隆隆隆隆隆隆－－－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      SPRITE[IMG_KEY.STONE],
    ],
    content: '遺跡開始劇烈震動，一塊巨大的石塊從天而降，重重地砸在入口前，將其完全堵住。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【灰妲&咪姆】\n「靠盃！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「只能繼續往前了！動作快！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
    ],
    content: '兩人快速的衝進洞裡，面前出現了岔路。',
  },
]

export const STORY_CHAPTER_3 = [
  {
    bgm: SOUND_KEY.BGM_EARTHQUAKE,
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「灰妲！我們要往哪邊走！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「我不知道！隨便啦！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「你這也太不負責任了吧！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「我也沒辦法阿，這地圖上又沒寫！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「那到底該怎麼辦？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「也只能挑一邊走啦，大不了再拐回來就是了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「那就選左邊吧，至少路看起來比較直比較好走。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「走囉，我可是幸運灰鸚鵡！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.TWO_CAVE],
    ],
    content: '兩人大步走進了岔路的左側。',
  },
  {
    bgm: SOUND_KEY.BGM_HALL,
    sprites: [
      SPRITE[IMG_KEY.GATE_CLOSED],
    ],
    content: '往前一段路後，兩人來到一座大廳。\n大廳裡空蕩蕩的，只有一座巨大的門。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_CLOSED],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「哈，我們似乎選對了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_CLOSED],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「所以你有鑰匙嗎？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_CLOSED],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「用膝蓋想也知道怎麼可能有，阿我忘了你沒有膝蓋。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_CLOSED],
      { ...SPRITE[IMG_KEY.RED_MEEMU], x: 940 },
    ],
    content: '【咪姆】\n「你又想吵架了是嗎？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_CLOSED],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「你很沒幽默感欸，咱們先找找有沒有甚麼方法開門吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
    ],
    content: '兩人在大廳裏仔細搜索，發現地板上有似乎有圖案被砂石遮掩著。',
  },
]

export const STORY_CHAPTER_4 = [
  {
    bgm: SOUND_KEY.BGM_HALL,
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「我說，這不就是骰子嘛！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「地圖上恰好有一串數字，照著踩踩看吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「有這麼簡單嗎？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「試試看也不虧嘛，還能有多糟？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「我看看，首先是4，然後是1．．．」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
    ],
    content: '兩人依據地圖上的數字陸續踩下。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「最後是6，好！完成了！」',
  },
  {
    bgm: SOUND_KEY.BGM_TRAP,
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「小心！有破空聲！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.LINE_SPEED_UP],
      SPRITE[IMG_KEY.BOWS],
    ],
    content: '話音剛落，從大廳的四周射出了一道道飛箭，直奔兩人而來。',
  },
]

export const STORY_CHAPTER_5 = [
  {
    bgm: SOUND_KEY.BGM_TRAP,
    sprites: [
      SPRITE[IMG_KEY.WALL],
      SPRITE[IMG_KEY.BOWS],
    ],
    content: '兩人迅速做出閃躲動作，飛箭擦身而過，射向了牆面。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.LINE_SPEED_UP],
      SPRITE[IMG_KEY.BOWS],
      SPRITE[IMG_KEY.DADA_03],
    ],
    content: '但飛箭仍未停止，如雨點般射來。\n灰妲當即縱身高躍，揮動雙臂，捲起一陣風將飛箭吹散得七零八落。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      SPRITE[IMG_KEY.LINE_SPEED_UP],
      SPRITE[IMG_KEY.RED_MEEMU],
    ],
    content: '咪姆則蓄力一衝，在牆壁之間快速回彈，一個接一個地將機關破壞掉。',
  },
  {
    bgm: SOUND_KEY.BGM_HALL,
    sprites: [
      SPRITE[IMG_KEY.WALL],
    ],
    content: '不一會兒，大廳裏的機關就被兩人摧毀殆盡。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.WALL],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「呼，差點就抽筋了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「你有得抽嗎？何況這只是小意思吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「也是，ReLive的員工訓練比這精實多了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.DADA_02],
    ],
    content: '【灰妲】\n「倒是你剛才怎麼不順便把門撞開。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.RED_MEEMU],
    ],
    content: '【咪姆】\n「我是史萊姆！不是拆房子的鐵球！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_CLOSED],
    ],
    content: '兩人邊打屁邊走到門前。',
  },
  {
    bgm: SOUND_KEY.BGM_EARTHQUAKE,
    sprites: [
      SPRITE[IMG_KEY.GATE_CLOSED],
    ],
    content: '轟隆隆隆隆隆隆隆隆－－－',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_OPENED],
    ],
    content: '門緩緩地打開，兩人大步向前。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_OPENED],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「照地圖來看，接下來要先往左走到底再向右轉，看到階梯都往下爬就對了。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_OPENED],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「這地圖真的可信嗎．．．」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_OPENED],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「畢竟門都開了，沒問題的吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.GATE_OPENED],
    ],
    content: '一段時間後－－－',
  },
  {
    bgm: SOUND_KEY.BGM_BALLROOM,
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「到啦！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「你確定？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「至少圖上是這樣畫的。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「那這個你怎麼解釋？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
    ],
    content: '在兩人面前的，是一顆巨大的金屬球。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「也許這是，呃，某種創新造型的，保險箱？」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「顯然設計的人腦子進水了吧。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「總之先看看這玩意上有沒有什麼機關。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL_2],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「阿這上面有幾個洞，我戳！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「喂喂，我可不想再被奇怪的東西攻擊阿。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL_2],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '咪姆還沒講完，灰妲便將手插入金屬球。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL_2],
    ],
    content: '【機器音】\n「嗶嗶，偵測到物體接觸，開始辨識指紋。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL_2],
    ],
    content: '【機器音】\n「嗶嗶，指紋已辨識，啟動權限驗證，驗證中請稍候。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL_2],
    ],
    content: '三分鐘後．．．',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL_2],
    ],
    content: '【機器音】\n「嗶嗶，驗證結束，確認無對應權限，若有疑問請與系統管理員聯繫。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「好像被你猜對了，這玩意裡頭顯然不單純。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      { ...SPRITE[IMG_KEY.DADA_02], x: -140 },
    ],
    content: '【灰妲】\n「在這個環節唐突出現現代科技是哪招阿。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「我試了下這玩意還挺結實的，而且這大小光靠我們搬出去也不實際。」',
  },
  {
    bgm: SOUND_KEY.BGM_FIGHT,
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.DADA_04],
    ],
    content: '【灰妲】\n「看來還是只能用老方法了，咱們應該不用花太多時間。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.MEEMU_2],
    ],
    content: '【咪姆】\n「哼，結果還是這樣嗎。」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
    ],
    content: '兩人深吸了一口氣。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.DADA_03],
      { ...SPRITE[IMG_KEY.RED_MEEMU], x: 900 },
    ],
    content: '【灰妲&咪姆】\n「喝阿阿阿阿阿阿阿阿阿阿阿阿阿！！！！！」',
  },
]

export const STORY_FINAL = [
  {
    bgm: SOUND_KEY.BGM_FIGHT,
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.BG_BREAK],
    ],
    content: '金屬球在兩人狂風暴雨般的攻勢之下，開始出現裂痕。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.DADA_03],
      { ...SPRITE[IMG_KEY.RED_MEEMU], x: 900 },
    ],
    content: '【灰妲&咪姆】\n「歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉！！！！！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.BG_BREAK],
      { ...SPRITE[IMG_KEY.BG_BREAK], x: 500, y: 450, width: 1200 * 0.25, height: 1200 * 0.25, scale: { x: 0.25, y: 0.25 } },
      { ...SPRITE[IMG_KEY.BG_BREAK], x: 750, y: 500, width: 1200 * 0.2, height: 1200 * 0.2, scale: { x: 0.2, y: 0.2 } },
    ],
    content: '金屬球上的裂痕越來越多。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.METAL_BALL],
      SPRITE[IMG_KEY.BG_BREAK],
      SPRITE[IMG_KEY.DADA_03],
      { ...SPRITE[IMG_KEY.RED_MEEMU], x: 900 },
    ],
    content: '【灰妲&咪姆】\n「無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄無駄！！！！！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.COIN_HEAP],
    ],
    content: '最終，金屬球碎裂開來，裏頭的東西散落一地。',
  },
  {
    bgm: SOUND_KEY.BGM_END,
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.COIN_HEAP],
      SPRITE[IMG_KEY.DADA_05],
    ],
    content: '【灰妲】\n「哦哦哦哦哦！發財了發財了！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.COIN_HEAP],
      SPRITE[IMG_KEY.MEEMU],
    ],
    content: '【咪姆】\n「居然－有這麼多錢－－」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.COIN_HEAP],
      SPRITE[IMG_KEY.DADA_05],
    ],
    content: '【灰妲】\n「可以告別那些吃泡麵的日子了！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.COIN_HEAP],
    ],
    content: '見到寶藏的兩人，臉上洋溢著極度的喜悅。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.ENDING],
    ],
    content: '與此同時，他們眼中閃爍著貪婪的光芒，\n心中的慾望如野火般燃燒起來。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.ENDING],
    ],
    content: '【灰妲&咪姆】\n「嘿嘿嘿嘿嘿嘿嘿嘿嘿－－」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.ENDING],
    ],
    content: '【灰妲&咪姆】\n「哈哈哈哈哈哈哈哈哈哈哈哈！！！！！」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.ENDING],
    ],
    texts: [
      {
        x: 1240 - 16,
        y: 695 - 16,
        text: 'To be continued...?',
        anchor: [1, 1],
        style: new TextStyle({
          align: 'right',
          fontSize: 48,
          fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
          lineHeight: 48 * 1.2,
          fill: '#ffffff',
          strokeThickness: 5,
        }),
      },
    ],
    content: '',
    desaturate: true,
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

const createBlurFilter = (blur) => {
  const filter = new BlurFilter()
  filter.blur = blur
  return filter
}

export const EXTRA_CHAPTER = [
  {
    bgm: SOUND_KEY.BGM_END,
    sprites: [
      SPRITE[IMG_KEY.ENDING],
    ],
    content: '【灰妲】\n「哈哈哈哈哈哈哈哈哈哈哈哈！！！！！」',
  },
  {
    sprites: [
      { ...SPRITE[IMG_KEY.ENDING], filters: () => { return [createBlurFilter(10)] } },
      SPRITE[IMG_KEY.REAL_DA],
    ],
    content: '【真妲】\n「起床了～」',
  },
  {
    sprites: [
      { ...SPRITE[IMG_KEY.ENDING], filters: () => { return [createBlurFilter(10)] } },
    ],
    content: '【灰妲】\n「哈哈哈哈哈哈哈－」',
  },
  {
    sprites: [
      { ...SPRITE[IMG_KEY.ENDING], filters: () => { return [createBlurFilter(20)] } },
      { ...SPRITE[IMG_KEY.REAL_DA], scale: { x: 0.85, y: 0.85 } },
    ],
    content: '【真妲】\n「起～床～了～」',
  },
  {
    sprites: [
      { ...SPRITE[IMG_KEY.ENDING], filters: () => { return [createBlurFilter(20)] } },
    ],
    content: '【灰妲】\n「哈哈哈－」',
  },
  {
    sprites: [
      { ...SPRITE[IMG_KEY.ENDING], filters: () => { return [createBlurFilter(20)] } },
      { ...SPRITE[IMG_KEY.REAL_DA], scale: { x: 1, y: 1 } },
    ],
    content: '【真妲】\n「快！點！起！床！」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.BEDROOM],
      { ...SPRITE[IMG_KEY.DADA_06], x: -180 },
    ],
    content: '【灰妲】\n「呵－－阿－－醒了醒了～」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.BEDROOM],
      SPRITE[IMG_KEY.REAL_DA],
    ],
    content: '【真妲】\n「趕快去洗臉整理頭髮，然後過來吃早餐了。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.BEDROOM],
      { ...SPRITE[IMG_KEY.DADA_06], x: -180 },
    ],
    content: '【灰妲】\n「好－－」',
  },
  {
    bgm: SOUND_KEY.BGM_EXTRA,
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.BATHROOM],
      { ...SPRITE[IMG_KEY.DADA_06], x: -180 },
    ],
    content: '鸚鵡梳洗中．．．',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.BATHROOM],
      { ...SPRITE[IMG_KEY.DADA_06], x: 100 },
    ],
    content: '鸚鵡梳洗中．．．．．．',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.BATHROOM],
      { ...SPRITE[IMG_KEY.DADA_02], x: 0 },
    ],
    content: '鸚鵡梳洗中．．．．．．．．．',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.BATHROOM],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「來了～」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
    ],
    content: '桌子上擺放著美味的食物，包括麵包、炒蛋、咖啡等。',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「哇噢，簡直像是外面早午餐店賣的一樣。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【真妲】\n「你喜歡就好，嘻嘻，快吃吧，都要涼掉了。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      SPRITE[IMG_KEY.DADA_01],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【灰妲&真妲】\n「我要開動了－－」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '兩人一邊吃著早餐，一邊聊著天。',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【真妲】\n「對了，你剛剛夢到了什麼？聽你笑得那麼開心。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「我差點就發大財了，啊姆啊姆。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【真妲】\n「欸－－－」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
    ],
    content: '灰妲邊吃邊說著夢中的探險經歷。',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.RUIN_ENTRY],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「我跟咪姆一起去遺跡尋寶，最初我們碰上了一堵牆，」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BREAK_WALL],
      SPRITE[IMG_KEY.DADA_01],
      { ...SPRITE[IMG_KEY.RED_MEEMU], x: 900, scale: { x: 0.7, y: 0.7 } },
    ],
    content: '【灰妲】\n「靠我的智慧突破之後走到一個岔路，」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「接著我們破解地板的機關，」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.BG_ROCK],
      SPRITE[IMG_KEY.LINE_SPEED_UP],
      SPRITE[IMG_KEY.BOWS],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「雖然陷阱也被觸發了，但輕輕鬆鬆解決，」',
  },
  {
    sprites: [
      SPRITE[IMG_KEY.ENDING],
    ],
    content: '【灰妲】\n「最後找到了財寶，正盤算怎麼分錢的時候。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「我就醒了。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【真妲】\n「嘿－－聽起來是個好夢呢，不如今天去買張彩券吧。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「嗯嗯，剛好工作室附近有投注站，這次我一定會中頭彩！」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【真妲】\n「嘻嘻，那我就等著你請客囉。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「那有什麼問題。嘿我覺得這麵包好好吃，口感鬆鬆軟軟的，又有一點淡淡的奶香。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.BREAKFAST],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【真妲】\n「真的？這我最近才從網路上學來的，還是第一次在家烤呢。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「我蠻喜歡的耶，感覺很適合帶去工作室當下午茶。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【真妲】\n「可以呀～這種電鍋料理很簡單的，等你有空我們一起做吧～」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「好哇，順便也做一些給小精靈們。我差不多該出門了，再給我一杯咖啡。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【真妲】\n「給，不要太晚回來喔～」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      { ...SPRITE[IMG_KEY.DADA_02], x: -180 },
    ],
    content: '【灰妲】\n「我盡量，最近案子有點多，可能會稍微加個班。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      { ...SPRITE[IMG_KEY.REAL_DA], x: 940 },
    ],
    content: '【真妲】\n「那也不要太勉強欸，雖然工作很重要，不過生活也是要好好過，錢夠用就好哩。」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.DINING_ROOM],
      SPRITE[IMG_KEY.DADA_01],
    ],
    content: '【灰妲】\n「沒問題的啦，我很快就會發大財滴，到時我要盡情享受人生，掰掰～」',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.GO_OUTSIDE],
    ],
    content: '灰妲走出家門，準備開始一天的工作。',
  },
  {
    graphics: [
      {
        draw: (g) => {
          g.beginFill(0x5B3138)
          g.drawRect(40, 10, 1200, 675)
          g.endFill()
        },
      },
    ],
    sprites: [
      SPRITE[IMG_KEY.GO_OUTSIDE],
    ],
    texts: [
      {
        x: 1240 - 16,
        y: 695 - 16,
        text: 'Fin.',
        anchor: [1, 1],
        style: new TextStyle({
          align: 'right',
          fontSize: 48,
          fontFamily: 'Roboto, "Xiaolai Mono SC", sans-serif',
          lineHeight: 48 * 1.2,
          fill: '#ffffff',
          strokeThickness: 5,
        }),
      },
    ],
    content: '希望他真的會發大財，吧？',
    desaturate: true,
  },
]
