import { INTRODUCE_TEXT, STAFF_TEXT } from '@/components/Readme'
import { ALL_CHAPTERS, EXTRA_CHAPTER } from './story'

export const FONT_TEST_STRING = [
  ...ALL_CHAPTERS.map((chapter) => chapter.map((scene) => [...scene.texts?.map(({ text }) => text) ?? [], scene.content].join('')).join('')),
  EXTRA_CHAPTER.map((scene) => [...scene.texts?.map(({ text }) => text) ?? [], scene.content].join('')).join(''),
  INTRODUCE_TEXT,
  STAFF_TEXT,
  '故事模式正篇附錄挑戰遊戲說明得分紀錄返回前頁灰妲幼標準難度？',
].join('')

export const TEXT_SPEED = {
  VERY_SLOW: '極慢',
  SLOW: '稍慢',
  NORMAL: '普通',
  FAST: '稍快',
  VERY_FAST: '極快',
}

export const TEXT_SPEED_PREV = {
  [TEXT_SPEED.VERY_SLOW]: TEXT_SPEED.VERY_SLOW,
  [TEXT_SPEED.SLOW]: TEXT_SPEED.VERY_SLOW,
  [TEXT_SPEED.NORMAL]: TEXT_SPEED.SLOW,
  [TEXT_SPEED.FAST]: TEXT_SPEED.NORMAL,
  [TEXT_SPEED.VERY_FAST]: TEXT_SPEED.FAST,
}

export const TEXT_SPEED_NEXT = {
  [TEXT_SPEED.VERY_SLOW]: TEXT_SPEED.SLOW,
  [TEXT_SPEED.SLOW]: TEXT_SPEED.NORMAL,
  [TEXT_SPEED.NORMAL]: TEXT_SPEED.FAST,
  [TEXT_SPEED.FAST]: TEXT_SPEED.VERY_FAST,
  [TEXT_SPEED.VERY_FAST]: TEXT_SPEED.VERY_FAST,
}

export const TEXT_SPEED_VALUE = {
  [TEXT_SPEED.VERY_SLOW]: 128,
  [TEXT_SPEED.SLOW]: 64,
  [TEXT_SPEED.NORMAL]: 32,
  [TEXT_SPEED.FAST]: 16,
  [TEXT_SPEED.VERY_FAST]: 8,
}

export const FPS_LIMIT = {
  NO_LIMIT: '不限',
  HIGH: '120',
  MEDIUM: '60',
  LOW: '30',
}

export const FPS_LIMIT_PREV = {
  [FPS_LIMIT.NO_LIMIT]: FPS_LIMIT.HIGH,
  [FPS_LIMIT.HIGH]: FPS_LIMIT.MEDIUM,
  [FPS_LIMIT.MEDIUM]: FPS_LIMIT.LOW,
  [FPS_LIMIT.LOW]: FPS_LIMIT.LOW,
}

export const FPS_LIMIT_NEXT = {
  [FPS_LIMIT.NO_LIMIT]: FPS_LIMIT.NO_LIMIT,
  [FPS_LIMIT.HIGH]: FPS_LIMIT.NO_LIMIT,
  [FPS_LIMIT.MEDIUM]: FPS_LIMIT.HIGH,
  [FPS_LIMIT.LOW]: FPS_LIMIT.MEDIUM,
}

export const FPS_LIMIT_VALUE = {
  [FPS_LIMIT.NO_LIMIT]: 0,
  [FPS_LIMIT.HIGH]: 120,
  [FPS_LIMIT.MEDIUM]: 60,
  [FPS_LIMIT.LOW]: 30,
}
