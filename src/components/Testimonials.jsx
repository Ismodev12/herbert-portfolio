import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal, { Eyebrow } from './Reveal'
import { IconArrow } from './Icons'

const testimonials = [
  { quote: "Herbert a transformé mes lives en une véritable machine à contenu. Mes shorts font x5 en vues et mon tunnel convertit enfin. Un vrai game-changer.", name: 'Sarah Mensah', role: 'Coach business', company: '@sarah.scale', result: 'Shorts ×5 en vues', initials: 'SM', photo: '/avatars/sarah.jpg' },
  { quote: "Rapide, créatif et surtout orienté résultats. Le montage de mes VSL a directement fait grimper mon taux de closing. Je recommande à 200%.", name: 'Kevin Dossou', role: 'Infopreneur', company: 'Closing Academy', result: '+38% de closing', initials: 'KD', photo: '/avatars/kevin.jpg' },
  { quote: "On a industrialisé la production de ma chaîne YouTube sans jamais sacrifier la qualité. Herbert comprend l'IA ET le storytelling, c'est rare.", name: 'Amina Rahmani', role: 'Créatrice de contenu', company: '210K abonnés', result: '2,1M vues générées', initials: 'AR', photo: '/avatars/amina.jpg' },
  { quote: "Notre tunnel d'acquisition tournait à vide. Herbert a repensé toute la séquence : landing, VSL et emails. ROI positif dès le premier mois.", name: 'Thomas Leroy', role: 'Fondateur SaaS', company: 'Flowly', result: 'ROI positif en 30j', initials: 'TL', photo: '/avatars/thomas.jpg' },
  { quote: "Des créas publicitaires qui claquent et qui performent. Mes campagnes n'ont jamais aussi bien tourné. Un partenaire de confiance sur le long terme.", name: 'Fatou Ndiaye', role: 'Coach fitness', company: 'FitByFatou', result: 'ROAS 4,2', initials: 'FN', photo: '/avatars/fatou.jpg' },
  { quote: "Le film produit qu'il a monté a boosté nos ventes du jour au lendemain. Un rendu cinématographique premium, livré ultra rapidement. Bluffant.", name: 'Julien Perrot', role: 'E-commerçant', company: 'AURA Cosmetics', result: '+180% d’engagement', initials: 'JP', photo: '/avatars/julien.jpg' },
  { quote: "J'ai lancé mon offre high-ticket avec le tunnel conçu par Herbert. Structure claire, copy percutant, automatisations au point. Les ventes ont suivi.", name: 'Léa Boucher', role: 'Consultante', company: 'Mindset Élite', result: '18% de conversion', initials: 'LB', photo: '/avatars/lea.jpg' },
]

const N = testimonials.length
const AUTOPLAY = 6000

function Stars() {
  return (
    <div className="flex gap-1 text-orange">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
        </svg>
      ))}
    </div>
  )
}

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 70 : -70, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -70 : 70, opacity: 0 }),
}

export default function Testimonials() {
  const [[index, dir], setState] = useState([0, 0])
  const [paused, setPaused] = useState(false)

  const paginate = useCallback((d) => setState(([i]) => [(i + d + N) % N, d]), [])
  const goTo = (i) => setState(([cur]) => [i, i > cur ? 1 : -1])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => paginate(1), AUTOPLAY)
    return () => clearTimeout(t)
  }, [index, paused, paginate])

  const t = testimonials[index]

  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink-900 py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange/10 blur-[130px]" />

      <div className="container-x relative">
        {/* header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow index="04">Témoignages</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 display-section font-display font-semibold">
                Ils m'ont fait <span className="font-accent text-orange">confiance</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4">
              <span className="font-display text-sm text-sand">
                {String(index + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
              </span>
              <button onClick={() => paginate(-1)} aria-label="Précédent" className="icon-btn h-12 w-12">
                <IconArrow className="h-5 w-5 rotate-180" />
              </button>
              <button onClick={() => paginate(1)} aria-label="Suivant" className="icon-btn h-12 w-12">
                <IconArrow className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* card */}
        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="relative min-h-[380px] overflow-hidden rounded-4xl border border-white/[0.08] bg-white/[0.02] p-8 sm:min-h-[340px] sm:p-12 md:p-16">
            <span className="pointer-events-none absolute right-8 top-0 font-display text-[11rem] italic leading-none text-orange/10 select-none">
              &rdquo;
            </span>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Stars />
                <blockquote className="mt-6 max-w-3xl font-display text-2xl font-medium leading-[1.45] text-bone sm:text-3xl md:text-[2rem]">
                  {t.quote}
                </blockquote>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-white/[0.08] pt-6">
                  <div className="flex items-center gap-4">
                    {t.photo ? (
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-orange/40"
                      />
                    ) : (
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-soft to-orange-deep text-base font-bold text-white">
                        {t.initials}
                      </span>
                    )}
                    <div>
                      <p className="font-display text-lg font-semibold leading-tight text-bone">{t.name}</p>
                      <p className="text-sm text-sand">
                        {t.role} · <span className="text-orange/80">{t.company}</span>
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-4 py-2 text-sm font-semibold text-orange-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" /> {t.result}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* dots */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Témoignage ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-orange' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
