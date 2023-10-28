import { LOCAL_STORAGE_KEY } from '@/constants/game'
import { SOUND_URLS } from '@/constants/image'
import { useGame } from '@/game'
import { sound } from '@pixi/sound'
import { useEffect } from 'react'

sound.add(SOUND_URLS)

function SoundProvider ({ children }) {
  const { soundQueue, popSoundQueue } = useGame(state => ({
    soundQueue: state.soundQueue,
    popSoundQueue: state.popSoundQueue,
  }))

  useEffect(() => {
    if (soundQueue.length > 0) {
      const soundKey = soundQueue[0]
      const volume = localStorage.getItem(LOCAL_STORAGE_KEY.VOLUME_SETTING) ?? 1
      sound.play(soundKey, { volume: parseFloat(volume) })
      popSoundQueue()
    }
  }, [soundQueue, popSoundQueue])

  return children
}

export default SoundProvider
