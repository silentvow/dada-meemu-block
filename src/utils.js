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

export function calculateCollision ({ circle, rectangle }) {
  // Calculate relative velocity components
  const vx = circle.vx
  const vy = circle.vy
  const radius = circle.radius

  // Initialize collision times for x-axis and y-axis
  let tMinX, tMaxX, tMinY, tMaxY

  // Calculate the collision times along x-axis
  if (vx !== 0) {
    tMinX = (rectangle.x - (circle.x + radius)) / vx
    tMaxX = (rectangle.x + rectangle.width - (circle.x - radius)) / vx
  } else {
    // Circle is not moving horizontally, set extreme values for x-axis
    tMinX = Number.POSITIVE_INFINITY
    tMaxX = Number.POSITIVE_INFINITY
  }

  // Calculate the collision times along y-axis
  if (vy !== 0) {
    tMinY = (rectangle.y - (circle.y + radius)) / vy
    tMaxY = (rectangle.y + rectangle.height - (circle.y - radius)) / vy
  } else {
    // Circle is not moving vertically, set extreme values for y-axis
    tMinY = Number.POSITIVE_INFINITY
    tMaxY = Number.POSITIVE_INFINITY
  }

  // Find the earliest and latest collision times for both axes
  let tx = Number.POSITIVE_INFINITY
  if (tMinX > 0 && tMinX < tx &&
    (circle.y + radius + vy * tMinX >= rectangle.y) &&
    (circle.y - radius + vy * tMinX <= rectangle.y + rectangle.height)
  ) {
    tx = tMinX
  }
  if (tMaxX > 0 && tMaxX < tx &&
    (circle.y + radius + vy * tMaxX >= rectangle.y) &&
    (circle.y - radius + vy * tMaxX <= rectangle.y + rectangle.height)
  ) {
    tx = tMaxX
  }

  let ty = Number.POSITIVE_INFINITY
  if (tMinY >= 0 && tMinY < ty &&
    (circle.x + radius + vx * tMinY >= rectangle.x) &&
    (circle.x - radius + vx * tMinY <= rectangle.x + rectangle.width)
  ) {
    ty = tMinY
  }
  if (tMaxY >= 0 && tMaxY < ty &&
    (circle.x + radius + vx * tMaxY >= rectangle.x) &&
    (circle.x - radius + vx * tMaxY <= rectangle.x + rectangle.width)
  ) {
    ty = tMaxY
  }

  // Check if there's a valid collision within the time interval
  const time = Math.min(tx, ty)
  if (!isFinite(time) || time > 1) {
    // No collision within the time interval
    return { time: null, surface: null }
  }

  // Determine the collision surface (horizontal or vertical)
  let surface
  if (tx < ty) {
    surface = 'vertical'
  } else {
    surface = 'horizontal'
  }

  return { time, surface }
}

export function formatData (data) {
  return data.map((record) => ({
    id: (`${record.id}` || uuidv4()).slice(0, 36),
    name: `${record.name}`.slice(0, 10),
    score: parseInt(record.score),
  }))
}
