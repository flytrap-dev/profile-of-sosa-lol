import { useEffect, useRef } from 'react'

export function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const root = rootRef.current
    if (!root) return

    document.documentElement.classList.add('has-cursor')
    root.style.opacity = '0'

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x
    let cy = y
    let frame = 0
    let seen = false

    const onMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      if (!seen) {
        seen = true
        cx = x
        cy = y
        root.style.opacity = '1'
      }
    }

    const tick = () => {
      cx += (x - cx) * 0.22
      cy += (y - cy) * 0.22
      root.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      frame = window.requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    frame = window.requestAnimationFrame(tick)

    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('pointermove', onMove)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={rootRef} className="cursor-root" aria-hidden="true">
      <span className="cursor-ring" />
      <span className="cursor-core" />
    </div>
  )
}
