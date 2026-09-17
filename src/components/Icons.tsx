type IconProps = {
  size?: number
}

export function IconMenu({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 5.25h12M3 9h12M3 12.75h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function IconArrow({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconCopy({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="5.2" y="5.2" width="7.3" height="7.3" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.6 10.4V3.6h6.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function IconCheck({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.2 8.2 6.4 11.3 12.8 4.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconSun({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 1.5v1.25M8 13.25V14.5M1.5 8h1.25M13.25 8H14.5M3.22 3.22l.88.88M11.9 11.9l.88.88M3.22 12.78l.88-.88M11.9 4.1l.88-.88"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconMoon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13.2 9.35A5.25 5.25 0 0 1 6.65 2.8 5.5 5.5 0 1 0 13.2 9.35Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Official Discord Clyde mark */
export function IconDiscord({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.36-.76-.54-1.09a.1.1 0 0 0-.07-.03c-1.5.26-2.94.71-4.27 1.33a.09.09 0 0 0-.04.04C2.43 9.05 1.68 12.67 2.05 16.24a.1.1 0 0 0 .04.07 19.3 19.3 0 0 0 5.82 2.95.1.1 0 0 0 .11-.04c.45-.61.85-1.26 1.19-1.94a.1.1 0 0 0-.05-.13 12.7 12.7 0 0 1-1.81-.87.1.1 0 0 1-.01-.16c.12-.09.24-.19.36-.28a.1.1 0 0 1 .1-.01c3.81 1.74 7.93 1.74 11.69 0a.1.1 0 0 1 .1.01c.12.1.24.19.36.28a.1.1 0 0 1-.01.16c-.58.34-1.18.63-1.81.87a.1.1 0 0 0-.05.13c.35.68.75 1.33 1.19 1.94a.1.1 0 0 0 .11.04 19.25 19.25 0 0 0 5.83-2.95.1.1 0 0 0 .04-.07c.44-4.12-.73-7.71-3.1-10.87a.08.08 0 0 0-.03-.04ZM8.52 14.52c-1.15 0-2.09-1.05-2.09-2.35 0-1.3.93-2.36 2.09-2.36 1.17 0 2.1 1.06 2.09 2.36 0 1.3-.93 2.35-2.09 2.35Zm6.97 0c-1.15 0-2.09-1.05-2.09-2.35 0-1.3.93-2.36 2.09-2.36 1.17 0 2.1 1.06 2.09 2.36 0 1.3-.92 2.35-2.09 2.35Z" />
    </svg>
  )
}
