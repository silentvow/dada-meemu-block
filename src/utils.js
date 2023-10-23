import { point, segment } from '@flatten-js/core'
import { v4 as uuidv4 } from 'uuid'

export function toRect (x, y, width, height) {
  return {
    left: x,
    top: y,
    right: x + width,
    bottom: y + height,
  }
}

export function isSegmentRectangleIntersect ({ circle, rect }) {
  const { x, y, px, py, radius } = circle
  const { x: rx, y: ry, width: w, height: h } = rect

  const seg = segment(point(px, py), point(x, y))
  const [d1] = seg.distanceTo(segment(point(rx, ry), point(rx + w, ry)))
  const [d2] = seg.distanceTo(segment(point(rx, ry), point(rx, ry + h)))
  const [d3] = seg.distanceTo(segment(point(rx + w, ry), point(rx + w, ry + h)))
  const [d4] = seg.distanceTo(segment(point(rx, ry + h), point(rx + w, ry + h)))

  return Math.min(d1, d2, d3, d4) <= radius
}

export function calculateCollision ({ circle: { x, y, vx, vy, radius }, rect: { x: rx, y: ry, width, height } }) {
  const center = point(x, y)
  const [d1] = center.distanceTo(segment(point(rx, ry), point(rx + width, ry)))
  const [d2] = center.distanceTo(segment(point(rx, ry), point(rx, ry + height)))
  const [d3] = center.distanceTo(segment(point(rx + width, ry), point(rx + width, ry + height)))
  const [d4] = center.distanceTo(segment(point(rx, ry + height), point(rx + width, ry + height)))
  const dh = Math.min(d1, d4)
  const dv = Math.min(d2, d3)
  const dMin = Math.min(dh, dv)

  if (dMin <= radius) {
    if (vy > 0 && y <= ry + height * 0.5) {
      return { time: 0, surface: 'horizontal' }
    }
    if (vy < 0 && y >= ry + height * 0.5) {
      return { time: 0, surface: 'horizontal' }
    }
    if (vx > 0 && x <= rx + width * 0.5) {
      return { time: 0, surface: 'vertical' }
    }
    if (vx < 0 && x >= rx + width * 0.5) {
      return { time: 0, surface: 'vertical' }
    }
    if (dh <= dv) {
      return { time: 0, surface: 'horizontal' }
    }
    if (dv <= dh) {
      return { time: 0, surface: 'vertical' }
    }
  }

  let th = Infinity; let tv = Infinity
  // Calculate time to hit rect top
  if (vy > 0 && y <= ry) {
    const t = (ry - y - radius) / vy
    const xHit = x + vx * t
    if (xHit >= rx && xHit <= rx + width) {
      th = t
    }
  }
  // Calculate time to hit rect bottom
  if (vy < 0 && y >= ry + height) {
    const t = (ry + height - y + radius) / vy
    const xHit = x + vx * t
    if (xHit >= rx && xHit <= rx + width) {
      th = t
    }
  }
  // Calculate time to hit rect left
  if (vx > 0 && x <= rx) {
    const t = (rx - x - radius) / vx
    const yHit = y + vy * t
    if (yHit >= ry && yHit <= ry + height) {
      tv = t
    }
  }
  // Calculate time to hit rect right
  if (vx < 0 && x >= rx + width) {
    const t = (rx + width - x + radius) / vx
    const yHit = y + vy * t
    if (yHit >= ry && yHit <= ry + height) {
      tv = t
    }
  }

  if (th <= tv) {
    return { time: th, surface: 'horizontal' }
  }
  return { time: tv, surface: 'vertical' }
}

export function formatData (data) {
  return data.map((record) => ({
    id: (`${record.id}` || uuidv4()).slice(0, 36),
    name: `${record.name}`.slice(0, 10),
    score: parseInt(record.score),
  }))
}
