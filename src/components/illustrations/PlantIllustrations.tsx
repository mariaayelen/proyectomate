import { Art, Halo, INK, pen } from './artUtils'

/** Paquete de yerba */
export function YerbaPackIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Paquete de yerba">
      <Halo color="#b8c996" />
      <path d="M26 30 L 32 86 L 66 86 L 72 30 Z" {...pen} fill="#e7f0d3" />
      <path d="M26 30 L 26 46 Q 49 56 72 46 L 72 30 Z" fill="#c8d6a4" stroke={INK} strokeWidth="2.2" />
      <path d="M40 44 L 40 70 M44 44 L 44 70 M48 44 L 48 70 M52 44 L 52 70 M56 44 L 56 70" stroke="#8aa06b" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M34 22 L 38 30 M44 20 L 44 30 M54 22 L 50 30 M62 24 L 58 30" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <text x="49" y="80" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="Nunito, sans-serif" fill="#3f5c28">YERBA</text>
      <path d="M48 34 Q 52 37 48 40 Q 44 37 48 34" fill="#557a35" stroke={INK} strokeWidth="1.4" />
    </Art>
  )
}

/** Menta */
export function MintIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Menta">
      <Halo color="#8fc98f" opacity={0.35} />
      <path d="M48 86 L 48 40" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      {[
        [20, 66, -32],
        [30, 56, -50],
        [40, 68, -10],
      ].map(([x, y]) => (
        <path key={x} d={`M48 56 Q ${x} ${y} ${x + 14} ${y + 4}`} stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      ))}
      {[
        [30, 60, 24],
        [34, 40, 20],
        [62, 58, 20],
      ].map(([x, y, s], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx={s * 0.5}
          ry={s * 0.35}
          transform={`rotate(${i === 1 ? 18 : -18} ${x} ${y})`}
          {...pen} fill="#6fae6f"
          strokeWidth="1.8"
        />
      ))}
      {[32, 38, 44].map((y) => (
        <ellipse key={y} cx={54} cy={y} rx="6" ry="4" transform={`rotate(${y % 2 === 0 ? 14 : -14} 54 ${y})`} {...pen} fill="#6fae6f" strokeWidth="1.8" />
      ))}
    </Art>
  )
}

/** Burrito */
export function BurritoIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Burrito">
      <Halo color="#a4c87e" opacity={0.4} />
      <path d="M48 86 L 48 46" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      {[
        [22, 64],
        [34, 60],
        [62, 58],
        [72, 66],
        [30, 44],
        [66, 42],
      ].map(([x, y], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="9"
          ry="6"
          transform={`rotate(${i % 2 === 0 ? -14 : 14} ${x} ${y})`}
          {...pen} fill="#9cc36e"
          strokeWidth="1.8"
        />
      ))}
      <path d="M40 34 C 44 28 52 28 56 34" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="48" cy="30" rx="5" ry="3.6" {...pen} fill="#9cc36e" strokeWidth="1.6" />
    </Art>
  )
}

/** Poleo */
export function PoleoIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Poleo">
      <Halo color="#a8cf8f" opacity={0.4} />
      <path d="M48 86 L 48 48" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      {[
        [26, 66],
        [70, 62],
        [34, 46],
        [62, 40],
      ].map(([x, y], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="8"
          ry="5.6"
          transform={`rotate(${i % 2 === 0 ? -16 : 16} ${x} ${y})`}
          {...pen} fill="#8fbf6b"
          strokeWidth="1.8"
        />
      ))}
      <circle cx="48" cy="36" r="5" {...pen} fill="#a4cf80" strokeWidth="1.6" />
      <circle cx="42" cy="30" r="4.4" {...pen} fill="#8fbf6b" strokeWidth="1.6" />
      <circle cx="56" cy="30" r="4.4" {...pen} fill="#a4cf80" strokeWidth="1.6" />
    </Art>
  )
}

/** Cedrón */
export function CedronIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Cedrón">
      <Halo color="#c3d486" opacity={0.4} />
      <path d="M48 86 L 48 40" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      {[
        [26, 66, -30],
        [72, 62, 26],
        [34, 46, -26],
        [64, 40, 24],
      ].map(([x, y, r]) => (
        <ellipse
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          rx="6.5"
          ry="13"
          transform={`rotate(${r} ${x} ${y})`}
          {...pen} fill="#b9cd79"
          strokeWidth="1.8"
        />
      ))}
      <ellipse cx="48" cy="34" rx="6" ry="11" {...pen} fill="#c3d486" strokeWidth="1.8" />
    </Art>
  )
}

/** Hierba Luisa */
export function VerbenaIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Hierba Luisa">
      <Halo color="#bcd18a" opacity={0.4} />
      <path d="M52 84 C 48 64, 46 52, 42 36" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M42 36 C 36 26, 26 22, 20 26 C 28 30, 34 40, 42 46" fill="#bcd18a" stroke={INK} strokeWidth="1.8" />
      <path d="M44 44 C 52 40, 60 38, 64 44 C 58 48, 50 52, 44 52" fill="#c6d894" stroke={INK} strokeWidth="1.8" />
      <path d="M46 54 C 52 52, 58 54, 60 58 C 54 62, 48 62, 46 62" fill="#bcd18a" stroke={INK} strokeWidth="1.8" />
      <path d="M40 30 C 34 24, 30 18, 34 12 C 40 18, 44 24, 44 30" fill="#c6d894" stroke={INK} strokeWidth="1.8" />
      <path d="M48 34 C 54 30, 60 28, 64 32 C 58 36, 52 38, 48 38" fill="#bcd18a" stroke={INK} strokeWidth="1.8" />
    </Art>
  )
}

/** Jengibre */
export function GingerIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Jengibre">
      <Halo color="#e0b984" opacity={0.45} />
      <path d="M30 66 C 26 54, 32 44, 44 38 C 54 33, 62 36, 66 44 C 70 52, 66 60, 60 64" {...pen} fill="#e0b984" />
      <path d="M44 38 C 46 26, 42 20, 34 18 M44 38 C 48 30, 54 28, 60 30" stroke={INK} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M30 66 C 24 68, 20 64, 22 58 M60 64 C 66 66, 70 62, 68 56" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M34 52 L 40 46 M44 48 L 50 42 M48 56 L 54 50" stroke="#b3844f" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="62" cy="26" rx="5" ry="10" transform="rotate(-35 62 26)" {...pen} fill="#8fbf6b" strokeWidth="1.6" />
    </Art>
  )
}

/** Azúcar */
export function SugarIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Azúcar">
      <Halo color="#f0dfae" opacity={0.5} />
      <ellipse cx="48" cy="34" rx="24" ry="9" {...pen} fill="#e8d9b0" />
      <path d="M24 34 L 28 72 Q 48 80 68 72 L 72 34 Z" {...pen} fill="#f0e2ba" />
      <path d="M28 48 L 68 48 M30 60 L 66 60" stroke="#c8b683" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      <path d="M58 18 L 70 14" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="73" cy="14" rx="7" ry="4" transform="rotate(18 73 14)" {...pen} fill="#d8c9a3" strokeWidth="1.8" />
      <path d="M40 40 L 44 44 M44 40 L 48 44 M48 40 L 52 44" stroke="#b3945a" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
    </Art>
  )
}

/** Ramo de yuyos */
export function YuyosIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Yuyos">
      <Halo color="#a8cf8f" opacity={0.4} />
      <path d="M34 86 L 44 40" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M62 86 L 54 42" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M48 86 L 48 34" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="28" cy="56" rx="7" ry="12" transform="rotate(-32 28 56)" {...pen} fill="#8fbf6b" strokeWidth="1.8" />
      <ellipse cx="70" cy="52" rx="7" ry="12" transform="rotate(28 70 52)" {...pen} fill="#9cc36e" strokeWidth="1.8" />
      <ellipse cx="34" cy="38" rx="6" ry="11" transform="rotate(-24 34 38)" {...pen} fill="#bcd18a" strokeWidth="1.8" />
      <ellipse cx="62" cy="36" rx="6" ry="11" transform="rotate(26 62 36)" {...pen} fill="#c3d486" strokeWidth="1.8" />
      <ellipse cx="48" cy="26" rx="6.5" ry="13" {...pen} fill="#a4cf80" strokeWidth="1.8" />
    </Art>
  )
}

/** Mate (recipiente, para glosario) */
export function MateBowlIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Mate">
      <Halo color="#b8c996" />
      <path d="M28 30 C 28 58, 32 78, 46 82 C 60 86, 66 62, 66 32" {...pen} fill="#a06a3b" />
      <ellipse cx="47" cy="30" rx="19" ry="6.5" {...pen} fill="#7c4a24" />
      <ellipse cx="47" cy="31" rx="15" ry="4.6" fill="#3f5c28" stroke={INK} strokeWidth="2" />
      <path d="M58 28 L 66 14" stroke="#c9b98f" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <ellipse cx="67" cy="13.5" rx="4" ry="2.4" transform="rotate(28 67 13.5)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.4" />
      <path d="M40 58 L 46 58 M40 64 L 46 64" stroke="#6b4522" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
    </Art>
  )
}

/** Acción: Preparar */
export function PrepareIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Preparar">
      <Halo color="#edc75c" opacity={0.4} />
      <path d="M24 40 L 34 76 Q 48 84 62 76 L 72 40 Z" {...pen} fill="#e8dcc0" />
      <path d="M34 40 L 38 68 Q 48 74 58 68 L 62 40 Z" fill="#7fc6d9" opacity="0.8" />
      <path d="M26 40 Q 26 30 36 30 L 60 30 Q 70 30 70 40" {...pen} fill="none" />
      <path d="M20 24 L 30 24 M20 30 L 30 30 M20 36 L 26 36" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="56" cy="48" r="5" fill="#ffd977" stroke="#c89a2f" strokeWidth="1.5" />
    </Art>
  )
}

/** Acción: Agitar */
export function ShakeIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Agitar">
      <Halo color="#b8c996" />
      <path d="M26 34 C 26 60, 30 76, 46 80 C 60 83, 66 60, 66 34" {...pen} fill="#a06a3b" />
      <ellipse cx="46" cy="34" rx="20" ry="6.5" fill="#3f5c28" stroke={INK} strokeWidth="2" />
      <path d="M46 34 L 52 34 M46 40 L 52 40" stroke="#24381a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M64 28 C 74 24, 76 14, 70 8" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M20 26 C 12 22, 10 12, 16 6" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <circle cx="70" cy="6" r="3" fill="#edc75c" stroke={INK} strokeWidth="1.6" />
      <circle cx="16" cy="4" r="3" fill="#edc75c" stroke={INK} strokeWidth="1.6" />
    </Art>
  )
}

/** Acción: Cebar */
export function PourIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Cebar">
      <Halo color="#b8c996" />
      <path d="M66 14 L 60 44" stroke="#c9b98f" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M52 26 L 72 18" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="74" cy="18" rx="6" ry="4" transform="rotate(18 74 18)" {...pen} fill="#d8c9a3" strokeWidth="1.6" />
      <path d="M46 36 L 48 46 L 52 38 L 54 48 L 58 40" stroke="#7fc6d9" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M24 50 C 24 68, 28 82, 42 86 C 56 90, 62 70, 62 50" {...pen} fill="#a06a3b" />
      <ellipse cx="43" cy="50" rx="19" ry="6.5" {...pen} fill="#7c4a24" />
      <ellipse cx="43" cy="51" rx="15" ry="4.6" fill="#3f5c28" stroke={INK} strokeWidth="2" />
    </Art>
  )
}

/** Acción: Tomar */
export function DrinkIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Tomar">
      <Halo color="#b8c996" />
      <path d="M24 46 C 24 66, 28 82, 44 86 C 58 90, 64 68, 64 46" {...pen} fill="#a06a3b" />
      <ellipse cx="44" cy="46" rx="20" ry="7" {...pen} fill="#7c4a24" />
      <ellipse cx="44" cy="47" rx="16" ry="5" fill="#3f5c28" stroke={INK} strokeWidth="2" />
      <path d="M58 44 L 70 28" stroke="#c9b98f" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="71.5" cy="27" rx="4.4" ry="2.7" transform="rotate(28 71.5 27)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.5" />
      <path d="M44 70 L 40 60 M44 70 L 49 62" stroke="#f2ead2" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
      <circle cx="32" cy="62" r="3.4" fill="#ffffff" opacity="0.7" />
    </Art>
  )
}

/** Acción: Colar */
export function StrainIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Colar">
      <Halo color="#80bdd5" opacity={0.35} />
      <path d="M24 70 C 26 52, 38 44, 48 44 C 58 44, 70 52, 72 70 L 24 70 Z" {...pen} fill="#d8e8ee" />
      <path d="M36 70 C 38 56, 42 52, 48 52 C 54 52, 58 56, 60 70" stroke="#8fb6c4" strokeWidth="1.6" fill="none" />
      <path d="M30 70 C 32 58, 36 54, 40 54 C 44 54, 46 58, 47 70" stroke="#8fb6c4" strokeWidth="1.6" fill="none" />
      <path d="M26 30 L 26 44 M30 30 L 30 44" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M18 28 C 14 22, 14 16, 20 12 C 24 10, 26 12, 26 12" stroke={INK} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M44 70 C 48 76, 52 76, 56 70" stroke="#ffd977" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <circle cx="45" cy="72" r="2.6" fill="#ffd977" stroke="#c89a2f" strokeWidth="1.2" />
    </Art>
  )
}

/** Acción: Compartir */
export function ShareIcon({ className, size }: { className?: string; size?: number | string }) {
  return (
    <Art className={className} size={size} label="Compartir">
      <Halo color="#f0a9a0" opacity={0.3} />
      <path d="M18 52 C 18 70, 22 82, 34 86 C 45 90, 50 72, 50 52" {...pen} fill="#a06a3b" />
      <path d="M46 44 C 46 62, 50 76, 62 80 C 73 84, 78 66, 78 46" {...pen} fill="#a06a3b" />
      <ellipse cx="34" cy="52" rx="16" ry="5.5" {...pen} fill="#7c4a24" />
      <ellipse cx="34" cy="53" rx="12" ry="3.8" fill="#3f5c28" stroke={INK} strokeWidth="1.8" />
      <ellipse cx="62" cy="44" rx="16" ry="5.5" {...pen} fill="#7c4a24" />
      <ellipse cx="62" cy="45" rx="12" ry="3.8" fill="#3f5c28" stroke={INK} strokeWidth="1.8" />
      <path d="M48 42 L 56 34" stroke="#c9b98f" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M30 50 L 26 38 M38 50 L 34 38" stroke="#c9b98f" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M66 42 L 62 30 M72 44 L 68 32" stroke="#c9b98f" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M48 34 C 44 26, 50 20, 56 24 C 60 18, 66 22, 64 28" stroke={INK} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M30 40 L 26 34 M30 40 L 34 34" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M70 36 L 66 30 M70 36 L 74 30" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 44 L 44 44 M40 48 L 44 48" stroke="#6b4522" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    </Art>
  )
}

/** Registro completo de íconos de plantas, elementos y acciones */
export const plantRegistry = {
  yerba: YerbaPackIcon,
  menta: MintIcon,
  burrito: BurritoIcon,
  poleo: PoleoIcon,
  cedron: CedronIcon,
  hierbaluisa: VerbenaIcon,
  jengibre: GingerIcon,
  azucar: SugarIcon,
  yuyos: YuyosIcon,
  mate: MateBowlIcon,
  preparar: PrepareIcon,
  agitar: ShakeIcon,
  cebar: PourIcon,
  tomar: DrinkIcon,
  colar: StrainIcon,
  compartir: ShareIcon,
} as const

export type PlantIconName = keyof typeof plantRegistry

export function PlantIcon({
  name,
  className,
  size,
}: {
  name: PlantIconName
  className?: string
  size?: number | string
}) {
  const Cmp = plantRegistry[name]
  return <Cmp className={className} size={size} />
}
