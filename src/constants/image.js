import { BALL_COLOR, BLOCK, ITEM, PADDLE_WIDTH } from './game'

export const IMG_KEY = {
  RUIN_ENTRY: 'RUIN_ENTRY',
  OFFICE: 'OFFICE',
  WALL: 'WALL',
  BREAK_WALL: 'BREAK_WALL',
  TREASURE_MAP: 'TREASURE_MAP',
  LINE_CENTERING: 'LINE_CENTERING',
  LINE_SPEED_UP: 'LINE_SPEED_UP',
  STONE: 'HUGE_STONE',
  BG_ROCK: 'BG_ROCK',
  TWO_CAVE: 'TWO_CAVE',
  GATE_CLOSED: 'GATE_CLOSED',
  GATE_OPENED: 'GATE_OPENED',
  BOWS: 'BOWS',
  METAL_BALL: 'METAL_BALL',
  METAL_BALL_2: 'METAL_BALL_2',
  BG_BREAK: 'BG_BREAK',
  COIN_HEAP: 'COIN_HEAP',
  MEEMU: 'MEEMU',
  MEEMU_2: 'MEEMU_2',
  RED_MEEMU: 'RED_MEEMU',
  DADA_01: 'DADA_01',
  DADA_02: 'DADA_02',
  DADA_03: 'DADA_03',
  DADA_04: 'DADA_04',
  DADA_05: 'DADA_05',
  DADA_06: 'DADA_06',
  ENDING: 'ENDING',
  PADDLE_XL: 'PADDLE_XL',
  PADDLE_LG: 'PADDLE_LG',
  PADDLE_MD: 'PADDLE_MD',
  PADDLE_SM: 'PADDLE_SM',
  PADDLE_XS: 'PADDLE_XS',
  PADDLE_REAL: 'PADDLE_REAL',
  REAL_DA: 'REAL_DA',
  BEDROOM: 'BEDROOM',
  BATHROOM: 'BATHROOM',
  DINING_ROOM: 'DINING_ROOM',
  BREAKFAST: 'BREAKFAST',
  GO_OUTSIDE: 'GO_OUTSIDE',
}

export const IMG_URLS = {
  COVER: '/img/commission/cover.png',
  TITLE: '/img/story/title.png',
  ENDING: '/img/commission/ending.png',
  GAME_OVER: '/img/dada/game-over.png',
  BACKGROUND_1: '/img/bg-texture-1.png',
  BACKGROUND_2: '/img/bg-texture-2.png',
  BACKGROUND_3: '/img/bg-texture-3.png',
  BACKGROUND_4: '/img/bg-texture-4.png',
  BACKGROUND_5: '/img/bg-texture-5.png',
  MENU_BUTTON: '/img/button.png',
  BULLET: '/img/fire-ball.png',
  HEART: '/img/heart.png',
  [BALL_COLOR.BLUE]: '/img/meemu/ball.png',
  [BALL_COLOR.RED]: '/img/meemu/red-ball.png',
  [BALL_COLOR.BLACK]: '/img/meemu/black-ball.png',
  [BLOCK.NORMAL_1]: '/img/box1.png',
  [BLOCK.NORMAL_2]: '/img/box2.png',
  [BLOCK.NORMAL_2_1]: '/img/box2-1.png',
  [BLOCK.NORMAL_3]: '/img/box3.png',
  [BLOCK.NORMAL_3_1]: '/img/box3-1.png',
  [BLOCK.NORMAL_3_2]: '/img/box3-2.png',
  [BLOCK.STONE]: '/img/stone.png',
  [ITEM.BULLET_PACK]: '/img/chili-sauce.png',
  [ITEM.PADDLE_PLUS]: '/img/longer.png',
  [ITEM.PADDLE_MINUS]: '/img/shorter.png',
  [ITEM.BALL_DOUBLE]: '/img/double.png',
  [ITEM.BALL_RED]: '/img/blood-drop.png',
  [ITEM.BALL_BLUE]: '/img/water-drop.png',
  [ITEM.BALL_BLACK]: '/img/ink-drop.png',
  [ITEM.BALL_LARGE]: '/img/zoom-in.png',
  [ITEM.BALL_SMALL]: '/img/zoom-out.png',
  [ITEM.SPEED_PLUS]: '/img/fast.png',
  [ITEM.SPEED_MINUS]: '/img/slow.png',
  [ITEM.CHICKEN]: '/img/chicken-leg.png',
  [ITEM.UNKNOWN]: '/img/black-box.png',
  [ITEM.MONEY_XS]: '/img/coin-bronze.png',
  [ITEM.MONEY_SM]: '/img/coin-silver.png',
  [ITEM.MONEY_MD]: '/img/coin-gold.png',
  [ITEM.MONEY_LG]: '/img/dollar1.png',
  [ITEM.MONEY_XL]: '/img/dollar6.png',
  [IMG_KEY.RUIN_ENTRY]: '/img/story/ruin-entry.png',
  [IMG_KEY.OFFICE]: '/img/bg-doujou.jpg',
  [IMG_KEY.WALL]: '/img/bg-wall.jpg',
  [IMG_KEY.BREAK_WALL]: '/img/bg-break-wall.jpg',
  [IMG_KEY.TREASURE_MAP]: '/img/story/treasure-map.png',
  [IMG_KEY.LINE_CENTERING]: '/img/story/bg-centering.png',
  [IMG_KEY.LINE_SPEED_UP]: '/img/story/bg-speed-up.png',
  [IMG_KEY.STONE]: '/img/story/stone.png',
  [IMG_KEY.BG_ROCK]: '/img/story/bg-rock.png',
  [IMG_KEY.TWO_CAVE]: '/img/story/two-cave.png',
  [IMG_KEY.GATE_CLOSED]: '/img/story/gate-closed.png',
  [IMG_KEY.GATE_OPENED]: '/img/story/gate-opened.png',
  [IMG_KEY.BOWS]: '/img/story/bows.png',
  [IMG_KEY.METAL_BALL]: '/img/story/metal-ball.png',
  [IMG_KEY.METAL_BALL_2]: '/img/story/metal-ball-2.png',
  [IMG_KEY.BG_BREAK]: '/img/story/bg-break.png',
  [IMG_KEY.COIN_HEAP]: '/img/story/coin-heap.png',
  [IMG_KEY.MEEMU]: '/img/meemu/meemu.png',
  [IMG_KEY.MEEMU_2]: '/img/meemu/meemu-2.png',
  [IMG_KEY.RED_MEEMU]: '/img/meemu/red-meemu.png',
  [IMG_KEY.DADA_01]: '/img/dada/01.png',
  [IMG_KEY.DADA_02]: '/img/dada/02.png',
  [IMG_KEY.DADA_03]: '/img/dada/03.png',
  [IMG_KEY.DADA_04]: '/img/dada/04.png',
  [IMG_KEY.DADA_05]: '/img/dada/05.png',
  [IMG_KEY.DADA_06]: '/img/dada/06.png',
  [IMG_KEY.PADDLE_XL]: '/img/commission/paddle-xl.png',
  [IMG_KEY.PADDLE_LG]: '/img/commission/paddle-lg.png',
  [IMG_KEY.PADDLE_MD]: '/img/commission/paddle-md.png',
  [IMG_KEY.PADDLE_SM]: '/img/commission/paddle-sm.png',
  [IMG_KEY.PADDLE_XS]: '/img/commission/paddle-xs.png',
  [IMG_KEY.PADDLE_REAL]: '/img/commission/paddle-real.png',
  [IMG_KEY.REAL_DA]: '/img/dada/realda.png',
  [IMG_KEY.BEDROOM]: '/img/story/bedroom.png',
  [IMG_KEY.BATHROOM]: '/img/story/bathroom.png',
  [IMG_KEY.DINING_ROOM]: '/img/story/dining-room.png',
  [IMG_KEY.BREAKFAST]: '/img/story/breakfast.png',
  [IMG_KEY.GO_OUTSIDE]: '/img/story/go-outside.png',
}

/**
 * main area size: 1200x675
 * main area position: 40, 10
 */
export const SPRITE = {
  [IMG_KEY.RUIN_ENTRY]: { x: 640, y: 700, anchor: [0.5, 1], scale: { x: 1280 / 700, y: 1280 / 700 }, image: IMG_URLS[IMG_KEY.RUIN_ENTRY] },
  [IMG_KEY.OFFICE]: { x: 40, y: 10, width: 1200, height: 675, scale: { x: 1200 / 1920, y: 675 / 1080 }, image: IMG_URLS[IMG_KEY.OFFICE] },
  [IMG_KEY.WALL]: { x: 40, y: 10, width: 1200, height: 675, scale: { x: 1200 / 600, y: 675 / 338 }, image: IMG_URLS[IMG_KEY.WALL] },
  [IMG_KEY.BREAK_WALL]: { x: 40, y: 10, width: 1200, height: 675, scale: { x: 1200 / 600, y: 675 / 338 }, image: IMG_URLS[IMG_KEY.BREAK_WALL] },
  [IMG_KEY.TREASURE_MAP]: { x: 640, y: 360, width: 800 * 0.7, height: 699 * 0.7, anchor: [0.5, 0.5], scale: { x: 0.7, y: 0.7 }, image: IMG_URLS[IMG_KEY.TREASURE_MAP] },
  [IMG_KEY.LINE_CENTERING]: { x: 40, y: 10, width: 1200, height: 675, scale: { x: 1200 / 1600, y: 675 / 900 }, image: IMG_URLS[IMG_KEY.LINE_CENTERING] },
  [IMG_KEY.LINE_SPEED_UP]: { x: 40, y: 10, width: 1200, height: 675, scale: { x: 1200 / 1600, y: 675 / 900 }, image: IMG_URLS[IMG_KEY.LINE_SPEED_UP] },
  [IMG_KEY.STONE]: { x: 640, y: 695, anchor: [0.5, 1], scale: { x: 1, y: 1 }, image: IMG_URLS[IMG_KEY.STONE] },
  [IMG_KEY.BG_ROCK]: { x: 40, y: 10, width: 1200, height: 675, scale: { x: 1200 / 800, y: 675 / 450 }, image: IMG_URLS[IMG_KEY.BG_ROCK] },
  [IMG_KEY.TWO_CAVE]: { x: 675, y: 695, anchor: [0.5, 1], scale: { x: 3, y: 3 }, image: IMG_URLS[IMG_KEY.TWO_CAVE] },
  [IMG_KEY.GATE_CLOSED]: { x: 640, y: 360, width: 800 * 1.75, height: 681 * 1.75, anchor: [0.5, 0.5], scale: { x: 1.75, y: 1.75 }, image: IMG_URLS[IMG_KEY.GATE_CLOSED] },
  [IMG_KEY.GATE_OPENED]: { x: 640, y: 360, width: 800 * 1.75, height: 681 * 1.75, anchor: [0.5, 0.5], scale: { x: 1.75, y: 1.75 }, image: IMG_URLS[IMG_KEY.GATE_OPENED] },
  [IMG_KEY.BOWS]: { x: 640, y: 360, width: 657, height: 561, anchor: [0.5, 0.5], scale: { x: 1, y: 1 }, image: IMG_URLS[IMG_KEY.BOWS] },
  [IMG_KEY.METAL_BALL]: { x: 640, y: 360, width: 176 * 3.5, height: 177 * 3.5, anchor: [0.5, 0.5], scale: { x: 3.5, y: 3.5 }, image: IMG_URLS[IMG_KEY.METAL_BALL] },
  [IMG_KEY.METAL_BALL_2]: { x: 640, y: 360, width: 347 * 2.5, height: 348 * 2.5, anchor: [0.5, 0.5], scale: { x: 2.5, y: 2.5 }, image: IMG_URLS[IMG_KEY.METAL_BALL_2] },
  [IMG_KEY.BG_BREAK]: { x: 640, y: 360, width: 1200 * 0.35, height: 1200 * 0.35, anchor: [0.5, 0.5], scale: { x: 0.35, y: 0.35 }, image: IMG_URLS[IMG_KEY.BG_BREAK] },
  [IMG_KEY.COIN_HEAP]: { x: 640, y: 360, width: 1408 * 0.6, height: 1011 * 0.6, anchor: [0.5, 0.5], scale: { x: 0.6, y: 0.6 }, image: IMG_URLS[IMG_KEY.COIN_HEAP] },
  [IMG_KEY.MEEMU]: { x: 750, y: 250, width: 368, height: 364, scale: { x: 1, y: 1 }, image: IMG_URLS[IMG_KEY.MEEMU] },
  [IMG_KEY.MEEMU_2]: { x: 750, y: 250, width: 368, height: 364, scale: { x: 1, y: 1 }, image: IMG_URLS[IMG_KEY.MEEMU_2] },
  [IMG_KEY.RED_MEEMU]: { x: 640, y: 360, width: 484, height: 467, anchor: [0.5, 0.5], scale: { x: 1, y: 1 }, image: IMG_URLS[IMG_KEY.RED_MEEMU] },
  [IMG_KEY.DADA_01]: { x: -140, y: 10 + 675, width: 1200, height: 635.625, anchor: [0, 1], scale: { x: 1200 / 1920, y: 635.625 / 1017 }, image: IMG_URLS[IMG_KEY.DADA_01] },
  [IMG_KEY.DADA_02]: { x: 40, y: 10 + 675, width: 1200, height: 635.625, anchor: [0, 1], scale: { x: 1200 / 1920, y: 635.625 / 1017 }, image: IMG_URLS[IMG_KEY.DADA_02] },
  [IMG_KEY.DADA_03]: { x: -140, y: 10 + 675, width: 1200, height: 635.625, anchor: [0, 1], scale: { x: 1200 / 1920, y: 635.625 / 1017 }, image: IMG_URLS[IMG_KEY.DADA_03] },
  [IMG_KEY.DADA_04]: { x: -140, y: 10 + 675, width: 600 * 2, height: 317 * 2, anchor: [0, 1], scale: { x: 2, y: 2 }, image: IMG_URLS[IMG_KEY.DADA_04] },
  [IMG_KEY.DADA_05]: { x: -140, y: 10 + 675, width: 1200, height: 635.625, anchor: [0, 1], scale: { x: 1200 / 1920, y: 635.625 / 1017 }, image: IMG_URLS[IMG_KEY.DADA_05] },
  [IMG_KEY.DADA_06]: { x: -140, y: 10 + 675, width: 1200, height: 635.625, anchor: [0, 1], scale: { x: 1200 / 1920, y: 635.625 / 1017 }, image: IMG_URLS[IMG_KEY.DADA_06] },
  [IMG_KEY.ENDING]: { x: 40, y: 10, width: 1200, height: 675, scale: { x: 1200 / 1920, y: 675 / 1080 }, image: IMG_URLS.ENDING },

  [IMG_KEY.PADDLE_XL]: { width: PADDLE_WIDTH.XL, height: 160 * (PADDLE_WIDTH.XL / 507), scale: { x: PADDLE_WIDTH.XL / 504, y: PADDLE_WIDTH.XL / 507 }, image: IMG_URLS[IMG_KEY.PADDLE_XL] },
  [IMG_KEY.PADDLE_LG]: { width: PADDLE_WIDTH.LG, height: 161 * (PADDLE_WIDTH.LG / 468), scale: { x: PADDLE_WIDTH.LG / 468, y: PADDLE_WIDTH.LG / 468 }, image: IMG_URLS[IMG_KEY.PADDLE_LG] },
  [IMG_KEY.PADDLE_MD]: { width: PADDLE_WIDTH.MD, height: 87 * (PADDLE_WIDTH.MD / 325), scale: { x: PADDLE_WIDTH.MD / 325, y: PADDLE_WIDTH.MD / 325 }, image: IMG_URLS[IMG_KEY.PADDLE_MD] },
  [IMG_KEY.PADDLE_SM]: { width: PADDLE_WIDTH.SM, height: 97 * (PADDLE_WIDTH.SM / 223), scale: { x: PADDLE_WIDTH.SM / 223, y: PADDLE_WIDTH.SM / 223 }, image: IMG_URLS[IMG_KEY.PADDLE_SM] },
  [IMG_KEY.PADDLE_XS]: { width: PADDLE_WIDTH.XS, height: 70 * (PADDLE_WIDTH.XS / 113), scale: { x: PADDLE_WIDTH.XS / 113, y: PADDLE_WIDTH.XS / 113 }, image: IMG_URLS[IMG_KEY.PADDLE_XS] },
  [IMG_KEY.PADDLE_REAL]: { width: PADDLE_WIDTH.MD, height: 116 * (PADDLE_WIDTH.MD / 321), scale: { x: PADDLE_WIDTH.MD / 321, y: PADDLE_WIDTH.MD / 321 }, image: IMG_URLS[IMG_KEY.PADDLE_REAL] },

  [IMG_KEY.REAL_DA]: { x: 640, y: 10 + 675, anchor: [0.5, 1], scale: { x: 0.7, y: 0.7 }, image: IMG_URLS[IMG_KEY.REAL_DA] },
  [IMG_KEY.BEDROOM]: { x: 720, y: 10, width: 675, height: 675, anchor: [0.5, 0], scale: { x: 675 / 587, y: 675 / 587 }, image: IMG_URLS[IMG_KEY.BEDROOM] },
  [IMG_KEY.BATHROOM]: { x: 720, y: 10, width: 675, height: 675, anchor: [0.5, 0], scale: { x: 675 / 587, y: 675 / 587 }, image: IMG_URLS[IMG_KEY.BATHROOM] },
  [IMG_KEY.DINING_ROOM]: { x: 640, y: 695, width: 800, height: 800, anchor: [0.5, 1], scale: { x: 800 / 587, y: 800 / 587 }, image: IMG_URLS[IMG_KEY.DINING_ROOM] },
  [IMG_KEY.BREAKFAST]: { x: 640, y: 400, anchor: [0.5, 0.5], scale: { x: 0.3, y: 0.3 }, image: IMG_URLS[IMG_KEY.BREAKFAST] },
  [IMG_KEY.GO_OUTSIDE]: { x: 640, y: 10, anchor: [0.5, 0], scale: { x: 675 / 800, y: 675 / 800 }, image: IMG_URLS[IMG_KEY.GO_OUTSIDE] },
}

export const PADDLE_IMG_KEY = {
  [PADDLE_WIDTH.XL]: IMG_KEY.PADDLE_XL,
  [PADDLE_WIDTH.LG]: IMG_KEY.PADDLE_LG,
  [PADDLE_WIDTH.MD]: IMG_KEY.PADDLE_MD,
  [PADDLE_WIDTH.SM]: IMG_KEY.PADDLE_SM,
  [PADDLE_WIDTH.XS]: IMG_KEY.PADDLE_XS,
}
