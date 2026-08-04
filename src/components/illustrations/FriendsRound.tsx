import { INK, pen } from './artUtils'

const SKIN = '#f2c49b'

/** Ronda de personas compartiendo (vista desde arriba) */
export function FriendsRound({ className }: { className?: string }) {
  const people: { x: number; y: number; hair: string; shirt: string }[] = [
    { x: 340, y: 130, hair: '#2c2320', shirt: '#c55e42' },
    { x: 540, y: 250, hair: '#c9702e', shirt: '#80bdd5' },
    { x: 430, y: 340, hair: '#f0c470', shirt: '#557a35' },
    { x: 190, y: 260, hair: '#5b4636', shirt: '#edc75c' },
  ]

  return (
    <svg
      viewBox="0 0 680 420"
      className={className}
      role="img"
      aria-label="Una ronda de personas compartiendo mate"
      focusable="false"
    >
      <ellipse cx="340" cy="240" rx="280" ry="180" fill="#c8d6a4" opacity="0.28" transform="rotate(-3 340 240)" />
      {/* Mantel / mesa de la ronda */}
      <ellipse cx="340" cy="240" rx="230" ry="120" fill="#fff7e7" opacity="0.85" {...pen} strokeWidth="2.4" />
      <path d="M150 240 L 90 240" stroke={INK} strokeWidth="2.4" strokeLinecap="round" opacity="0.4" />
      <path d="M530 240 L 590 240" stroke={INK} strokeWidth="2.4" strokeLinecap="round" opacity="0.4" />

      {/* Personas */}
      {people.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`}>
          <circle cx="0" cy="0" r="26" {...pen} fill={p.shirt} strokeWidth="2.6" />
          <circle cx="0" cy="-4" r="19" {...pen} fill={SKIN} strokeWidth="2.4" />
          <path d="M-19 -2 C -20 -20, 20 -20, 19 -2 C 13 -12, 6 -14, 0 -8 C -6 -14, -13 -12, -19 -2 Z" {...pen} fill={p.hair} strokeWidth="2" />
          <circle cx="-7" cy="-6" r="2.2" fill={INK} />
          <circle cx="7" cy="-6" r="2.2" fill={INK} />
          <path d="M-14 -1 C -13 1, -9 1, -8 -1" stroke="#e8a06b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M14 -1 C 13 1, 9 1, 8 -1" stroke="#e8a06b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M-4 2 C -2 5, 2 5, 4 2" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </g>
      ))}

      {/* Mate central */}
      <g transform="translate(340 245)">
        <ellipse cx="0" cy="0" rx="40" ry="30" fill="#edc75c" opacity="0.4" {...pen} strokeWidth="2" />
        <path d="M-22 -14 C -22 16, -16 32, 2 36 C 20 40, 26 20, 26 -14" {...pen} fill="#a06a3b" strokeWidth="2.6" />
        <ellipse cx="2" cy="-14" rx="24" ry="8" {...pen} fill="#7c4a24" strokeWidth="2.4" />
        <ellipse cx="2" cy="-13" rx="18" ry="5.6" fill="#3f5c28" stroke={INK} strokeWidth="2" />
        <path d="M-12 -13 Q -4 -18 2 -13 Q 8 -8 16 -13" stroke="#24381a" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M20 -16 L 28 -28" stroke="#c9b98f" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <ellipse cx="29.5" cy="-29" rx="4.4" ry="2.7" transform="rotate(28 29.5 -29)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.4" />
        <circle cx="-16" cy="-30" r="3.4" fill="#d95b5b" stroke={INK} strokeWidth="1.6" />
        <circle cx="18" cy="-34" r="3" fill="#d95b5b" stroke={INK} strokeWidth="1.6" opacity="0.85" />
      </g>

      {/* Corazones */}
      <path d="M470 160 C 456 148, 451 138, 458 132 C 464 127, 470 131, 470 131 C 470 131, 476 127, 482 132 C 489 138, 484 148, 470 160 Z" fill="#d95b5b" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M230 160 C 220 151, 216 143, 221 138 C 226 134, 230 137, 230 137 C 230 137, 234 134, 239 138 C 244 143, 240 151, 230 160 Z" fill="#edc75c" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Hojas alrededor */}
      <g transform="translate(560 120) rotate(24)">
        <path d="M0 0 C 12 -16, 26 -26, 42 -34" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
        <ellipse cx="12" cy="-14" rx="6" ry="11" transform="rotate(-28 12 -14)" fill="#b8c996" stroke={INK} strokeWidth="2" />
        <ellipse cx="28" cy="-24" rx="6" ry="11" transform="rotate(22 28 -24)" fill="#c8d6a4" stroke={INK} strokeWidth="2" />
      </g>
      <g transform="translate(120 320) rotate(-16)">
        <path d="M0 0 C 10 -14, 22 -24, 36 -32" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
        <ellipse cx="10" cy="-12" rx="6" ry="11" transform="rotate(-26 10 -12)" fill="#c8d6a4" stroke={INK} strokeWidth="2" />
        <ellipse cx="26" cy="-24" rx="6" ry="11" transform="rotate(24 26 -24)" fill="#b8c996" stroke={INK} strokeWidth="2" />
      </g>
    </svg>
  )
}
