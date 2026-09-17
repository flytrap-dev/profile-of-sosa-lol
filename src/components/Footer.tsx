import { Clock } from '@/components/Clock'
import { IconDiscord } from '@/components/Icons'
import { Reveal } from '@/components/Reveal'
import { site } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-1 border-t border-border">
      <Reveal>
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 sm:px-6 md:grid-cols-12 md:items-end md:px-8">
          <div className="md:col-span-6">
            <p className="text-[15px] font-semibold tracking-[-0.03em] text-fg">{site.name}</p>
            <p className="mt-1 text-[13px] text-faint">{site.slogan}</p>
            <p className="mt-3 text-[13px] text-faint">
              {site.role} · © {year}
            </p>
          </div>
          <div className="flex flex-col gap-1.5 text-[13px] text-faint md:col-span-3">
            <span>Local</span>
            <Clock className="text-[14px] text-fg" />
          </div>
          <a
            href={site.discord.profile}
            className="glass-pill min-h-11 text-[14px] font-medium text-muted transition-colors hover:text-fg md:col-span-3 md:justify-self-end"
          >
            <IconDiscord size={16} />
            @{site.discord.tag}
          </a>
        </div>
      </Reveal>
    </footer>
  )
}
