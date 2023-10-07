import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/game'
import { IMG_URLS } from '@/constants/image'
import { TilingSprite } from '@pixi/react'

const LINE_HEIGHT = 64
const LAYER_1_HEIGHT = 256
const LAYER_3_HEIGHT = 256
const LAYER_2_HEIGHT = SCREEN_HEIGHT - LAYER_3_HEIGHT - LAYER_1_HEIGHT - LINE_HEIGHT * 2

function Background () {
  return (
    <>
      <TilingSprite x={0} y={0} width={SCREEN_WIDTH} height={LAYER_1_HEIGHT} image={IMG_URLS.BACKGROUND_1} />
      <TilingSprite x={0} y={LAYER_1_HEIGHT} width={SCREEN_WIDTH} height={LINE_HEIGHT} image={IMG_URLS.BACKGROUND_2} />
      <TilingSprite x={0} y={LAYER_1_HEIGHT + LINE_HEIGHT} width={SCREEN_WIDTH} height={LAYER_2_HEIGHT} image={IMG_URLS.BACKGROUND_3} />
      <TilingSprite x={0} y={SCREEN_HEIGHT - LAYER_3_HEIGHT - LINE_HEIGHT} width={SCREEN_WIDTH} height={LINE_HEIGHT} image={IMG_URLS.BACKGROUND_4} />
      <TilingSprite x={0} y={SCREEN_HEIGHT - LAYER_3_HEIGHT} width={SCREEN_WIDTH} height={LAYER_3_HEIGHT} image={IMG_URLS.BACKGROUND_5} />
    </>
  )
}

export default Background
