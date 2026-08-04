import { Art, Halo, INK, pen } from './artUtils'

function Citrus({
  bodyColor,
  peelColor,
  sectionColor,
  leaf = false,
  stem = false,
}: {
  bodyColor: string
  peelColor: string
  sectionColor: string
  leaf?: boolean
  stem?: boolean
}) {
  return (
    <>
      <circle cx="48" cy="52" r="26" {...pen} fill={bodyColor} />
      {/* Brillo */}
      <ellipse cx="39" cy="42" rx="8" ry="5" fill="#ffffff" opacity="0.4" transform="rotate(-20 39 42)" />
      {/* Segmentos */}
      <path d="M48 52 L 48 32" stroke={sectionColor} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M48 52 L 34 42" stroke={sectionColor} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M48 52 L 62 42" stroke={sectionColor} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M48 52 L 36 62" stroke={sectionColor} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M48 52 L 60 62" stroke={sectionColor} strokeWidth="1.8" strokeLinecap="round" />
      {stem && <path d="M48 26 L 48 20" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />}
      {leaf && (
        <ellipse cx="58" cy="22" rx="6" ry="12" transform="rotate(-40 58 22)" fill="#b8c996" stroke={INK} strokeWidth="1.8" />
      )}
      {/* Sombrero (lado de la fruta) */}
      <circle cx="60" cy="62" r="4" fill={peelColor} stroke={INK} strokeWidth="1.6" />
    </>
  )
}

export function LemonIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Limón">
      <Halo color="#ffd977" opacity={0.5} />
      <Citrus bodyColor="#ffd977" peelColor="#d9a441" sectionColor="#d9a441" leaf stem />
    </Art>
  )
}

export function OrangeIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Naranja">
      <Halo color="#f5a953" opacity={0.5} />
      <Citrus bodyColor="#f5a34d" peelColor="#c77b2e" sectionColor="#c77b2e" leaf stem />
    </Art>
  )
}

export function MandarinIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Mandarina">
      <Halo color="#f59e3f" opacity={0.45} />
      <Citrus bodyColor="#f59e3f" peelColor="#c77b2e" sectionColor="#d98a34" />
      <path d="M30 40 C 24 34, 26 26, 32 24" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M66 62 C 70 58, 74 58, 76 62" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="60" cy="24" rx="6" ry="12" transform="rotate(-35 60 24)" fill="#b8c996" stroke={INK} strokeWidth="1.8" />
    </Art>
  )
}

export function GrapefruitIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Pomelo">
      <Halo color="#f3c15f" opacity={0.45} />
      <Citrus bodyColor="#f3c15f" peelColor="#c77b2e" sectionColor="#d98a34" leaf stem />
    </Art>
  )
}

/** Jugo exprimido (vaso con pajita) */
export function JuiceIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Jugo">
      <Halo color="#ffd977" opacity={0.5} />
      <path d="M32 32 L 36 78 Q 48 84 60 78 L 64 32 Z" {...pen} fill="#ffd977" />
      <path d="M34 34 L 36 64 Q 48 70 60 64 L 62 34 Z" fill="#f5a34d" opacity="0.85" />
      <path d="M42 12 L 62 12 L 60 30 L 36 30 Z" {...pen} fill="#f7c56b" />
      <path d="M49 12 L 49 6" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="49" cy="5" r="2.6" {...pen} fill="#f7c56b" strokeWidth="1.8" />
      <path d="M38 52 L 48 48 M40 60 L 52 56" stroke="#c77b2e" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <circle cx="52" cy="42" r="4" fill="#ffd977" stroke="#c89a2f" strokeWidth="1.4" />
      <path d="M50 40 L 53 42 L 50 44" stroke="#c89a2f" strokeWidth="1" fill="none" />
    </Art>
  )
}

/** Hielo */
export function IceIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Hielo">
      <Halo color="#80bdd5" opacity={0.4} />
      <rect x="24" y="28" width="26" height="26" fill="#ffffff" opacity="0.95" {...pen} />
      <path d="M24 28 L 50 54 M50 28 L 24 54" stroke="#bfe0ec" strokeWidth="1.8" opacity="0.8" />
      <rect x="48" y="48" width="24" height="24" fill="#f2fbff" opacity="0.95" {...pen} transform="rotate(6 60 60)" />
      <path d="M30 60 L 42 72 M30 72 L 42 60" stroke="#bfe0ec" strokeWidth="1.8" opacity="0.7" />
      <path d="M40 20 L 34 24 M60 40 L 54 44" stroke="#7ea9b8" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
      <circle cx="76" cy="20" r="2" fill="#7ea9b8" opacity="0.5" />
      <circle cx="20" cy="76" r="2.4" fill="#7ea9b8" opacity="0.5" />
    </Art>
  )
}

/** Agua fría (vaso con gotas) */
export function ColdWaterIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Agua fría">
      <Halo color="#80bdd5" opacity={0.35} />
      <path d="M34 28 L 38 76 Q 48 82 58 76 L 62 28 Z" {...pen} fill="#cfe5ef" />
      <path d="M36 30 L 38 66 Q 48 72 58 66 L 60 30 Z" fill="#7fc6d9" opacity="0.8" />
      <path d="M30 20 L 42 20" stroke="#7fc6d9" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M60 26 L 72 20" stroke="#7fc6d9" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M48 60 L 46 68 M48 60 L 50 68" stroke="#4f96ad" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="42" r="4" fill="#ffffff" opacity="0.9" />
    </Art>
  )
}

export const fruitRegistry = {
  limon: LemonIcon,
  naranja: OrangeIcon,
  mandarina: MandarinIcon,
  pomelo: GrapefruitIcon,
  jugo: JuiceIcon,
  hielo: IceIcon,
  aguafria: ColdWaterIcon,
} as const

export type FruitIconName = keyof typeof fruitRegistry

export function FruitIcon({
  name,
  className,
  size,
}: {
  name: FruitIconName
  className?: string
  size?: number | string
}) {
  const Cmp = fruitRegistry[name]
  return <Cmp className={className} size={size} />
}
