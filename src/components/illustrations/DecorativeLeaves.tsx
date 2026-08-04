import { Art, INK, pen } from './artUtils'

/** Hoja simple dibujada a mano */
export function Leaf({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <path d="M14 84 C 34 74, 40 40, 84 16" {...pen} />
      <path d="M50 54 C 48 40, 50 28, 58 22" stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M60 49 C 68 42, 70 34, 70 28" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 56 C 30 52, 26 44, 26 38" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M70 24 L 62 16" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
    </Art>
  )
}

/** Corazón dibujado a mano */
export function Heart({
  className,
  size,
  color = '#d95b5b',
}: {
  className?: string
  size?: number | string
  color?: string
}) {
  return (
    <Art className={className} size={size}>
      <path
        d="M48 82 C 24 66, 14 46, 28 34 C 38 26, 48 34, 48 34 C 48 34, 58 26, 68 34 C 82 46, 72 66, 48 82 Z"
        fill={color}
        stroke={INK}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M48 36 C 44 42, 40 46, 36 50" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
    </Art>
  )
}

/** Ramita con hojas */
export function Twig({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <path d="M12 86 C 30 62, 58 42, 86 18" {...pen} />
      <ellipse cx="30" cy="70" rx="7" ry="13" transform="rotate(-32 30 70)" {...pen} fill="#b8c996" strokeWidth="2" />
      <ellipse cx="48" cy="56" rx="7" ry="13" transform="rotate(28 48 56)" {...pen} fill="#c8d6a4" strokeWidth="2" />
      <ellipse cx="66" cy="40" rx="6" ry="12" transform="rotate(-30 66 40)" {...pen} fill="#b8c996" strokeWidth="2" />
      <ellipse cx="80" cy="26" rx="6" ry="11" transform="rotate(25 80 26)" {...pen} fill="#c8d6a4" strokeWidth="2" />
    </Art>
  )
}

/** Ramita fina con hojitas pequeñas */
export function Sprig({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <path d="M16 84 C 40 64, 64 44, 84 20" {...pen} />
      {[
        [28, 72, -40],
        [42, 58, 35],
        [54, 46, -38],
        [66, 34, 30],
        [76, 24, -32],
      ].map(([x, y, r]) => (
        <ellipse
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          rx="5"
          ry="11"
          transform={`rotate(${r} ${x} ${y})`}
          {...pen} fill="#b8c996"
          strokeWidth="2"
        />
      ))}
    </Art>
  )
}

/** Separador orgánico con hojas y corazón */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
      <svg viewBox="0 0 120 20" width="140" height="20">
        <path d="M2 14 C 30 4, 60 18, 118 6" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="34" cy="8" rx="5" ry="9" transform="rotate(-30 34 8)" {...pen} fill="#b8c996" strokeWidth="2" />
        <ellipse cx="88" cy="10" rx="5" ry="9" transform="rotate(25 88 10)" {...pen} fill="#c8d6a4" strokeWidth="2" />
      </svg>
      <Heart size={26} color="#d95b5b" />
      <svg viewBox="0 0 120 20" width="140" height="20">
        <path d="M2 6 C 30 16, 60 2, 118 14" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="34" cy="12" rx="5" ry="9" transform="rotate(30 34 12)" {...pen} fill="#c8d6a4" strokeWidth="2" />
        <ellipse cx="88" cy="10" rx="5" ry="9" transform="rotate(-25 88 10)" {...pen} fill="#b8c996" strokeWidth="2" />
      </svg>
    </div>
  )
}

/** Hojas decorativas para las esquinas */
export function CornerLeaves({
  className,
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M8 150 C 50 120, 90 80, 150 14" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.55" />
      <ellipse cx="52" cy="122" rx="12" ry="24" transform="rotate(-45 52 122)" fill="#b8c996" stroke={INK} strokeWidth="3" opacity="0.55" />
      <ellipse cx="96" cy="80" rx="12" ry="24" transform="rotate(28 96 80)" fill="#c8d6a4" stroke={INK} strokeWidth="3" opacity="0.55" />
      <ellipse cx="128" cy="42" rx="11" ry="22" transform="rotate(-34 128 42)" fill="#b8c996" stroke={INK} strokeWidth="3" opacity="0.55" />
      <path d="M132 26 L 146 10 M132 26 L 146 34" stroke={INK} strokeWidth="3" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}
