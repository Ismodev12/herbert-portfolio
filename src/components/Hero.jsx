import { motion } from 'framer-motion'
import { IconLinkedin, IconYoutube, IconInstagram, IconArrow } from './Icons'
import { usePhoto } from './usePhoto'

const socials = [
  { Icon: IconLinkedin, href: '#', label: 'LinkedIn' },
  { Icon: IconInstagram, href: '#', label: 'Instagram' },
  { Icon: IconYoutube, href: '#', label: 'YouTube' },
]

const stats = [
  { v: '480+', l: 'Vidéos montées' },
  { v: '72', l: 'Tunnels livrés' },
  { v: '38M', l: 'Vues générées' },
]

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.12 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const photo = usePhoto()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-0 h-[620px] w-[620px] rounded-full bg-orange/12 blur-[150px]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-deep/10 blur-[140px]" />
      </div>

      <div className="container-x relative flex min-h-screen flex-col justify-center pb-10 pt-32 lg:pt-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* copy */}
          <div className="lg:col-span-6 lg:pr-6">
            <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-orange">
                  Funnel Builder &amp; Monteur Vidéo IA
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-8 text-xl text-sand sm:text-2xl"
            >
              Bonjour, je suis <span className="font-semibold text-bone">Herbert</span>.
            </motion.p>

            <motion.h1
              variants={fade}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-3 display-hero font-display font-semibold text-balance"
            >
              J'aide les entreprises à transformer leurs idées en vidéos qui{' '}
              <span className="font-accent text-orange">captivent</span> &amp; en tunnels qui{' '}
              <span className="font-accent text-orange">convertissent</span>.
            </motion.h1>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-8 max-w-md text-[15px] leading-relaxed text-sand"
            >
              Des vidéos percutantes, des tunnels de vente efficaces. Une stratégie claire, de la
              première image au dernier clic d'achat, pour convertir plus.
            </motion.p>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#work" className="btn-primary">
                Voir mes réalisations
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-outline">
                Parlons de votre projet
              </a>
            </motion.div>
          </div>

          {/* photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none lg:-mr-4 xl:-mr-10">
              {/* soft halo behind the subject */}
              <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[45%] bg-orange/15 blur-[100px]" />

              <div className="relative aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src={photo.src}
                  onError={photo.onError}
                  alt="Herbert, Funnel Builder & Monteur Vidéo IA"
                  className="photo-fade h-full w-full object-cover object-top [filter:contrast(1.06)_brightness(0.94)_saturate(1.05)]"
                />
                {/* melt the photo into the page */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/15 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange/12 via-transparent to-transparent mix-blend-overlay" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom stats strip */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.l} className="flex items-baseline gap-2.5">
                <span className="font-display text-3xl font-semibold text-bone">{s.v}</span>
                <span className="text-sm text-sand">{s.l}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href, label, ext }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sand transition-colors hover:text-orange"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* vertical rail */}
      <div className="pointer-events-none absolute inset-y-0 right-5 hidden items-center 2xl:flex">
        <a
          href="#work"
          className="pointer-events-auto flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-sand transition-colors hover:text-bone [writing-mode:vertical-rl]"
        >
          Découvrir
          <span className="h-14 w-px bg-white/20" />
        </a>
      </div>
    </section>
  )
}
