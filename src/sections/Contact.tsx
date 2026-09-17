import { useState } from 'react'
import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { IconCopy, IconDiscord, IconCheck } from '@/components/Icons'
import { Reveal } from '@/components/Reveal'
import { site } from '@/data/site'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyTag() {
    try {
      await navigator.clipboard.writeText(site.discord.tag)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid items-end gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="kicker">Contact</p>
              <h2 className="mt-4 max-w-[16ch] text-[40px] font-semibold tracking-[-0.05em] text-fg md:text-[52px]">
                {site.contact.headline}
              </h2>
              <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-muted">{site.contact.note}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={site.discord.profile} external>
                  <IconDiscord size={16} />
                  Open Discord
                </Button>
                <Button variant="secondary" onClick={copyTag}>
                  {copied ? <IconCheck /> : <IconCopy />}
                  {copied ? 'Copied' : `Copy @${site.discord.tag}`}
                </Button>
              </div>
            </div>
            <div className="glow-panel flex items-center gap-4 rounded-[20px] px-4 py-3 md:col-span-4 md:justify-end">
              <Avatar size={56} className="rounded-full" />
              <div>
                <p className="text-[16px] font-semibold tracking-[-0.02em] text-fg">{site.discord.displayName}</p>
                <p className="text-[13px] text-muted">@{site.discord.tag}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
