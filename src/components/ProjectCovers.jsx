// Visuels vectoriels générés sur-mesure pour chaque projet (fictif).
// Chaque cover remplit sa carte (slice) et reste net à toute taille.

function Svg({ children, vb = '0 0 640 460' }) {
  return (
    <svg
      viewBox={vb}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      {children}
    </svg>
  )
}

/* 01 - Film produit IA : flacon cinématique sous projecteur */
export function ProductFilmCover() {
  return (
    <Svg>
      <defs>
        <radialGradient id="pf-bg" cx="50%" cy="34%" r="80%">
          <stop offset="0" stopColor="#3a2a17" />
          <stop offset="55%" stopColor="#1c1710" />
          <stop offset="100%" stopColor="#0d0b07" />
        </radialGradient>
        <linearGradient id="pf-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4a3a24" />
          <stop offset="100%" stopColor="#1a140c" />
        </linearGradient>
        <linearGradient id="pf-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F0764A" />
          <stop offset="100%" stopColor="#BE3F1B" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" fill="url(#pf-bg)" />
      {/* light cone */}
      <path d="M320 -40 L470 480 L170 480 Z" fill="#ffcf9e" opacity="0.06" />
      {/* pedestal reflection */}
      <ellipse cx="320" cy="366" rx="120" ry="20" fill="#000" opacity="0.5" />
      {/* bottle */}
      <g>
        <rect x="272" y="150" width="96" height="210" rx="20" fill="url(#pf-glass)" stroke="#5c4222" strokeWidth="1.5" />
        <rect x="288" y="250" width="64" height="96" rx="10" fill="url(#pf-liquid)" opacity="0.92" />
        <rect x="300" y="120" width="40" height="36" rx="6" fill="#261d11" stroke="#5c4222" strokeWidth="1.5" />
        <rect x="308" y="104" width="24" height="20" rx="4" fill="#3a2c19" />
        {/* rim light */}
        <rect x="274" y="152" width="5" height="206" rx="3" fill="#F0764A" opacity="0.6" />
        {/* label */}
        <text x="320" y="212" fontFamily="Archivo, sans-serif" fontSize="17" fontWeight="700" letterSpacing="5" fill="#F3ECE3" textAnchor="middle">AURA</text>
        <rect x="296" y="222" width="48" height="2" fill="#E0542A" />
      </g>
      {/* grain via dots */}
      <rect width="640" height="460" fill="none" />
    </Svg>
  )
}

/* Tunnels de vente - maquette d'interface + courbe de conversion */
export function FunnelCover({ variant = 'a' }) {
  const accent = variant === 'a' ? '#E0542A' : '#F0764A'
  return (
    <Svg>
      <defs>
        <linearGradient id={`fn-bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#221c14" />
          <stop offset="100%" stopColor="#100d09" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" fill={`url(#fn-bg-${variant})`} />
      {/* browser window */}
      <g transform="translate(60 54)">
        <rect x="0" y="0" width="330" height="352" rx="16" fill="#0f0c08" stroke="#3a3122" strokeWidth="1.5" />
        <rect x="0" y="0" width="330" height="34" rx="16" fill="#1b1610" />
        <rect x="0" y="18" width="330" height="16" fill="#1b1610" />
        <circle cx="18" cy="17" r="4" fill="#4a3f30" />
        <circle cx="34" cy="17" r="4" fill="#4a3f30" />
        <circle cx="50" cy="17" r="4" fill="#4a3f30" />
        {/* landing content */}
        <rect x="26" y="58" width="150" height="12" rx="6" fill="#F3ECE3" />
        <rect x="26" y="78" width="210" height="12" rx="6" fill="#6a5f4c" />
        <rect x="26" y="104" width="120" height="9" rx="4" fill="#453b2c" />
        <rect x="26" y="120" width="180" height="9" rx="4" fill="#453b2c" />
        <rect x="26" y="150" width="120" height="34" rx="17" fill={accent} />
        <text x="86" y="172" fontFamily="Archivo, sans-serif" fontSize="12" fontWeight="700" fill="#fff" textAnchor="middle">J'EN PROFITE</text>
        {/* mini cards */}
        <rect x="26" y="210" width="88" height="110" rx="10" fill="#1b1610" stroke="#332b1f" />
        <rect x="121" y="210" width="88" height="110" rx="10" fill="#1b1610" stroke="#332b1f" />
        <rect x="216" y="210" width="88" height="110" rx="10" fill="#1b1610" stroke="#332b1f" />
        <circle cx="70" cy="240" r="12" fill={accent} opacity="0.9" />
        <circle cx="165" cy="240" r="12" fill="#5c4a30" />
        <circle cx="260" cy="240" r="12" fill="#5c4a30" />
      </g>
      {/* conversion panel */}
      <g transform="translate(420 90)">
        <rect x="0" y="0" width="170" height="128" rx="14" fill="#0f0c08" stroke="#3a3122" strokeWidth="1.5" />
        <text x="18" y="30" fontFamily="Archivo, sans-serif" fontSize="11" letterSpacing="1.5" fill="#8C8175">CONVERSION</text>
        <text x="18" y="60" fontFamily="Archivo, sans-serif" fontSize="30" fontWeight="800" fill="#F3ECE3">18%</text>
        {/* bars */}
        <g>
          <rect x="18" y="98" width="20" height="16" rx="3" fill="#453b2c" />
          <rect x="46" y="86" width="20" height="28" rx="3" fill="#5c4a30" />
          <rect x="74" y="70" width="20" height="44" rx="3" fill={accent} opacity="0.7" />
          <rect x="102" y="52" width="20" height="62" rx="3" fill={accent} />
          <rect x="130" y="38" width="20" height="76" rx="3" fill={accent} />
        </g>
      </g>
      {/* funnel triangle */}
      <g transform="translate(432 250)" opacity="0.95">
        <path d="M0 0 H150 L120 34 H30 Z" fill="#332b1f" />
        <path d="M30 44 H120 L96 74 H54 Z" fill="#4a3f30" />
        <path d="M54 84 H96 L82 112 H68 Z" fill={accent} />
        <path d="M75 118 l10 -8 h-20 z" fill={accent} />
      </g>
    </Svg>
  )
}

/* Campagne sociale - pub bold "DÉPASSEZ VOS LIMITES" */
export function SocialCover() {
  return (
    <Svg>
      <defs>
        <linearGradient id="soc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0542A" />
          <stop offset="60%" stopColor="#7c2a12" />
          <stop offset="100%" stopColor="#140d09" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" fill="url(#soc-bg)" />
      {/* speed lines */}
      <g stroke="#fff" strokeWidth="2" opacity="0.12">
        <path d="M0 120 H640" />
        <path d="M0 150 H640" />
        <path d="M0 300 H520" />
        <path d="M0 330 H480" />
      </g>
      {/* runner silhouette */}
      <g fill="#140d09" opacity="0.85" transform="translate(430 150)">
        <circle cx="70" cy="34" r="20" />
        <path d="M70 54 q-6 40 -30 66 l14 10 q24 -22 34 -50 q10 30 -2 66 l16 4 q18 -46 4 -86 q-18 -14 -50 -20Z" />
        <path d="M52 110 l-30 40 12 8 32 -38Z" />
      </g>
      {/* headline */}
      <g transform="translate(46 150)">
        <text fontFamily="Archivo, sans-serif" fontSize="52" fontWeight="800" fill="#F3ECE3" letterSpacing="-1">
          <tspan x="0" y="0">DÉPASSEZ</tspan>
          <tspan x="0" y="56">VOS</tspan>
          <tspan x="0" y="112" fill="#140d09">LIMITES</tspan>
        </text>
        <rect x="2" y="140" width="150" height="4" fill="#140d09" />
      </g>
      {/* badge */}
      <g transform="translate(46 60)">
        <rect x="0" y="0" width="132" height="30" rx="15" fill="#140d09" />
        <text x="66" y="20" fontFamily="Archivo, sans-serif" fontSize="12" fontWeight="700" letterSpacing="2" fill="#F0764A" textAnchor="middle">NEW DROP</text>
      </g>
    </Svg>
  )
}

/* YouTube automation - lecteur vidéo */
export function YoutubeCover() {
  return (
    <Svg>
      <defs>
        <linearGradient id="yt-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a2114" />
          <stop offset="100%" stopColor="#0e0b07" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" fill="url(#yt-bg)" />
      {/* thumbnail */}
      <g transform="translate(70 56)">
        <rect x="0" y="0" width="500" height="278" rx="14" fill="#140f0a" stroke="#3a3122" strokeWidth="1.5" />
        {/* big title */}
        <text x="30" y="86" fontFamily="Archivo, sans-serif" fontSize="42" fontWeight="800" fill="#F3ECE3">MONEY</text>
        <text x="30" y="132" fontFamily="Archivo, sans-serif" fontSize="42" fontWeight="800" fill="#E0542A">TALKS</text>
        <rect x="30" y="152" width="180" height="10" rx="5" fill="#453b2c" />
        <rect x="30" y="170" width="120" height="10" rx="5" fill="#453b2c" />
        {/* arrow chart motif */}
        <path d="M300 210 L350 170 L390 195 L450 120" fill="none" stroke="#F0764A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="450" cy="120" r="8" fill="#F0764A" />
        {/* play */}
        <circle cx="250" cy="139" r="40" fill="#E0542A" />
        <path d="M238 118 v42 l34 -21 z" fill="#fff" />
      </g>
      {/* scrubber */}
      <g transform="translate(70 354)">
        <rect x="0" y="0" width="500" height="6" rx="3" fill="#3a3122" />
        <rect x="0" y="0" width="300" height="6" rx="3" fill="#E0542A" />
        <circle cx="300" cy="3" r="8" fill="#F3ECE3" />
        <text x="0" y="34" fontFamily="Archivo, sans-serif" fontSize="12" fill="#8C8175">04:12</text>
        <text x="470" y="34" fontFamily="Archivo, sans-serif" fontSize="12" fill="#8C8175">11:38</text>
      </g>
    </Svg>
  )
}

/* VSL / Video Sales Letter */
export function VslCover() {
  return (
    <Svg>
      <defs>
        <radialGradient id="vsl-bg" cx="35%" cy="40%" r="80%">
          <stop offset="0" stopColor="#2c2415" />
          <stop offset="100%" stopColor="#100d09" />
        </radialGradient>
      </defs>
      <rect width="640" height="460" fill="url(#vsl-bg)" />
      {/* presenter */}
      <g transform="translate(60 70)">
        <rect x="0" y="0" width="250" height="300" rx="16" fill="#181209" stroke="#3a3122" strokeWidth="1.5" />
        <circle cx="125" cy="120" r="52" fill="#3a2c19" />
        <path d="M40 300 q0 -80 85 -80 t85 80" fill="#241a0f" />
        {/* play */}
        <circle cx="125" cy="150" r="34" fill="#E0542A" opacity="0.95" />
        <path d="M115 133 v34 l28 -17 z" fill="#fff" />
        {/* live tag */}
        <rect x="18" y="18" width="70" height="24" rx="12" fill="#BE3F1B" />
        <text x="53" y="34" fontFamily="Archivo, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1" fill="#fff" textAnchor="middle">● VSL</text>
      </g>
      {/* slide panel */}
      <g transform="translate(340 90)">
        <text x="0" y="16" fontFamily="Archivo, sans-serif" fontSize="12" letterSpacing="2" fill="#F0764A">ARGUMENTAIRE</text>
        <g fill="#F3ECE3">
          <circle cx="8" cy="52" r="7" fill="#E0542A" /><rect x="26" y="46" width="200" height="12" rx="6" fill="#6a5f4c" />
          <circle cx="8" cy="92" r="7" fill="#E0542A" /><rect x="26" y="86" width="230" height="12" rx="6" fill="#6a5f4c" />
          <circle cx="8" cy="132" r="7" fill="#E0542A" /><rect x="26" y="126" width="170" height="12" rx="6" fill="#6a5f4c" />
        </g>
        {/* CTA */}
        <rect x="0" y="172" width="200" height="44" rx="22" fill="#E0542A" />
        <text x="100" y="199" fontFamily="Archivo, sans-serif" fontSize="13" fontWeight="700" fill="#fff" textAnchor="middle">RÉSERVER MA PLACE</text>
        {/* price */}
        <text x="0" y="264" fontFamily="Archivo, sans-serif" fontSize="34" fontWeight="800" fill="#F3ECE3">+240K€</text>
        <text x="0" y="286" fontFamily="Archivo, sans-serif" fontSize="12" fill="#8C8175">générés au lancement</text>
      </g>
    </Svg>
  )
}

export function ProjectCover({ type }) {
  switch (type) {
    case 'product':
      return <ProductFilmCover />
    case 'funnel':
      return <FunnelCover variant="a" />
    case 'funnel2':
      return <FunnelCover variant="b" />
    case 'social':
      return <SocialCover />
    case 'youtube':
      return <YoutubeCover />
    case 'vsl':
      return <VslCover />
    default:
      return <FunnelCover />
  }
}
