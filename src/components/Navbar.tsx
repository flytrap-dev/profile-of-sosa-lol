import { useLenis } from 'lenis/react'
import { useEffect, useId, useRef, useState } from 'react'
import { Avatar } from '@/components/Avatar'
import { IconClose, IconMenu } from '@/components/Icons'
import { ThemeToggle } from '@/components/ThemeToggle'
import { navItems, site } from '@/data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const panelId = useId()
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const lenis = useLenis()

  useEffect(() => {
    const ids = ['top', 'work', 'skills', 'about', 'contact']
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id === 'top') setActive('')
        else if (visible?.target.id) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.2, 0.6] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!lenis) return
    if (open) lenis.stop()
    else lenis.start()
  }, [open, lenis])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`nav-island pointer-events-auto mx-auto w-full max-w-[860px] ${open ? 'is-open' : ''}`}
      >
        <div className="flex h-14 items-center gap-2 px-2 sm:px-2.5">
          <a href="#top" className="flex min-h-11 shrink-0 items-center gap-2.5 px-1.5">
            <Avatar size={28} className="rounded-full" />
            <span className="text-[15px] font-semibold tracking-[-0.03em] text-fg">{site.name}</span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[14px] font-medium tracking-[-0.02em] transition-colors duration-200 ${
                  active === item.href ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn-satin btn-satin-fill hidden min-h-9 items-center px-4 text-[13px] font-medium md:inline-flex"
            >
              Contact
            </a>
            <button
              type="button"
              className="icon-btn inline-flex h-9 w-9 cursor-pointer items-center justify-center text-fg md:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <IconClose /> : <IconMenu />}
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>

        {open ? (
          <div id={panelId} className="px-3 pb-4 md:hidden">
            <nav className="flex flex-col" aria-label="Mobile">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className="flex min-h-12 items-center text-[16px] font-medium tracking-[-0.02em] text-fg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-satin btn-satin-fill mt-2 inline-flex min-h-11 items-center justify-center text-[14px] font-medium"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}
