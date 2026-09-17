type SectionHeaderProps = {
  index?: string
  label: string
  title?: string
  className?: string
}

export function SectionHeader({ label, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      <p className="kicker">{label}</p>
      {title ? (
        <h2 className="mt-3 max-w-[18ch] text-[30px] font-semibold tracking-[-0.045em] text-fg md:text-[38px]">
          {title}
        </h2>
      ) : null}
    </div>
  )
}
