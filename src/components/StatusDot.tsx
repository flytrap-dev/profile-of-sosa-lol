import { IconArrow } from '@/components/Icons'

export function StatusDot({ label }: { label: string }) {
  return (
    <span className="glass-pill text-[13px] font-medium tracking-[-0.01em] text-fg">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-fg/90 text-bg">
        <IconArrow size={11} />
      </span>
      {label}
      <IconArrow size={12} />
    </span>
  )
}
