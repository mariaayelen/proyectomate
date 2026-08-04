import { Art, Halo, INK, pen } from './artUtils'

/** Vaso de tereré pequeño (ícono) */
export function MiniTerere({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <Halo color="#80bdd5" opacity={0.35} />
      {/* Vaso */}
      <path d="M30 34 L 36 82 Q 48 88 60 82 L 66 34 Z" {...pen} fill="#cfe5ef" />
      {/* Líquido */}
      <path d="M32 34 L 36 72 Q 48 78 60 72 L 64 34 Z" fill="#7fc6d9" opacity="0.85" />
      {/* Yerba */}
      <ellipse cx="48" cy="34" rx="17" ry="5.4" fill="#3f5c28" stroke={INK} strokeWidth="2" />
      <path d="M33 34 Q 40 29 48 34 Q 56 39 63 34" stroke="#24381a" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Bombilla */}
      <path d="M60 31 L 72 14" stroke="#c9b98f" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <ellipse cx="73.5" cy="13" rx="4" ry="2.4" transform="rotate(28 73.5 13)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.4" />
      {/* Hielos */}
      <path d="M38 56 L 44 56 L 44 62 L 38 62 Z" fill="#ffffff" opacity="0.9" stroke="#7ea9b8" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M50 62 L 56 62 L 56 68 L 50 68 Z" fill="#ffffff" opacity="0.9" stroke="#7ea9b8" strokeWidth="1.6" strokeLinejoin="round" />
      {/* Rodaja de limón */}
      <circle cx="55" cy="50" r="5.5" fill="#ffd977" stroke="#c89a2f" strokeWidth="1.6" />
      <path d="M55 46.5 L 57 50 L 55 53.5 L 53 50 Z" stroke="#c89a2f" strokeWidth="1.1" fill="none" />
      <path d="M40 78 L 44 84 M54 80 L 50 86" stroke="#7ea9b8" strokeWidth="2" strokeLinecap="round" />
    </Art>
  )
}

/** Guampa (recipiente de cuerno) */
export function GuampaIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <Halo color="#e0bd8c" opacity={0.4} />
      <path d="M36 26 L 36 78 Q 48 86 60 78 L 60 26 Z" {...pen} fill="#a06a3b" />
      <path d="M38 26 L 38 76 Q 48 83 58 76 L 58 26 Z" fill="#8a5a2f" />
      {/* Borde superior */}
      <ellipse cx="48" cy="26" rx="12" ry="4.6" {...pen} fill="#c9b98f" />
      {/* Yerba */}
      <ellipse cx="48" cy="26.5" rx="9" ry="3.2" fill="#3f5c28" stroke={INK} strokeWidth="1.8" />
      {/* Bombilla */}
      <path d="M57 24 L 68 11" stroke="#c9b98f" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <ellipse cx="69.5" cy="10" rx="3.6" ry="2.2" transform="rotate(28 69.5 10)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.3" />
      <path d="M40 58 L 46 58 M40 66 L 46 66 M40 50 L 46 50" stroke="#6b4522" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </Art>
  )
}

/** Jarra con hielo */
export function JugIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <Halo color="#80bdd5" opacity={0.3} />
      <path d="M30 28 L 34 78 Q 48 84 62 78 L 66 28 Z" {...pen} fill="#cfe5ef" />
      <path d="M32 28 L 34 66 Q 48 72 62 66 L 64 28 Z" fill="#7fc6d9" opacity="0.8" />
      <path d="M36 18 L 60 18 L 56 30 L 40 30 Z" {...pen} fill="#e8f3f6" />
      <path d="M48 18 L 48 8" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <circle cx="48" cy="6.5" r="3" {...pen} fill="#cfe5ef" strokeWidth="1.8" />
      <path d="M40 54 L 46 54 L 46 60 L 40 60 Z" fill="#ffffff" stroke="#7ea9b8" strokeWidth="1.5" strokeLinejoin="round" opacity="0.9" />
      <path d="M52 60 L 58 60 L 58 66 L 52 66 Z" fill="#ffffff" stroke="#7ea9b8" strokeWidth="1.5" strokeLinejoin="round" opacity="0.9" />
      <circle cx="50" cy="40" r="5" fill="#ffd977" stroke="#c89a2f" strokeWidth="1.5" />
    </Art>
  )
}

/** Vaso común */
export function CupIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size}>
      <Halo color="#b8c996" />
      <path d="M34 30 L 38 76 Q 48 82 58 76 L 62 30 Z" {...pen} fill="#e8e0cc" />
      <path d="M36 34 L 38 66 Q 48 72 58 66 L 60 34 Z" fill="#cfe5ef" />
      <ellipse cx="48" cy="30" rx="14" ry="4.6" {...pen} fill="#f5f0e2" />
      <path d="M60 36 L 68 36 Q 72 44 70 52 Q 68 58 62 60" stroke="#e8e0cc" {...pen} strokeWidth="2.4" />
      <path d="M44 46 L 50 46 M44 54 L 50 54" stroke="#9fb2a0" strokeWidth="1.8" strokeLinecap="round" />
    </Art>
  )
}

/** Vaso de tereré grande (composición para secciones) */
export function TerereBig({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Ilustración de un vaso de tereré con limón y hielo">
      <Halo color="#80bdd5" opacity={0.3} />
      <path d="M26 34 L 34 82 Q 48 90 62 82 L 70 34 Z" {...pen} fill="#cfe5ef" />
      <path d="M28 34 L 34 70 Q 48 78 62 70 L 68 34 Z" fill="#7fc6d9" opacity="0.85" />
      <ellipse cx="48" cy="34" rx="22" ry="7" fill="#3f5c28" stroke={INK} strokeWidth="2.2" />
      <path d="M28 34 Q 36 28 48 34 Q 60 40 68 34" stroke="#24381a" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M64 30 L 74 12" stroke="#c9b98f" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="76" cy="10.5" rx="4.6" ry="2.8" transform="rotate(28 76 10.5)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.5" />
      <rect x="34" y="52" width="12" height="12" fill="#ffffff" opacity="0.92" stroke="#7ea9b8" strokeWidth="1.8" strokeLinejoin="round" transform="rotate(-8 40 58)" />
      <rect x="50" y="58" width="11" height="11" fill="#ffffff" opacity="0.92" stroke="#7ea9b8" strokeWidth="1.8" strokeLinejoin="round" transform="rotate(6 55 63)" />
      <rect x="42" y="66" width="10" height="10" fill="#ffffff" opacity="0.92" stroke="#7ea9b8" strokeWidth="1.8" strokeLinejoin="round" transform="rotate(-4 47 71)" />
      <circle cx="46" cy="48" r="9" fill="#ffd977" stroke="#c89a2f" strokeWidth="2" />
      <path d="M39 48 L 43 46 L 46 50 L 51 45 L 53 49" stroke="#c89a2f" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
      <ellipse cx="82" cy="44" rx="6" ry="12" transform="rotate(-30 82 44)" {...pen} fill="#b8c996" strokeWidth="2" />
      <path d="M12 44 C 18 34, 24 40, 30 32" stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.6" />
    </Art>
  )
}
