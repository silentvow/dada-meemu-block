import { IMG_URLS, SCREEN_WIDTH } from '@/constants/game'
import { TilingSprite } from '@pixi/react'

function Background () {
  return (
    <>
      <TilingSprite x={0} y={0} width={SCREEN_WIDTH} height={256} image={IMG_URLS.BACKGROUND_1} />
      <TilingSprite x={0} y={256} width={SCREEN_WIDTH} height={16} image={IMG_URLS.BACKGROUND_2} />
      <TilingSprite x={0} y={272} width={SCREEN_WIDTH} height={496 - 272} image={IMG_URLS.BACKGROUND_3} />
      <TilingSprite x={0} y={496} width={SCREEN_WIDTH} height={16} image={IMG_URLS.BACKGROUND_4} />
      <TilingSprite x={0} y={512} width={SCREEN_WIDTH} height={448} image={IMG_URLS.BACKGROUND_5} />
    </>
  )
}

export default Background
