import { ProjectVisual } from '@/components/ProjectVisual'
import type { FeaturedProject } from '@/data/site'

export function ProjectFeature({
  project,
  featured = false,
}: {
  project: FeaturedProject
  featured?: boolean
}) {
  return (
    <article
      id={`work-${project.number}`}
      className={`glow-panel group overflow-hidden rounded-[24px] transition-[transform,box-shadow] duration-300 ease-[var(--ease-out)] hover:-translate-y-0.5 ${
        featured ? 'md:grid md:grid-cols-2' : ''
      }`}
    >
      <div className={`relative ${featured ? 'min-h-[260px] md:min-h-[360px]' : 'min-h-[220px]'}`}>
        <ProjectVisual kind={project.visual} />
      </div>
      <div className="flex flex-col justify-end border-t border-white/8 p-6 md:border-t-0 md:border-l md:p-8">
        <p className="text-[13px] font-medium tracking-[-0.01em] text-faint">
          {project.year} · {project.type}
        </p>
        <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.035em] text-fg md:text-[26px]">
          {project.name}
        </h3>
        <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{project.description}</p>
        <p className="mt-5 text-[13px] text-faint">
          {project.technologies.join(' · ')}
        </p>
      </div>
    </article>
  )
}
