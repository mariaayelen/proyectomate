import type { ReactNode, SVGProps } from 'react'

/** Tinta de las ilustraciones (verde oscuro) */
export const INK = '#24451e'

/** Props de trazo "mano alzada" */
export const pen: Pick<
  SVGProps<SVGElement>,
  'stroke' | 'strokeWidth' | 'strokeLinecap' | 'strokeLinejoin' | 'fill'
> = {
  stroke: INK,
  strokeWidth: 2.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
}

/** Envoltura común para las ilustraciones en tinta */
export function Art({
  children,
  size,
  className,
  label,
}: {
  children: ReactNode
  size?: number | string
  className?: string
  label?: string
}) {
  return (
    <svg
      viewBox="0 0 96 96"
      width={size ?? '100%'}
      height={size ?? '100%'}
      className={className}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      focusable="false"
    >
      {children}
    </svg>
  )
}

/** Halo suave de acuarela detrás de cada ilustración */
export function Halo({ color = '#b8c996', opacity = 0.35 }: { color?: string; opacity?: number }) {
  return (
    <ellipse
      cx="48"
      cy="50"
      rx="40"
      ry="36"
      fill={color}
      opacity={opacity}
      transform="rotate(-6 48 50)"
    />
  )
}
