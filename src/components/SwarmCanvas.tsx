import { useEffect, useRef } from 'react'

// Boids flocking simulation - a nod to multi-robot coordination research.
// Pure canvas, no libraries. Agents flock, link to neighbours, and gently
// avoid the pointer.

type Agent = {
  x: number
  y: number
  vx: number
  vy: number
}

const LINK_DIST = 90
const NEIGHBOUR_DIST = 70
const MAX_SPEED = 0.9
const MOUSE_RADIUS = 140

export function SwarmCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let agents: Agent[] = []
    const mouse = { x: -9999, y: -9999 }
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      if (!canvas) return
      const { clientWidth, clientHeight } = canvas
      canvas.width = clientWidth * dpr
      canvas.height = clientHeight * dpr
      const count = clientWidth < 640 ? 36 : 64
      if (agents.length !== count) {
        agents = Array.from({ length: count }, () => ({
          x: Math.random() * clientWidth,
          y: Math.random() * clientHeight,
          vx: (Math.random() - 0.5) * MAX_SPEED,
          vy: (Math.random() - 0.5) * MAX_SPEED,
        }))
      }
    }

    function step() {
      if (!canvas || !ctx) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight

      for (const a of agents) {
        let cx = 0, cy = 0, ax = 0, ay = 0, sx = 0, sy = 0, n = 0
        for (const b of agents) {
          if (a === b) continue
          const dx = b.x - a.x
          const dy = b.y - a.y
          const d2 = dx * dx + dy * dy
          if (d2 < NEIGHBOUR_DIST * NEIGHBOUR_DIST) {
            cx += b.x; cy += b.y
            ax += b.vx; ay += b.vy
            n++
            if (d2 < 28 * 28 && d2 > 0) {
              sx -= dx / d2
              sy -= dy / d2
            }
          }
        }
        if (n > 0) {
          a.vx += ((cx / n - a.x) * 0.0008) + ((ax / n - a.vx) * 0.04) + sx * 6
          a.vy += ((cy / n - a.y) * 0.0008) + ((ay / n - a.vy) * 0.04) + sy * 6
        }
        // pointer avoidance
        const mdx = a.x - mouse.x
        const mdy = a.y - mouse.y
        const md2 = mdx * mdx + mdy * mdy
        if (md2 < MOUSE_RADIUS * MOUSE_RADIUS && md2 > 1) {
          const md = Math.sqrt(md2)
          a.vx += (mdx / md) * 0.12
          a.vy += (mdy / md) * 0.12
        }
        // speed clamp
        const sp = Math.hypot(a.vx, a.vy)
        if (sp > MAX_SPEED) {
          a.vx = (a.vx / sp) * MAX_SPEED
          a.vy = (a.vy / sp) * MAX_SPEED
        } else if (sp < 0.2) {
          a.vx += (Math.random() - 0.5) * 0.05
          a.vy += (Math.random() - 0.5) * 0.05
        }
        a.x += a.vx
        a.y += a.vy
        // wrap edges
        if (a.x < -10) a.x = w + 10
        if (a.x > w + 10) a.x = -10
        if (a.y < -10) a.y = h + 10
        if (a.y > h + 10) a.y = -10
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      // links
      for (let i = 0; i < agents.length; i++) {
        for (let j = i + 1; j < agents.length; j++) {
          const dx = agents[i].x - agents[j].x
          const dy = agents[i].y - agents[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_DIST * LINK_DIST) {
            const t = 1 - Math.sqrt(d2) / LINK_DIST
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.10 * t})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(agents[i].x, agents[i].y)
            ctx.lineTo(agents[j].x, agents[j].y)
            ctx.stroke()
          }
        }
      }

      // agents, oriented to velocity
      for (const a of agents) {
        const ang = Math.atan2(a.vy, a.vx)
        ctx.save()
        ctx.translate(a.x, a.y)
        ctx.rotate(ang)
        ctx.fillStyle = 'rgba(0, 217, 255, 0.55)'
        ctx.beginPath()
        ctx.moveTo(4.5, 0)
        ctx.lineTo(-3, 2.6)
        ctx.lineTo(-3, -2.6)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }

      raf = requestAnimationFrame(step)
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)

    if (reduced) {
      // one static frame, no motion
      step()
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(step)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  )
}
