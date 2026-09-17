import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { IconArrow } from '@/components/Icons'
import { StatusDot } from '@/components/StatusDot'
import { site } from '@/data/site'

function HeroPortrait() {
  return (
    <figure className="relative mx-auto w-full max-w-[420px] md:mx-0 md:max-w-none">
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[48px] bg-[radial-gradient(ellipse_at_center,rgb(255_255_255/0.14),transparent_68%)]"
        aria-hidden="true"
      />
      <div className="glow-panel relative aspect-[4/5] overflow-hidden rounded-[28px]">
        <Avatar className="h-full w-full" />
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 12% -8%, rgb(255 255 255 / 0.16), transparent 58%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 pt-16 pb-4">
          <p className="text-[13px] font-medium tracking-[-0.02em] text-white">{site.name}</p>
          <p className="mt-0.5 text-[12px] text-white/70">C++ · WDK</p>
        </div>
      </div>
    </figure>
  )
}

export function Hero() {
  const marks = ['C++', 'WDK', 'Win32', 'CUDA', 'ONNX', 'DirectX 11', 'ImGui']

  return (
    <section id="top" className="pt-24">
      <Container className="grid items-end gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:py-24">
        <div>
          {site.available ? (
            <div className="reveal">
              <StatusDot label={site.availability} />
            </div>
          ) : null}
          <p className="reveal reveal-delay-1 mt-8 text-[13px] font-medium text-faint">
            {site.slogan}
          </p>
          <h1 className="reveal reveal-delay-1 mt-3 max-w-[16ch] text-[40px] leading-[1.04] font-semibold tracking-[-0.045em] text-fg sm:text-[52px] lg:text-[60px]">
            {site.hero.headline}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-[46ch] text-[16.5px] leading-[1.7] text-muted">
            {site.hero.description}
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Button href="#work">
              See the work
              <IconArrow />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-2">
            {marks.map((item) => (
              <span
                key={item}
                className="glass-pill px-3 py-1.5 text-[12px] font-medium tracking-[-0.01em] text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="reveal reveal-delay-2">
          <HeroPortrait />
        </div>
      </Container>
    </section>
  )
}
