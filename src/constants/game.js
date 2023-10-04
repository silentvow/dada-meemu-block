export const GAME_STATE = {
  READY: 'READY',
  PLAYING: 'PLAYING',
  GAME_OVER: 'GAME_OVER',
  STAGE_CLEAR: 'STAGE_CLEAR',
}

export const TOP_BORDER_HEIGHT = 0
export const SCREEN_WIDTH = 1280
export const SCREEN_HEIGHT = 960 - TOP_BORDER_HEIGHT
export const BLOCK_WIDTH = 64
export const BLOCK_HEIGHT = 32
export const ITEM_WIDTH = 48
export const ITEM_HEIGHT = 48
export const PADDLE_DEFAULT_X = 600
export const PADDLE_DEFAULT_Y = 900
export const PADDLE_DEFAULT_WIDTH = 192
export const PADDLE_UNIT_WIDTH = 64
export const PADDLE_MIN_WIDTH = 64
export const PADDLE_MAX_WIDTH = 384
export const PADDLE_HEIGHT = 32
export const PADDLE_IMG_WIDTH = 256
export const PADDLE_IMG_HEIGHT = 73
export const BALL_IMAGE_RADIUS = 32
export const BALL_DEFAULT_RADIUS = 16
export const BALL_MIN_RADIUS = 8
export const BALL_MAX_RADIUS = 64
export const ACCELERATION = 1.01
export const DEFAULT_SPEED = 5
export const SPEED_MULTIPLIER = 1.5
export const MIN_SPEED = 3
export const MAX_SPEED = 20
export const ITEM_DROP_SPEED_FROM = 3
export const ITEM_DROP_SPEED_TO = 5
export const BULLET_SPEED = 5
export const BULLET_WIDTH = 30
export const BULLET_HEIGHT = 40
export const BULLET_OFFSET = 32
export const BULLET_IMG_WIDTH = 48
export const BULLET_IMG_HEIGHT = 64
export const BULLET_DEFAULT_COUNT = 5
export const BULLET_MAX_COUNT = 99
export const BULLET_RELOAD_COUNT = 10

export const DROP_RATIO_BUFF = 0.1
export const DROP_RATIO_DEBUFF = 0.1
export const DROP_RATIO_MONEY_XS = 0.3
export const DROP_RATIO_MONEY_SM = 0.2
export const DROP_RATIO_MONEY_MD = 0.15
export const DROP_RATIO_MONEY_LG = 0.1
export const DROP_RATIO_MONEY_XL = 0.05

export const BLOCK = {
  NORMAL_1: 'NORMAL_1',
  NORMAL_2: 'NORMAL_2',
  NORMAL_2_1: 'NORMAL_2_1',
  NORMAL_3: 'NORMAL_3',
  NORMAL_3_1: 'NORMAL_3_1',
  NORMAL_3_2: 'NORMAL_3_2',
  STONE: 'STONE',
}

export const BLOCK_HP = {
  [BLOCK.NORMAL_1]: 1,
  [BLOCK.NORMAL_2]: 2,
  [BLOCK.NORMAL_3]: 3,
  [BLOCK.STONE]: Infinity,
}

export const ITEM = {
  BULLET_PACK: 'BULLET_PACK',
  PADDLE_PLUS: 'PADDLE_PLUS',
  PADDLE_MINUS: 'PADDLE_MINUS',
  BALL_DOUBLE: 'BALL_DOUBLE',
  BALL_RED: 'BALL_RED',
  BALL_BLUE: 'BALL_BLUE',
  BALL_LARGE: 'BALL_LARGE',
  BALL_SMALL: 'BALL_SMALL',
  SPEED_PLUS: 'SPEED_PLUS',
  SPEED_MINUS: 'SPEED_MINUS',
  UNKNOWN: 'UNKNOWN',
  MONEY_XS: 'MONEY_XS',
  MONEY_SM: 'MONEY_SM',
  MONEY_MD: 'MONEY_MD',
  MONEY_LG: 'MONEY_LG',
  MONEY_XL: 'MONEY_XL',
}

export const IMG_URLS = {
  BACKGROUND: '/img/bg.png',
  BALL: '/img/ball.png',
  RED_BALL: '/img/red-ball.png',
  PADDLE: '/img/paddle.png',
  BULLET: '/img/fire-ball.png',
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
  [ITEM.BALL_LARGE]: '/img/zoom-in.png',
  [ITEM.BALL_SMALL]: '/img/zoom-out.png',
  [ITEM.SPEED_PLUS]: '/img/fast.png',
  [ITEM.SPEED_MINUS]: '/img/slow.png',
  [ITEM.UNKNOWN]: '/img/black-box.png',
  [ITEM.MONEY_XS]: '/img/coin-bronze.png',
  [ITEM.MONEY_SM]: '/img/coin-silver.png',
  [ITEM.MONEY_MD]: '/img/coin-gold.png',
  [ITEM.MONEY_LG]: '/img/dollar1.png',
  [ITEM.MONEY_XL]: '/img/dollar6.png',
}

export const BUFF_ITEMS = [
  ITEM.BULLET_PACK,
  ITEM.PADDLE_PLUS,
  ITEM.BALL_DOUBLE,
  ITEM.BALL_RED,
  ITEM.BALL_LARGE,
  ITEM.SPEED_MINUS,
]

export const DEBUFF_ITEMS = [
  ITEM.PADDLE_MINUS,
  ITEM.BALL_SMALL,
  ITEM.BALL_BLUE,
  ITEM.SPEED_PLUS,
]

export const MONEY_VALUES = {
  [ITEM.MONEY_XS]: 1000,
  [ITEM.MONEY_SM]: 4000,
  [ITEM.MONEY_MD]: 10000,
  [ITEM.MONEY_LG]: 40000,
  [ITEM.MONEY_XL]: 200000,
}
