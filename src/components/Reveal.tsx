import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3
  as?: 'div' | 'li'
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const reduce =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(reduce)

  useEffect(() => {
    const node = ref.current
    if (!node || reduce) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -12% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduce])

  const delayClass =
    delay === 1
      ? 'reveal-delay-1'
      : delay === 2
        ? 'reveal-delay-2'
        : delay === 3
          ? 'reveal-delay-3'
          : ''

  return (
    <Tag
      ref={ref as never}
      className={`${visible ? `reveal ${delayClass}` : 'opacity-0'} ${className}`}
    >
      {children}
    </Tag>
  )
}
