import { v4 as uuidv4 } from 'uuid'

export function toRect (x, y, width, height) {
  return {
    left: x,
    top: y,
    right: x + width,
    bottom: y + height,
  }
}

export function pointToRectDistance (point, rect) {
  const dx = Math.max(rect.left - point.x, 0, point.x - rect.right)
  const dy = Math.max(rect.top - point.y, 0, point.y - rect.bottom)
  return Math.sqrt(dx * dx + dy * dy)
}

/**
  計算圓心到矩形最近點的距離。

  Args:
    x: 圓心x坐標。
    y: 圓心y坐標。
    rx: 矩形左上角x坐標。
    ry: 矩形左上角y坐標。
    width: 矩形寬度。
    height: 矩形高度。

  Returns:
    圓心到矩形最近點的距離。
*/
function distanceToRectangle ({ x, y, rx, ry, width, height }) {
  // 計算圓心到矩形四個頂點的距離。

  const d1 = Math.abs(x - rx)
  const d2 = Math.abs(y - ry)
  const d3 = Math.abs(x - rx - width)
  const d4 = Math.abs(y - ry - height)

  // 找到最近點的距離。

  const d = Math.min(d1, d2, d3, d4)

  return d
}

/**
  計算圓與矩形碰撞所需的時間。

  Args:
    x: 圓心x坐標。
    y: 圓心y坐標。
    vx: 圓的x方向速度。
    vy: 圓的y方向速度。
    rx: 矩形左上角x坐標。
    ry: 矩形左上角y坐標。
    width: 矩形寬度。
    height: 矩形高度。
    radius: 圓的半徑。

  Returns:
    圓與矩形碰撞所需的時間，如果兩者不碰撞，則返回-1。
*/
export function timeToCollision ({ x, y, vx, vy, rx, ry, width, height, radius }) {
  // 判斷圓形是否與矩形重疊。

  const d = distanceToRectangle({ x, y, rx, ry, width, height })
  if (d >= radius) { return -1 }

  // 計算圓心與矩形最近點的連線與圓心速度的夾角。

  // const theta = Math.acos((d *d - radius *radius - (vx *vx + vy *vy) / 2 * d) / (vx *vx))

  // 計算圓心到矩形最近點的距離除以圓的速度。

  const t = d / Math.sqrt(vx * vx + vy * vy)

  return t
}

/**
  計算碰撞的是矩形的水平面還是垂直面。

  Args:
    x: 圓心x坐標。
    y: 圓心y坐標。
    vx: 圓的x方向速度。
    vy: 圓的y方向速度。
    rx: 矩形左上角x坐標。
    ry: 矩形左上角y坐標。
    width: 矩形寬度。
    height: 矩形高度。
    radius: 圓的半徑。

  Returns:
    碰撞的是矩形的水平面還是垂直面，'horizontal'表示水平面，'vertical'表示垂直面。
*/
export function collisionSurface ({ x, y, vx, vy, rx, ry, width, height, radius }) {
  // 判斷圓形是否與矩形重疊。

  const d = distanceToRectangle(x, y, rx, ry, width, height)
  if (d >= radius) {
    return -1
  }

  // 計算圓心與矩形最近點的連線與圓心速度的夾角。

  const theta = Math.acos((d ** 2 - radius ** 2 - (vx ** 2 + vy ** 2) / 2 * d) / (vx ** 2))
  const t = timeToCollision({ x, y, vx, vy, rx, ry, width, height, radius })

  // 計算圓心到矩形最近點的x分量。

  const dx = x - rx + (vx * t) * Math.cos(theta)

  // 計算圓心到矩形最近點的y分量。

  // const dy = y - ry + (vy * t) * Math.sin(theta)

  // 如果圓心到矩形最近點的x分量在矩形的寬度範圍內，則碰撞的是水平面。

  if (Math.abs(dx) <= width / 2) {
    return 'horizontal'
  } else {
    return 'vertical'
  }
}

export function formatData (data) {
  return data.map((record) => ({
    id: (`${record.id}` || uuidv4()).slice(0, 36),
    name: `${record.name}`.slice(0, 10),
    score: parseInt(record.score),
  }))
}
