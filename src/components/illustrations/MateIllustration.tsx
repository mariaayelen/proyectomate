import { Art, Halo, INK, pen } from './artUtils'

/** Vapor delicado del mate (se anima con CSS) */
export function Steam({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 40" className={className} aria-hidden="true">
      <path
        d="M22 36 C 14 26, 30 22, 22 10 M22 36 C 30 28, 18 20, 26 8"
        stroke="#c9b98f"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        className="steam-wisp"
      />
      <path
        d="M52 36 C 44 26, 60 22, 52 10 M52 36 C 60 28, 48 20, 56 8"
        stroke="#c9b98f"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        className="steam-wisp steam-wisp--late"
      />
    </svg>
  )
}

/** Mate pequeño (ícono) */
export function MiniMate({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <Halo color="#b8c996" />
      {/* Cuerpo del mate */}
      <path d="M28 30 C 28 58, 32 78, 46 82 C 60 86, 66 62, 66 32" {...pen} fill="#a06a3b" />
      <path d="M28 30 C 28 56, 31 72, 46 78 C 58 83, 65 62, 66 32 Z" fill="#86562f" />
      {/* Aro de boca */}
      <ellipse cx="47" cy="30" rx="19" ry="6.5" {...pen} fill="#7c4a24" />
      {/* Yerba */}
      <ellipse cx="47" cy="31" rx="15" ry="4.6" fill="#3f5c28" stroke={INK} strokeWidth="2" />
      <path d="M34 30 Q 40 26 46 30 Q 52 34 60 30" stroke="#24381a" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Bombilla */}
      <path d="M58 28 L 66 14" stroke="#c9b98f" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <ellipse cx="67" cy="13.5" rx="4" ry="2.4" transform="rotate(28 67 13.5)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.4" />
      <path d="M57 26 L 53 18" stroke="#c9b98f" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Hojita */}
      <ellipse cx="74" cy="40" rx="6" ry="11" transform="rotate(-28 74 40)" {...pen} fill="#b8c996" strokeWidth="2" />
    </Art>
  )
}

/** Mate mediano con vapor (bienvenida / agradecimiento) */
export function MateWithSteam({
  className,
  size,
}: {
  className?: string
  size?: number | string
}) {
  return (
    <Art className={className} size={size} label="Ilustración de un mate con vapor">
      <Halo color="#c8d6a4" />
      <path d="M24 32 C 24 60, 28 80, 44 84 C 60 88, 68 64, 68 32" {...pen} fill="#a06a3b" />
      <path d="M24 32 C 24 58, 28 74, 44 80 C 58 85, 66 64, 68 32 Z" fill="#86562f" />
      <ellipse cx="46" cy="32" rx="22" ry="7.5" {...pen} fill="#7c4a24" />
      <ellipse cx="46" cy="33" rx="17" ry="5.2" fill="#3f5c28" stroke={INK} strokeWidth="2" />
      <path d="M31 32 Q 38 27 46 32 Q 54 37 61 32" stroke="#24381a" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M59 30 L 68 13" stroke="#c9b98f" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="69.5" cy="12" rx="4.6" ry="2.8" transform="rotate(28 69.5 12)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.5" />
      <Steam className="steam" />
      <ellipse cx="80" cy="48" rx="7" ry="13" transform="rotate(-30 80 48)" {...pen} fill="#b8c996" strokeWidth="2" />
      <ellipse cx="10" cy="46" rx="7" ry="13" transform="rotate(24 10 46)" {...pen} fill="#c8d6a4" strokeWidth="2" />
    </Art>
  )
}

/** Termo */
export function ThermosIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <Halo color="#80bdd5" opacity={0.3} />
      <rect x="30" y="22" width="36" height="58" rx="12" {...pen} fill="#c55e42" />
      <rect x="30" y="26" width="36" height="54" rx="10" {...pen} fill="#c55e42" />
      <rect x="33" y="30" width="30" height="20" fill="#e8a06b" opacity="0.35" />
      <path d="M40 22 L 40 16 L 56 16 L 56 22" {...pen} fill="none" />
      <circle cx="48" cy="10" r="4.5" {...pen} fill="#d8c9a3" />
      <path d="M32 48 L 64 48 M32 62 L 64 62" stroke="#a3452e" strokeWidth="2.4" strokeLinecap="round" />
    </Art>
  )
}

/** Bombilla */
export function BombillaIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <Halo color="#edc75c" opacity={0.4} />
      <ellipse cx="34" cy="70" rx="16" ry="12" {...pen} fill="#3f5c28" />
      <path d="M34 70 L 58 34" stroke="#c9b98f" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M56 36 C 60 34, 66 34, 70 40" stroke="#c9b98f" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="72" cy="42" rx="6" ry="3.4" transform="rotate(32 72 42)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.5" />
      <path d="M46 52 L 40 46 M52 44 L 46 38" stroke="#8f7f5a" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      <path d="M32 68 Q 26 62 30 56 M38 72 Q 44 74 44 68" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.5" />
    </Art>
  )
}
