import { LOCAL_STORAGE_KEY } from '@/constants/game'
import { SOUND_URLS } from '@/constants/sound'
import { useGame } from '@/game'
import { sound } from '@pixi/sound'
import { animate } from 'popmotion'
import { useEffect } from 'react'

sound.add(SOUND_URLS)

function SoundProvider ({ children }) {
  const { bgm, soundQueue, popSoundQueue } = useGame(state => ({
    bgm: state.bgm,
    soundQueue: state.soundQueue,
    popSoundQueue: state.popSoundQueue,
  }))

  useEffect(() => {
    if (soundQueue.length > 0) {
      const soundKey = soundQueue[0]
      const volume = localStorage.getItem(LOCAL_STORAGE_KEY.VOLUME_SFX) ?? 1
      sound.play(soundKey, { volume: parseFloat(volume) })
      popSoundQueue()
    }
  }, [soundQueue, popSoundQueue])

  useEffect(() => {
    if (typeof bgm === 'string') {
      const volume = localStorage.getItem(LOCAL_STORAGE_KEY.VOLUME_BGM) ?? 1
      const media = sound.play(bgm, { loop: true, volume: 0 })
      Promise.resolve(media).then(
        function (value) {
          animate({
            from: 0,
            to: parseFloat(volume),
            duration: 1000,
            onUpdate: latest => {
              value.set('volume', latest)
            },
          })
        },
      )

      return () => {
        animate({
          from: parseFloat(volume),
          to: 0,
          duration: 1000,
          onUpdate: latest => {
            Promise.resolve(media).then(media => media.set('volume', latest))
          },
          onComplete: () => sound.stop(bgm),
        })
      }
    }
  }, [bgm])

  return children
}

export default SoundProvider
