import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type Shared = {
  variant?: Variant
  className?: string
  children?: ReactNode
}

type ButtonAsButton = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
    external?: never
  }

type ButtonAsLink = Shared & {
  href: string
  external?: boolean
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<Variant, string> = {
  primary: 'btn-satin btn-satin-fill',
  secondary: 'btn-satin btn-satin-glass',
  ghost: 'text-muted hover:text-fg',
}

const base =
  'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 px-5 text-[13px] font-medium tracking-[0.01em] transition-[color,background-color,border-color,filter,transform] duration-200 ease-[var(--ease-out)] hover:-translate-y-px active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50'

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if ('href' in props && props.href) {
    const { href, external, ...rest } = props
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : undefined)}
        {...rest}
      >
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

export function TextLink({
  href,
  children,
  external,
  className = '',
}: {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[14px] font-medium text-fg transition-opacity duration-200 hover:opacity-70 ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : undefined)}
    >
      {children}
      <span aria-hidden="true" className="translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  )
}
