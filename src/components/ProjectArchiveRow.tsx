import type { ArchiveProject } from '@/data/site'

export function ProjectArchiveRow({ project }: { project: ArchiveProject }) {
  const body = (
    <>
      {project.status ? (
        <p className="text-[13px] text-faint">{project.status}</p>
      ) : null}
      <h3 className="mt-2 text-[16px] font-semibold tracking-[-0.02em] text-fg">{project.name}</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{project.description}</p>
      <p className="mt-4 text-[12px] text-faint">
        {project.year} · {project.technology}
      </p>
    </>
  )

  const classes =
    'block min-h-[160px] border-t border-border py-6 transition-colors duration-200 md:border-t-0 md:px-6 md:py-2 hover:text-fg'

  if (project.href) {
    return (
      <a href={project.href} className={classes} target="_blank" rel="noreferrer">
        {body}
      </a>
    )
  }

  return <div className={classes}>{body}</div>
}
