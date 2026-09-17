import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { site } from '@/data/site'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5">
            <SectionHeader index="03" label="About" title={site.about.title} className="mb-0" />
          </Reveal>
          <Reveal delay={1} className="md:col-span-7">
            <div className="space-y-5 text-[16.5px] leading-[1.7] text-muted">
              <p>{site.about.intro}</p>
              <p>{site.about.approach}</p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <dl className="mt-16 grid border-t border-border sm:grid-cols-3">
            <div className="border-b border-border py-6 sm:border-r sm:pr-8">
              <dt className="kicker">Now</dt>
              <dd className="mt-3 text-[16px] font-medium text-fg">{site.about.now}</dd>
            </div>
            <div className="border-b border-border py-6 sm:border-r sm:px-8">
              <dt className="kicker">C++</dt>
              <dd className="mt-3 text-[16px] font-medium text-fg">{site.about.tenure}</dd>
            </div>
            <div className="border-b border-border py-6 sm:pl-8">
              <dt className="kicker">Stack</dt>
              <dd className="mt-3 text-[16px] font-medium text-fg">{site.about.stackLine}</dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
