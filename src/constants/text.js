import { INTRODUCE_TEXT, STAFF_TEXT } from '@/components/Readme'
import { ALL_CHAPTERS, EXTRA_CHAPTER } from './story'

export const FONT_TEST_STRING = [
  ...ALL_CHAPTERS.map((chapter) => chapter.map((scene) => [...scene.texts?.map(({ text }) => text) ?? [], scene.content].join('')).join('')),
  EXTRA_CHAPTER.map((scene) => [...scene.texts?.map(({ text }) => text) ?? [], scene.content].join('')).join(''),
  INTRODUCE_TEXT,
  STAFF_TEXT,
  '故事模式正篇附錄挑戰遊戲說明得分紀錄返回前頁灰妲幼標準難度？',
].join('')
