import { site } from '@/data/site'

export function Avatar({
  size,
  className = '',
}: {
  size?: number
  className?: string
}) {
  return (
    <img
      src={site.avatar}
      alt={site.name}
      width={size ?? 40}
      height={size ?? 40}
      className={`block object-cover ${className}`}
      style={size ? { width: size, height: size } : undefined}
    />
  )
}
