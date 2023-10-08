import { BALL_COLOR, BLOCK, ITEM } from './game'

export const IMG_KEY = {
  OFFICE: 'OFFICE',
  WALL: 'WALL',
}

export const IMG_URLS = {
  COVER: 'https://placehold.co/1920x1080',
  BACKGROUND_1: '/img/bg-texture-1.png',
  BACKGROUND_2: '/img/bg-texture-2.png',
  BACKGROUND_3: '/img/bg-texture-3.png',
  BACKGROUND_4: '/img/bg-texture-4.png',
  BACKGROUND_5: '/img/bg-texture-5.png',
  MENU_BUTTON: '/img/button.png',
  PADDLE: '/img/paddle.png',
  BULLET: '/img/fire-ball.png',
  HEART: '/img/heart.png',
  [BALL_COLOR.BLUE]: '/img/ball.png',
  [BALL_COLOR.RED]: '/img/red-ball.png',
  [BALL_COLOR.BLACK]: '/img/black-ball.png',
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
  [ITEM.UNKNOWN]: '/img/black-box.png',
  [ITEM.MONEY_XS]: '/img/coin-bronze.png',
  [ITEM.MONEY_SM]: '/img/coin-silver.png',
  [ITEM.MONEY_MD]: '/img/coin-gold.png',
  [ITEM.MONEY_LG]: '/img/dollar1.png',
  [ITEM.MONEY_XL]: '/img/dollar6.png',
  [IMG_KEY.OFFICE]: '/img/bg-doujou.jpg',
  [IMG_KEY.WALL]: '/img/bg-wall.jpg',
}

export const SPRITE = {
  [IMG_KEY.OFFICE]: { x: 40, y: 10, width: 1200, height: 675, scale: { x: 1200 / 1920, y: 675 / 1080 }, image: IMG_URLS[IMG_KEY.OFFICE] },
  [IMG_KEY.WALL]: { x: 40, y: 10, width: 1200, height: 675, scale: { x: 1200 / 600, y: 675 / 338 }, image: IMG_URLS[IMG_KEY.WALL] },
}
