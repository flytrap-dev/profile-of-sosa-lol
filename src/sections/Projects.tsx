import { Container } from '@/components/Container'
import { ProjectArchiveRow } from '@/components/ProjectArchiveRow'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { site } from '@/data/site'

export function Projects() {
  if (!site.archive.length) return null

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeader label="Projects" title="Also in the archive." />
        </Reveal>
        <Reveal>
          <div className="grid border-t border-border md:grid-cols-2 md:divide-x md:divide-border">
            {site.archive.map((project) => (
              <ProjectArchiveRow key={project.number} project={project} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
