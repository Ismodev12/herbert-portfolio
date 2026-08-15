const items = [
  'Montage Vidéo IA',
  'Funnel Building',
  'Short-form viral',
  'Video Sales Letters',
  'YouTube Automation',
  'Landing Pages',
  'Sound Design',
  'Motion Design',
  'Copywriting',
  'A/B Testing',
]

function Row({ ariaHidden = false }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={ariaHidden}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display text-lg italic text-bone/75">{t}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="border-y border-white/[0.07] bg-ink-900/60 py-5">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="flex animate-marquee">
          <Row />
          <Row ariaHidden />
        </div>
      </div>
    </div>
  )
}
