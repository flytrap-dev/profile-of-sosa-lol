import { Container } from '@/components/Container'
import { ProjectFeature } from '@/components/ProjectFeature'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { site } from '@/data/site'

export function SelectedWork() {
  const [lead, ...rest] = site.featured

  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeader index="01" label="Work" title="What I can put on a page." />
        </Reveal>
        <Reveal>
          <nav className="mb-8 flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-medium tracking-[-0.02em] text-muted" aria-label="Work index">
            {site.featured.map((project) => (
              <a key={project.number} href={`#work-${project.number}`} className="transition-colors hover:text-fg">
                {project.name}
              </a>
            ))}
          </nav>
        </Reveal>
        {lead ? (
          <Reveal>
            <ProjectFeature project={lead} featured />
          </Reveal>
        ) : null}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((project, index) => {
            const lastOdd = rest.length % 2 === 1 && index === rest.length - 1
            return (
              <Reveal key={project.number} delay={(index % 3) as 0 | 1 | 2 | 3} className={lastOdd ? 'md:col-span-2' : ''}>
                <ProjectFeature project={project} featured={lastOdd} />
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
