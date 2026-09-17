import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { site } from '@/data/site'

export function Experience() {
  if (!site.experience.length) return null

  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeader label="Experience" title="Experience" />
        </Reveal>
        <ol className="border-t border-border">
          {site.experience.map((item, index) => (
            <Reveal
              as="li"
              key={`${item.organization}-${item.period}`}
              delay={(index % 3) as 0 | 1 | 2 | 3}
              className="grid gap-2 border-b border-border py-7 md:grid-cols-12 md:gap-8"
            >
              <p className="text-[12px] text-faint md:col-span-3">{item.period}</p>
              <div className="md:col-span-9">
                <h3 className="text-[16px] font-medium tracking-[-0.02em] text-fg">
                  {item.role}
                  <span className="text-muted"> · {item.organization}</span>
                </h3>
                <p className="mt-2 max-w-[58ch] text-[14.5px] leading-relaxed text-muted">
                  {item.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
