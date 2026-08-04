import { INK, pen } from './artUtils'
import { Steam } from './MateIllustration'

const SKIN = '#f2c49b'

function Kid({
  cx,
  cy,
  shirt = '#557a35',
  hair = '#5b4636',
  flip = false,
  back = false,
}: {
  cx: number | string
  cy: number | string
  shirt?: string
  hair?: string
  flip?: boolean
  back?: boolean
}) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${flip ? -1 : 1} 1)`}>
      {/* Cuerpo sentado */}
      <ellipse cx="0" cy="26" rx="27" ry="20" {...pen} fill={shirt} strokeWidth="2.4" />
      {/* Brazos */}
      <path d="M-24 22 C -32 30, -30 40, -20 44" stroke={shirt} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M24 22 C 32 30, 30 40, 20 44" stroke={shirt} strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* Manos */}
      <circle cx="-21" cy="45" r="4" fill={SKIN} />
      <circle cx="21" cy="45" r="4" fill={SKIN} />
      {/* Cabeza */}
      <circle cx="0" cy="-8" r="17" {...pen} fill={SKIN} strokeWidth="2.4" />
      {back ? (
        <path d="M-17 -8 C -17 -24, 17 -24, 17 -8 L 17 -14 C 17 -28, -17 -28, -17 -14 Z" {...pen} fill={hair} strokeWidth="2" />
      ) : (
        <>
          <path d="M-17 -4 C -18 -22, 18 -22, 17 -4 C 12 -13, 4 -14, 0 -8 C -4 -14, -12 -13, -17 -4 Z" {...pen} fill={hair} strokeWidth="2" />
          {/* Ojos */}
          <circle cx="-6" cy="-8" r="1.9" fill={INK} />
          <circle cx="6" cy="-8" r="1.9" fill={INK} />
          {/* Mejillas */}
          <path d="M-12 -3 C -11 -1, -8 -1, -7 -3" stroke="#e8a06b" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M12 -3 C 11 -1, 8 -1, 7 -3" stroke="#e8a06b" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          {/* Sonrisa */}
          <path d="M-4 1 C -2 4, 2 4, 4 1" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </>
      )}
    </g>
  )
}

/** Escena central de la portada: estudiantes compartiendo mate y tereré */
export function HeroArtwork({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 680 480"
      className={className}
      role="img"
      aria-label="Estudiantes compartiendo mate y tereré rodeados de hojas y frutas"
      focusable="false"
    >
      {/* Fondos de acuarela */}
      <ellipse cx="340" cy="250" rx="300" ry="210" fill="#b8c996" opacity="0.25" transform="rotate(-4 340 250)" />
      <ellipse cx="340" cy="265" rx="240" ry="170" fill="#fff7e7" opacity="0.8" />
      {/* Piso de la ronda */}
      <ellipse cx="340" cy="360" rx="150" ry="42" fill="#edc75c" opacity="0.35" {...pen} strokeWidth="2.2" />

      {/* Estudiante de atrás */}
      <Kid cx="340" cy="268" shirt="#c55e42" hair="#2c2320" back />
      {/* Estudiantes laterales */}
      <Kid cx="262" cy="340" shirt="#557a35" hair="#c9702e" flip />
      <Kid cx="418" cy="340" shirt="#80bdd5" hair="#f0c470" />

      {/* Mate central compartido */}
      <g transform="translate(340 330)">
        <path d="M-34 -4 C -34 26, -28 46, -8 50 C 10 54, 34 40, 34 -4" {...pen} fill="#a06a3b" strokeWidth="2.6" />
        <ellipse cx="0" cy="-4" rx="34" ry="11" {...pen} fill="#7c4a24" strokeWidth="2.6" />
        <ellipse cx="0" cy="-3" rx="26" ry="7.5" fill="#3f5c28" stroke={INK} strokeWidth="2.2" />
        <path d="M-18 -3 Q -10 -9 0 -3 Q 10 3 18 -3" stroke="#24381a" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M24 -6 L 34 -22" stroke="#c9b98f" strokeWidth="3" strokeLinecap="round" fill="none" />
        <ellipse cx="35.5" cy="-23" rx="4.6" ry="2.8" transform="rotate(28 35.5 -23)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.5" />
        <g transform="translate(-2 -36)">
          <Steam className="steam" />
        </g>
      </g>

      {/* Corazones */}
      <g className="heart-pop">
        <path d="M88 150 C 66 134, 58 116, 70 106 C 79 99, 88 105, 88 105 C 88 105, 97 99, 106 106 C 118 116, 110 134, 88 150 Z" fill="#d95b5b" stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="heart-pop heart-pop--delay">
        <path d="M596 118 C 580 106, 574 94, 582 87 C 589 81, 596 86, 596 86 C 596 86, 603 81, 610 87 C 618 94, 612 106, 596 118 Z" fill="#d95b5b" stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="heart-pop heart-pop--delay" transform="translate(0 60)">
        <path d="M600 330 C 588 320, 583 311, 589 305 C 594 300, 600 304, 600 304 C 600 304, 606 300, 611 305 C 617 311, 612 320, 600 330 Z" fill="#edc75c" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Mate grande (lado izquierdo) */}
      <g transform="translate(150 330)">
        <ellipse cx="0" cy="60" rx="40" ry="12" fill="#edc75c" opacity="0.3" {...pen} strokeWidth="2" />
        <path d="M-30 -30 C -30 12, -24 44, -2 52 C 18 60, 30 34, 30 -30" {...pen} fill="#a06a3b" strokeWidth="2.6" />
        <path d="M-30 -30 C -30 8, -26 38, -2 48 C 14 55, 28 34, 30 -30 Z" fill="#86562f" />
        <ellipse cx="0" cy="-30" rx="30" ry="9.5" {...pen} fill="#7c4a24" strokeWidth="2.6" />
        <ellipse cx="0" cy="-29" rx="23" ry="6.6" fill="#3f5c28" stroke={INK} strokeWidth="2.2" />
        <path d="M-16 -29 Q -8 -35 0 -29 Q 8 -23 16 -29" stroke="#24381a" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M22 -32 L 34 -52" stroke="#c9b98f" strokeWidth="3" strokeLinecap="round" fill="none" />
        <ellipse cx="35.5" cy="-53" rx="4.8" ry="2.9" transform="rotate(28 35.5 -53)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.5" />
        <g transform="translate(0 -62)">
          <Steam className="steam" />
        </g>
      </g>

      {/* Vaso de tereré (lado derecho) */}
      <g transform="translate(530 322)">
        <ellipse cx="0" cy="66" rx="34" ry="10" fill="#80bdd5" opacity="0.3" {...pen} strokeWidth="2" />
        <path d="M-24 -34 L -16 56 Q 0 66 16 56 L 24 -34 Z" {...pen} fill="#cfe5ef" strokeWidth="2.6" />
        <path d="M-22 -34 L -16 44 Q 0 54 16 44 L 22 -34 Z" fill="#7fc6d9" opacity="0.85" />
        <ellipse cx="0" cy="-34" rx="24" ry="7.5" fill="#3f5c28" stroke={INK} strokeWidth="2.2" />
        <path d="M-16 -34 Q -8 -40 0 -34 Q 8 -28 16 -34" stroke="#24381a" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M18 -36 L 28 -54" stroke="#c9b98f" strokeWidth="3" strokeLinecap="round" fill="none" />
        <ellipse cx="29.5" cy="-55" rx="4.8" ry="2.9" transform="rotate(28 29.5 -55)" fill="#d8c9a3" stroke="#8f7f5a" strokeWidth="1.5" />
        <rect x="-8" y="6" width="14" height="14" fill="#ffffff" opacity="0.92" stroke="#7ea9b8" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="8" y="14" width="13" height="13" fill="#ffffff" opacity="0.92" stroke="#7ea9b8" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="-16" y="24" width="12" height="12" fill="#ffffff" opacity="0.92" stroke="#7ea9b8" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="-6" cy="-4" r="8" fill="#ffd977" stroke="#c89a2f" strokeWidth="2" />
        <path d="M-12 -4 L -8 -7 L -6 -2 L -2 -7 L 0 -3" stroke="#c89a2f" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      </g>

      {/* Paquete de yerba */}
      <g transform="translate(96 96)">
        <path d="M0 0 L 8 46 L 44 46 L 52 0 Z" {...pen} fill="#e7f0d3" strokeWidth="2.4" />
        <path d="M0 0 L 0 12 Q 26 18 52 12 L 52 0 Z" fill="#c8d6a4" stroke={INK} strokeWidth="2.2" />
        <path d="M16 26 L 16 40 M22 26 L 22 40 M28 26 L 28 40 M34 26 L 34 40" stroke="#8aa06b" strokeWidth="1.5" strokeLinecap="round" />
        <text x="26" y="38" textAnchor="middle" fontSize="9" fontWeight="800" fontFamily="Nunito, sans-serif" fill="#3f5c28">YERBA</text>
        <path d="M8 -8 L 12 -4 M20 -10 L 20 -4 M32 -8 L 28 -4" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Frutas cítricas */}
      <g transform="translate(560 150)">
        <circle cx="0" cy="0" r="22" {...pen} fill="#f5a34d" strokeWidth="2.4" />
        <ellipse cx="-7" cy="-7" rx="6" ry="4" fill="#ffffff" opacity="0.4" transform="rotate(-20 -7 -7)" />
        <path d="M0 0 L 0 -16 M0 0 L -12 -9 M0 0 L 12 -9 M0 0 L -9 12 M0 0 L 9 12" stroke="#c77b2e" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M0 -22 L 0 -30" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
        <ellipse cx="10" cy="-26" rx="5" ry="10" transform="rotate(-40 10 -26)" fill="#b8c996" stroke={INK} strokeWidth="1.8" />
        <g transform="translate(34 -16)">
          <circle cx="0" cy="0" r="12" {...pen} fill="#ffd977" strokeWidth="2.2" />
          <path d="M0 0 L 0 -8 M0 0 L -6 -5 M0 0 L 6 -5" stroke="#d9a441" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </g>

      {/* Termo */}
      <g transform="translate(96 356)">
        <ellipse cx="26" cy="52" rx="24" ry="7" fill="#edc75c" opacity="0.3" {...pen} strokeWidth="2" />
        <rect x="8" y="-6" width="36" height="54" rx="12" {...pen} fill="#c55e42" strokeWidth="2.4" />
        <path d="M14 4 L 38 4 L 38 18 L 14 18 Z" fill="#e8a06b" opacity="0.4" />
        <path d="M16 -6 L 16 -14 L 36 -14 L 36 -6" {...pen} fill="none" />
        <circle cx="26" cy="-19" r="4.5" {...pen} fill="#d8c9a3" strokeWidth="2" />
        <path d="M12 24 L 40 24 M12 36 L 40 36" stroke="#a3452e" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* Ramitas y hojas flotantes */}
      <g className="float-soft">
        <g transform="translate(520 430) rotate(18)">
          <path d="M0 0 C 12 -18, 28 -30, 44 -38" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
          <ellipse cx="12" cy="-16" rx="6" ry="11" transform="rotate(-30 12 -16)" fill="#b8c996" stroke={INK} strokeWidth="2" />
          <ellipse cx="30" cy="-28" rx="6" ry="11" transform="rotate(24 30 -28)" fill="#c8d6a4" stroke={INK} strokeWidth="2" />
          <ellipse cx="42" cy="-36" rx="5" ry="10" transform="rotate(-28 42 -36)" fill="#b8c996" stroke={INK} strokeWidth="2" />
        </g>
      </g>
      <g className="float-soft float-soft--delay">
        <g transform="translate(238 150) rotate(-20)">
          <path d="M0 0 C 10 -14, 22 -24, 36 -32" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
          <ellipse cx="10" cy="-12" rx="5" ry="10" transform="rotate(-26 10 -12)" fill="#b8c996" stroke={INK} strokeWidth="2" />
          <ellipse cx="26" cy="-24" rx="5" ry="10" transform="rotate(22 26 -24)" fill="#c8d6a4" stroke={INK} strokeWidth="2" />
        </g>
      </g>
      <g className="float-soft">
        <g transform="translate(620 250) rotate(-12)">
          <path d="M0 0 L 0 26" stroke={INK} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <ellipse cx="-8" cy="12" rx="5" ry="10" transform="rotate(-34 -8 12)" fill="#c8d6a4" stroke={INK} strokeWidth="2" />
          <ellipse cx="8" cy="18" rx="5" ry="10" transform="rotate(30 8 18)" fill="#b8c996" stroke={INK} strokeWidth="2" />
        </g>
      </g>
    </svg>
  )
}
