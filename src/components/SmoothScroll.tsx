import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'
import 'lenis/dist/lenis.css'

const options = {
  lerp: 0.075,
  smoothWheel: true,
  wheelMultiplier: 0.88,
  autoRaf: true,
  anchors: { offset: -80, lerp: 0.09 },
  stopInertiaOnNavigate: true,
  respectReducedMotion: true,
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  )
}
