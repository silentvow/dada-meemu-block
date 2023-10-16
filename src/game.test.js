import { act, renderHook } from '@testing-library/react'
import { MONEY_VALUES } from './constants/game'
import { useGame } from './game'

jest.mock('./utils/gtag', () => {
  return {
    __esModule: true,
    sendPageView: jest.fn(() => {}),
    sendEvent: jest.fn(() => {}),
  }
})

test('stage test', () => {
  const { result } = renderHook(() => useGame(state => state))

  act(() => {
    result.current.enterDadaChallengeMode()
  })

  let sum = 0
  for (let i = 0; i < 20; i++) {
    act(() => {
      result.current.enterStage(i)
    })
    result.current.blocks.forEach(block => {
      sum += MONEY_VALUES[block.item] || 0
    })
  }
  console.log({ sum })

  expect()
})
