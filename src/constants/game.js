export const GAME_STATE = {
  MAIN_MENU: 'MAIN_MENU',
  README: 'README',
  SCOREBOARD: 'SCOREBOARD',
  STORY: 'STORY',
  READY: 'READY',
  PLAYING: 'PLAYING',
  GAME_OVER: 'GAME_OVER',
  STAGE_CLEAR: 'STAGE_CLEAR',
  STAGE_FAILED: 'STAGE_FAILED',
  ENDING: 'ENDING',
  PAUSED: 'PAUSED',
}

export const IN_GAME_STATES = [
  GAME_STATE.READY,
  GAME_STATE.PLAYING,
  GAME_STATE.PAUSED,
  GAME_STATE.STAGE_CLEAR,
  GAME_STATE.STAGE_FAILED,
  GAME_STATE.GAME_OVER,
]

export const GAME_MODE = {
  STORY: 'STORY',
  EXTRA_STORY: 'EXTRA_STORY',
  CHALLENGE_DADA: 'CHALLENGE_DADA',
  CHALLENGE_YODA: 'CHALLENGE_YODA',
  CHALLENGE_REAL: 'CHALLENGE_REAL',
}

export const LOCAL_STORAGE_KEY = {
  VOLUME_SETTING: 'VOLUME_SETTING',
  UNLOCK_REAL_CHALLENGE: 'UNLOCK_REAL_CHALLENGE',
  UNLOCK_EXTRA_STORY: 'UNLOCK_EXTRA_STORY',
  HIGH_SCORE_CHALLENGE_DADA: 'HIGH_SCORE_CHALLENGE_DADA',
  HIGH_SCORE_CHALLENGE_YODA: 'HIGH_SCORE_CHALLENGE_YODA',
  HIGH_SCORE_CHALLENGE_REAL: 'HIGH_SCORE_CHALLENGE_REAL',
  HIGH_SCORE_EXTRA_STORY: 'HIGH_SCORE_EXTRA_STORY',
  HIGH_SCORE_STORY: 'HIGH_SCORE_STORY',
}

export const DEFAULT_LIVES = 2
export const MAX_LIVES = 9
export const TOP_BORDER_HEIGHT = 0
export const SCREEN_WIDTH = 1280
export const SCREEN_HEIGHT = 960 - TOP_BORDER_HEIGHT
export const BLOCK_WIDTH = 64
export const BLOCK_HEIGHT = 32
export const ITEM_WIDTH = 48
export const ITEM_HEIGHT = 48
export const PADDLE_DEFAULT_X = 600
export const PADDLE_DEFAULT_Y = 900
export const PADDLE_DEFAULT_WIDTH = 192 // 64 + 64 + 64
export const PADDLE_UNIT_WIDTH = 72
export const PADDLE_MIN_WIDTH = PADDLE_DEFAULT_WIDTH - PADDLE_UNIT_WIDTH * 2
export const PADDLE_MAX_WIDTH = PADDLE_DEFAULT_WIDTH + PADDLE_UNIT_WIDTH * 2
export const PADDLE_YODA_DEFAULT_WIDTH = PADDLE_DEFAULT_WIDTH - PADDLE_UNIT_WIDTH
export const PADDLE_YODA_MIN_WIDTH = PADDLE_MIN_WIDTH
export const PADDLE_YODA_MAX_WIDTH = PADDLE_YODA_DEFAULT_WIDTH
export const PADDLE_HEIGHT = 32
export const PADDLE_IMG_WIDTH = 256
export const PADDLE_IMG_HEIGHT = 73
export const BALL_IMAGE_RADIUS = 32
export const BALL_DEFAULT_RADIUS = 24
export const BALL_MIN_RADIUS = 8
export const BALL_MAX_RADIUS = 56
export const BALL_UNIT_RADIUS = 16
export const ACCELERATION = 1.01
export const REAL_ACCELERATION = 1.02
export const DEFAULT_SPEED = 5
export const REAL_DEFAULT_SPEED = 7.5
export const SPEED_MULTIPLIER = 1.5
export const MIN_SPEED = 3
export const MAX_SPEED = 20
export const ITEM_DROP_SPEED_FROM = 2
export const ITEM_DROP_SPEED_TO = 4
export const BULLET_ATK = 2
export const BULLET_SPEED = 5
export const BULLET_WIDTH = 30
export const BULLET_HEIGHT = 40
export const BULLET_IMG_WIDTH = 48
export const BULLET_IMG_HEIGHT = 64
export const BULLET_DEFAULT_COUNT = 10
export const BULLET_MAX_COUNT = 99
export const BULLET_RELOAD_COUNT = 10
export const DELTA_UNIT = 0.42

export const DROP_RATIO_BUFF = 0.1
export const DROP_RATIO_DEBUFF = 0.09
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
  [BLOCK.NORMAL_1]: 2,
  [BLOCK.NORMAL_2]: 4,
  [BLOCK.NORMAL_3]: 6,
  [BLOCK.STONE]: Infinity,
}

export const BALL_COLOR = {
  BLUE: 'BALL_COLOR_BLUE',
  RED: 'BALL_COLOR_RED',
  BLACK: 'BALL_COLOR_BLACK',
}

export const BALL_ATK = {
  [BALL_COLOR.BLUE]: 2,
  [BALL_COLOR.RED]: 6,
  [BALL_COLOR.BLACK]: 1,
}

export const ITEM = {
  BULLET_PACK: 'ITEM_BULLET_PACK',
  PADDLE_PLUS: 'ITEM_PADDLE_PLUS',
  PADDLE_MINUS: 'ITEM_PADDLE_MINUS',
  BALL_DOUBLE: 'ITEM_BALL_DOUBLE',
  BALL_RED: 'ITEM_BALL_RED',
  BALL_BLUE: 'ITEM_BALL_BLUE',
  BALL_BLACK: 'ITEM_BALL_BLACK',
  BALL_LARGE: 'ITEM_BALL_LARGE',
  BALL_SMALL: 'ITEM_BALL_SMALL',
  SPEED_PLUS: 'ITEM_SPEED_PLUS',
  SPEED_MINUS: 'ITEM_SPEED_MINUS',
  CHICKEN: 'ITEM_CHICKEN',
  UNKNOWN: 'ITEM_UNKNOWN',
  MONEY_XS: 'ITEM_MONEY_XS',
  MONEY_SM: 'ITEM_MONEY_SM',
  MONEY_MD: 'ITEM_MONEY_MD',
  MONEY_LG: 'ITEM_MONEY_LG',
  MONEY_XL: 'ITEM_MONEY_XL',
}

export const README_ITEMS = [
  [
    ITEM.BALL_RED,
    ITEM.BALL_DOUBLE,
    ITEM.BALL_LARGE,
    ITEM.SPEED_MINUS,
    ITEM.PADDLE_PLUS,
    ITEM.BULLET_PACK,
    ITEM.MONEY_XL,
    ITEM.MONEY_MD,
    ITEM.MONEY_XS,
  ],
  [
    ITEM.BALL_BLACK,
    ITEM.BALL_BLUE,
    ITEM.BALL_SMALL,
    ITEM.SPEED_PLUS,
    ITEM.PADDLE_MINUS,
    ITEM.CHICKEN,
    ITEM.MONEY_LG,
    ITEM.MONEY_SM,
    ITEM.UNKNOWN,
  ],
]

export const BUFF_ITEMS = [
  ITEM.BALL_RED,
  ITEM.BALL_DOUBLE,
  ITEM.BALL_LARGE,
  ITEM.SPEED_MINUS,
  ITEM.PADDLE_PLUS,
  ITEM.BULLET_PACK,
]

export const DEBUFF_ITEMS = [
  ITEM.BALL_BLACK,
  ITEM.BALL_BLUE,
  ITEM.BALL_SMALL,
  ITEM.SPEED_PLUS,
  ITEM.PADDLE_MINUS,
]

export const REAL_BUFF_ITEMS = BUFF_ITEMS.filter(item => ![ITEM.BULLET_PACK, ITEM.PADDLE_PLUS].includes(item))

export const REAL_DEBUFF_ITEMS = DEBUFF_ITEMS.filter(item => ![ITEM.PADDLE_MINUS, ITEM.CHICKEN].includes(item))

export const MONEY_VALUES = {
  [ITEM.MONEY_XS]: 1000,
  [ITEM.MONEY_SM]: 4000,
  [ITEM.MONEY_MD]: 10000,
  [ITEM.MONEY_LG]: 40000,
  [ITEM.MONEY_XL]: 200000,
}

export const PADDLE_WIDTH = {
  XL: PADDLE_MAX_WIDTH,
  LG: PADDLE_DEFAULT_WIDTH + PADDLE_UNIT_WIDTH,
  MD: PADDLE_DEFAULT_WIDTH,
  SM: PADDLE_DEFAULT_WIDTH - PADDLE_UNIT_WIDTH,
  XS: PADDLE_MIN_WIDTH,
}

export const API_URLS = {
  HIGH_SCORE: '/api/highscore',
  [GAME_MODE.STORY]: '/api/story',
  [GAME_MODE.EXTRA_STORY]: '/api/extra-story',
  [GAME_MODE.CHALLENGE_DADA]: '/api/challenge-dada',
  [GAME_MODE.CHALLENGE_YODA]: '/api/challenge-yoda',
  [GAME_MODE.CHALLENGE_REAL]: '/api/challenge-real',
}

export const HIGH_SCORE_KEYS = {
  [GAME_MODE.STORY]: LOCAL_STORAGE_KEY.HIGH_SCORE_STORY,
  [GAME_MODE.EXTRA_STORY]: LOCAL_STORAGE_KEY.HIGH_SCORE_EXTRA_STORY,
  [GAME_MODE.CHALLENGE_DADA]: LOCAL_STORAGE_KEY.HIGH_SCORE_CHALLENGE_DADA,
  [GAME_MODE.CHALLENGE_YODA]: LOCAL_STORAGE_KEY.HIGH_SCORE_CHALLENGE_YODA,
  [GAME_MODE.CHALLENGE_REAL]: LOCAL_STORAGE_KEY.HIGH_SCORE_CHALLENGE_REAL,
}
