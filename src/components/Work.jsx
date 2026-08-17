import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal, { SectionHeader } from './Reveal'
import { ProjectCover } from './ProjectCovers'
import { IconPlay, IconArrowUpRight, IconExpand } from './Icons'

const projects = [
  {
    id: '01',
    kind: 'video',
    cat: 'Présentation',
    title: 'Mes tunnels de vente',
    src: '/videos/presentation-tunnels.mp4',
    tags: ['Funnel', 'Présentation'],
    featured: true,
  },
  {
    id: '02',
    kind: 'image',
    cat: 'Tunnel de Vente',
    title: 'Master Librairie · Catalogue PLR',
    href: 'https://richjunior455-tunnel.systeme.io/be40a24c-9a4364aa',
    image: '/tunnel-plr.png',
    result: '100+ formations',
    tags: ['Systeme.io', 'PLR'],
  },
  {
    id: '03',
    kind: 'video',
    cat: 'Personal Branding',
    title: 'Jude Christ Dossou',
    src: '/videos/personal-branding-jude.mp4',
    tags: ['Montage', 'Branding'],
  },
  {
    id: '04',
    kind: 'video',
    cat: 'Publicité',
    title: 'Vidéo pub · Ebook',
    src: '/videos/pub-ebook.mp4',
    tags: ['Ads', 'Vidéo IA'],
  },
  {
    id: '05',
    kind: 'video',
    cat: 'Publicité',
    title: 'Vidéo pub · Guide',
    src: '/videos/pub-guide.mp4',
    tags: ['Ads', 'Vidéo IA'],
  },
  {
    id: '06',
    kind: 'funnel',
    cat: 'Tunnel de Vente',
    title: 'Tunnel · Formations PLR',
    href: 'https://richjunior455-tunnel.systeme.io/e6d2a557',
    cover: 'funnel2',
    result: 'Tunnel complet',
    tags: ['Systeme.io', 'Funnel'],
  },
  {
    id: '07',
    kind: 'image',
    cat: 'Site Culturel',
    title: 'Mémoire Lokpa · Culture Béninoise',
    href: 'https://herbertjr.systeme.io/3b19ad72',
    image: '/lokpa-culture.png',
    result: 'Site complet',
    tags: ['Systeme.io', 'Culture', 'Web Design'],
  },
  {
    id: '08',
    kind: 'image',
    cat: 'Tunnel de Vente',
    title: 'Tunnel · Ustensiles de Cuisine',
    href: 'https://richjunior455-tunnel.systeme.io/877e2347',
    image: '/tunnel-kitchen.png',
    result: 'Tunnel e-commerce',
    tags: ['Systeme.io', 'E-commerce', 'Funnel'],
  },
]

function InfoBar({ p, external }) {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-transparent p-6 pt-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="num-label">{p.id}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand">{p.cat}</span>
          </div>
          <h3 className={`font-display font-semibold leading-tight text-bone ${p.featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
            {p.title}
          </h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 translate-y-1 place-items-center rounded-full border border-white/15 text-bone opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:border-orange group-hover:bg-orange group-hover:opacity-100">
          <IconArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {p.result && (
          <span className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-3 py-1.5 text-xs font-semibold text-orange-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" /> {p.result}
          </span>
        )}
        {external && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-sand">
            Voir le tunnel <IconArrowUpRight className="h-3.5 w-3.5" />
          </span>
        )}
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-sand">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function VideoCard({ p, large, onOpen }) {
  const ref = useRef(null)

  const onEnter = () => {
    const v = ref.current
    if (v) v.play().catch(() => {})
  }
  const onLeave = () => {
    const v = ref.current
    if (v) {
      v.pause()
      v.currentTime = 0.1
    }
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(p)}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative block h-full w-full overflow-hidden rounded-4xl border border-white/[0.08] bg-ink-900 text-left"
    >
      <div className={`relative w-full overflow-hidden bg-black ${large ? 'aspect-[16/12] md:aspect-auto md:h-full md:min-h-[460px]' : 'aspect-[16/10]'}`}>
        <video
          ref={ref}
          src={`${p.src}#t=0.5`}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-16 w-16 place-items-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-orange group-hover:bg-orange/80">
            <IconPlay className="ml-0.5 h-6 w-6" />
          </span>
        </div>
      </div>
      <InfoBar p={p} />
    </button>
  )
}

function ImageCard({ p, large, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(p)}
      className="group relative block h-full w-full overflow-hidden rounded-4xl border border-white/[0.08] bg-ink-900 text-left"
    >
      <div className={`relative w-full overflow-hidden ${large ? 'aspect-[16/12] md:aspect-auto md:h-full md:min-h-[460px]' : 'aspect-[16/10]'}`}>
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 grain opacity-25" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-16 w-16 place-items-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-orange group-hover:bg-orange/80">
            <IconExpand className="h-6 w-6" />
          </span>
        </div>
      </div>
      <InfoBar p={p} external />
    </button>
  )
}

function FunnelCard({ p }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full overflow-hidden rounded-4xl border border-white/[0.08] bg-ink-900"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
          <ProjectCover type={p.cover} />
        </div>
        <div className="absolute inset-0 grain opacity-40" />
      </div>
      <InfoBar p={p} external />
    </a>
  )
}

export default function Work() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  const render = (p, large = false) => {
    if (p.kind === 'video') return <VideoCard p={p} large={large} onOpen={setActive} />
    if (p.kind === 'image') return <ImageCard p={p} large={large} onOpen={setActive} />
    return <FunnelCard p={p} />
  }

  return (
    <section id="work" className="bg-ink-950 py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          index="01"
          label="Réalisations"
          title={<>Mes projets <span className="font-accent text-orange">sélectionnés</span>.</>}
          description="Des montages vidéo et des tunnels de vente réels, réalisés pour de vrais clients."
          action={
            <a href="#contact" className="link-arrow">
              Travaillons ensemble <IconArrowUpRight className="h-4 w-4" />
            </a>
          }
        />

        {/* featured row */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full">{render(projects[0], true)}</div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Reveal delay={0.08}>{render(projects[1])}</Reveal>
            <Reveal delay={0.14}>{render(projects[2])}</Reveal>
          </div>
        </div>

        {/* secondary row */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.slice(3).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              {render(p)}
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink-950/90 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange">{active.cat}</p>
                  <h3 className="font-display text-2xl font-semibold text-bone">{active.title}</h3>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Fermer"
                  className="icon-btn h-11 w-11 shrink-0"
                >
                  <span className="text-xl leading-none">&times;</span>
                </button>
              </div>

              {active.kind === 'image' ? (
                <>
                  <div className="max-h-[68vh] overflow-auto rounded-2xl border border-white/10 bg-white">
                    <img src={active.image} alt={active.title} className="w-full" />
                  </div>
                  <a
                    href={active.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-4"
                  >
                    Ouvrir le tunnel <IconArrowUpRight className="h-4 w-4" />
                  </a>
                </>
              ) : (
                <video
                  src={active.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[75vh] w-full rounded-2xl border border-white/10 bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
