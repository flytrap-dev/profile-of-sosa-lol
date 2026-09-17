import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { site } from '@/data/site'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeader index="02" label="How I work" title="A few things I keep doing." />
        </Reveal>
        <div className="border-t border-border">
          {site.habits.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2 | 3}>
              <article className="grid gap-3 border-b border-border py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <p className="text-[13px] font-medium text-faint md:col-span-2">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="md:col-span-10 lg:col-span-9">
                  <p className="kicker">{item.kicker}</p>
                  <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.035em] text-fg md:text-[26px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.stack.map((group, index) => (
            <Reveal key={group.label} delay={(index % 3) as 0 | 1 | 2 | 3}>
              <div className="glow-panel rounded-[20px] px-5 py-6">
                <p className="kicker">{group.label}</p>
                <p className="mt-3 text-[15px] font-medium text-fg">{group.items.join(', ')}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
