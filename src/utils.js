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

export function formatData (data) {
  return data.map((record) => ({
    id: (`${record.id}` || uuidv4()).slice(0, 36),
    name: `${record.name}`.slice(0, 10),
    score: parseInt(record.score),
  }))
}
