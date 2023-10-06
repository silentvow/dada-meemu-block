import { BLOCK } from './game'

export const BLOCK_CHAR_MAP = {
  1: BLOCK.NORMAL_1,
  2: BLOCK.NORMAL_2,
  3: BLOCK.NORMAL_3,
  '#': BLOCK.STONE,
}

const EDITING_MAP = [
  '....................',
  '................1...',
  '..1............1#1..',
  '.1#1............1...',
  '..1..............2..',
  '.2......1........2..',
  '.2.....1#1.......2..',
  '.2......1......3.2..',
  '.2.3...2.......332..',
  '.233...2.3......32..',
  '.23....233....1..2.3',
  '.2.....23....1#1.233',
  '32..1..2......1..23.',
  '32.1#1.2..1....2.2..',
  '.2..1..2.1#1.3.2.2..',
  '.2...2.2..1..332.2..',
  '.2.3.2.2...2..32.2..',
  '.2.332.2..32...2.2..',
  '.2..32.2...2...2.2..',
  '11111111111111111111',
]

export const TEST_MAP = [
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '.........1..........',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
]

const STAGE_1_MAP = [
  '....................',
  '....................',
  '..111111111111111#..',
  '..1#13312211221131..',
  '..1221331213311221..',
  '..11331#1331133111..',
  '..1221122112211221..',
  '..1111111111111111..',
  '..1111111111111111..',
  '..1111111111111111..',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
]

const STAGE_2_MAP = [
  '.12....111111....12.',
  '.12.....1111.....12.',
  '.12.....1111.....12.',
  '.12.....1111.....12.',
  '.12......11......12.',
  '.12......33.....112.',
  '.12.............112.',
  '.121...........1112.',
  '.12111.........1112.',
  '.1222221......22222.',
  '.122222111....22222.',
  '.122222111....22222.',
  '.122222111....22222.',
  '.122222111....22222.',
  '.111111111....11111.',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
]

const STAGE_3_MAP = [
  '....................',
  '..1111..1111..1212..',
  '..1111..1313..1212..',
  '..1331..1313..1111..',
  '..1331..1111..1212..',
  '..1331..1111..1212..',
  '..1331..1313..1111..',
  '..1111..1313..1212..',
  '..1111..1111..1212..',
  '....................',
  '....................',
  '..1111..1111..1111..',
  '..2121..2111..1121..',
  '..2121..2111..1121..',
  '..1211..1111..1211..',
  '..1211..1111..1211..',
  '..2121..1121..2111..',
  '..2121..1121..2111..',
  '..1111..1111..1111..',
  '....................',
]

const STAGE_4_MAP = [
  '.........2..........',
  '........23..........',
  '.......2332121212121',
  '........231212121212',
  '.........2..........',
  '.......2............',
  '......23............',
  '.....233212121212121',
  '......23121212121212',
  '.......2............',
  '.....2..............',
  '....23..............',
  '...23321212121212121',
  '....2312121212121212',
  '.....2..............',
  '...2................',
  '..23................',
  '.2332121212121212121',
  '..231212121212121212',
  '...2................',
]

const STAGE_5_MAP = [
  '........3111........',
  '.......311111.......',
  '......31111111......',
  '......31111111......',
  '.....3111111111.....',
  '.....3111111111.....',
  '.....3111221111.....',
  '....311112211111....',
  '....311122221111....',
  '....311122221111....',
  '....311122221111....',
  '....311122221111....',
  '....311112211111....',
  '.....3111221111.....',
  '.....3111111111.....',
  '.....3111111111.....',
  '......31111111......',
  '......31111111......',
  '.......311111.......',
  '........3111........',
]

const STAGE_6_MAP = [
  '....................',
  '................1...',
  '..1............1#1..',
  '.1#1............1...',
  '..1..............2..',
  '.2......1........2..',
  '.2.....1#1.......2..',
  '.2......1......3.2..',
  '.2.3...2.......332..',
  '.233...2.3......32..',
  '.23....233....1..2.3',
  '.2.....23....1#1.233',
  '32..1..2......1..23.',
  '32.1#1.2..1....2.2..',
  '.2..1..2.1#1.3.2.2..',
  '.2...2.2..1..332.2..',
  '.2.3.2.2...2..32.2..',
  '.2.332.2..32...2.2..',
  '.2..32.2...2...2.2..',
  '11111111111111111111',
]

/* 20x20 */
export const STAGE_MAPS = [
  EDITING_MAP, // FIXME: remove this
  STAGE_1_MAP,
  STAGE_2_MAP,
  STAGE_3_MAP,
  STAGE_4_MAP,
  STAGE_5_MAP,
  STAGE_6_MAP,
]

STAGE_MAPS.forEach((map, i) => {
  console.log(map.join('').split('').reduce((acc, cur) => { return isNaN(parseInt(cur)) ? acc : acc + parseInt(cur) }, 0))
})
