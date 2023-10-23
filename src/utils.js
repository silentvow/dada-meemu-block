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

export function isSegmentRectangleIntersect ({ circle, rect }) {
  const { x, y, px, py, radius: roundedEndRadius } = circle
  const { x: rx, y: ry, width: w, height: h } = rect

  // Check if the start or end point of the segment is inside the rectangle
  if (
    (px >= rx && px <= rx + w && py >= ry && py <= ry + h) ||
    (x >= rx && x <= rx + w && y >= ry && y <= ry + h)
  ) {
    return true
  }

  // Calculate vectors for the segment
  const segmentVector = { x: x - px, y: y - py }
  const segmentLength = Math.sqrt(segmentVector.x ** 2 + segmentVector.y ** 2)
  const unitSegmentVector = {
    x: segmentVector.x / segmentLength,
    y: segmentVector.y / segmentLength,
  }

  // Check if the segment intersects with any of the rectangle's sides
  const rectRight = rx + w
  const rectBottom = ry + h

  const rectVertices = [
    { x: rx, y: ry },
    { x: rectRight, y: ry },
    { x: rectRight, y: rectBottom },
    { x: rx, y: rectBottom },
  ]

  for (let i = 0; i < 4; i++) {
    const rectPointA = rectVertices[i]
    const rectPointB = rectVertices[(i + 1) % 4]

    if (isSegmentIntersectingRectangleSide(
      px, py, unitSegmentVector, segmentLength, roundedEndRadius,
      rectPointA, rectPointB,
    )) {
      return true
    }
  }

  return false
}

function isSegmentIntersectingRectangleSide (
  px, py, unitSegmentVector, segmentLength, roundedEndRadius,
  rectPointA, rectPointB,
) {
  const v1 = { x: rectPointA.x - px, y: rectPointA.y - py }
  const v2 = { x: rectPointB.x - px, y: rectPointB.y - py }

  const dot1 = v1.x * unitSegmentVector.x + v1.y * unitSegmentVector.y
  const dot2 = v2.x * unitSegmentVector.x + v2.y * unitSegmentVector.y

  if (dot1 < 0 && dot2 < 0) {
    // Both points are behind the segment's start point
    return false
  }

  if (dot1 > segmentLength && dot2 > segmentLength) {
    // Both points are in front of the segment's end point
    return false
  }

  const cross1 = Math.abs(v1.x * unitSegmentVector.y - v1.y * unitSegmentVector.x)
  const cross2 = Math.abs(v2.x * unitSegmentVector.y - v2.y * unitSegmentVector.x)

  const distance1 = cross1 - roundedEndRadius
  const distance2 = cross2 - roundedEndRadius

  if (distance1 > 0 && distance2 > 0) {
    return false
  }

  return true
}

export function calculateIntersectTime ({ circle, line }) {
  const { x, y, vx, vy, radius } = circle
  const { x1: rx1, y1: ry1, x2: rx2, y2: ry2 } = line

  // 计算线段的方程参数
  const A = ry1 - ry2
  const B = rx2 - rx1
  const C = rx1 * ry2 - rx2 * ry1

  // 计算二次方程的系数
  const a = A * A + B * B
  const b = 2 * (A * B * (x * vx + y * vy) + C * (vx * A + vy * B))
  const c = (A * x + B * y + C) ** 2 - a * radius * radius

  // 计算判别式
  const discriminant = b * b - 4 * a * c

  if (discriminant < 0) {
    // 没有实根，圆与线段不相交
    return Infinity
  } else {
    // 计算 t 值
    const t1 = (-b + Math.sqrt(discriminant)) / (2 * a)
    const t2 = (-b - Math.sqrt(discriminant)) / (2 * a)

    // 返回较小的正数 t 值
    return Math.min(t1, t2)
  }
}

export function calculateCollision ({ circle, rect }) {
  const th1 = calculateIntersectTime({
    circle,
    line: {
      x1: rect.x,
      y1: rect.y,
      x2: rect.x + rect.width,
      y2: rect.y,
    },
  })
  const th2 = calculateIntersectTime({
    circle,
    line: {
      x1: rect.x,
      y1: rect.y + rect.height,
      x2: rect.x + rect.width,
      y2: rect.y + rect.height,
    },
  })
  const tv1 = calculateIntersectTime({
    circle,
    line: {
      x1: rect.x,
      y1: rect.y,
      x2: rect.x,
      y2: rect.y + rect.height,
    },
  })
  const tv2 = calculateIntersectTime({
    circle,
    line: {
      x1: rect.x + rect.width,
      y1: rect.y,
      x2: rect.x + rect.width,
      y2: rect.y + rect.height,
    },
  })
  const th = Math.min(th1, th2)
  const tv = Math.min(tv1, tv2)

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
