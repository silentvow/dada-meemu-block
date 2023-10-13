import { ALL_CHAPTERS, EXTRA_CHAPTERS } from './story'

export const FONT_TEST_STRING = [
  ...ALL_CHAPTERS.map((chapter) => chapter.map((scene) => [...scene.texts?.map(({ text }) => text) ?? [], scene.content].join('')).join('')),
  ...EXTRA_CHAPTERS.map((chapter) => chapter.map((scene) => [...scene.texts?.map(({ text }) => text) ?? [], scene.content].join('')).join('')),
  '故事模式挑戰遊戲說明得分紀錄返回前頁灰妲幼標準難度？',
].join('')
