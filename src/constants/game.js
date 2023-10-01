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
export const BALL_MAX_RADIUS = 32
export const ACCELERATION = 1.01
export const DEFAULT_SPEED = 5
export const SPEED_MULTIPLIER = 1.5
export const MAX_SPEED = 20
export const ITEM_DROP_SPEED_FROM = 3
export const ITEM_DROP_SPEED_TO = 5
export const BULLET_SPEED = 5

export const DROP_RATIO_BUFF = 0.1
export const DROP_RATIO_DEBUFF = 0.1
export const DROP_RATIO_MONEY_XS = 0.3
export const DROP_RATIO_MONEY_SM = 0.2
export const DROP_RATIO_MONEY_MD = 0.15
export const DROP_RATIO_MONEY_LG = 0.1
export const DROP_RATIO_MONEY_XL = 0.05

export const ITEM = {
  BULLET: 'BULLET',
  PADDLE_PLUS: 'PADDLE_PLUS',
  PADDLE_MINUS: 'PADDLE_MINUS',
  BALL_DOUBLE: 'BALL_DOUBLE',
  BALL_RED: 'BALL_RED',
  BALL_BLUE: 'BALL_BLUE',
  BALL_LARGE: 'BALL_LARGE',
  BALL_SMALL: 'BALL_SMALL',
  SPEED_PLUS: 'SPEED_PLUS',
  SPEED_MINUS: 'SPEED_MINUS',
  MONEY_XS: 'MONEY_XS',
  MONEY_SM: 'MONEY_SM',
  MONEY_MD: 'MONEY_MD',
  MONEY_LG: 'MONEY_LG',
  MONEY_XL: 'MONEY_XL',
}

export const IMG_URLS = {
  [ITEM.BULLET]: '/img/chili-sauce.png',
  [ITEM.PADDLE_PLUS]: '/img/chicken.png',
  [ITEM.PADDLE_MINUS]: '/img/chicken-eye.png',
  [ITEM.BALL_DOUBLE]: '/img/double.png',
  [ITEM.BALL_RED]: '/img/reddrop.png',
  [ITEM.BALL_BLUE]: '/img/bluedrop.png',
  [ITEM.BALL_LARGE]: '/img/magnifier.png',
  [ITEM.BALL_SMALL]: '/img/small-light.png',
  [ITEM.SPEED_PLUS]: '/img/rabbit.png',
  [ITEM.SPEED_MINUS]: '/img/turtle.png',
  [ITEM.MONEY_XS]: '/img/coin-bronze.png',
  [ITEM.MONEY_SM]: '/img/coin-silver.png',
  [ITEM.MONEY_MD]: '/img/coin-gold.png',
  [ITEM.MONEY_LG]: '/img/money1000.png',
  [ITEM.MONEY_XL]: '/img/money2000.png',
}

export const BUFF_ITEMS = [
  ITEM.BULLET,
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
