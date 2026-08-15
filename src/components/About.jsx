import Reveal, { Eyebrow } from './Reveal'
import { IconArrowUpRight, IconGlobe } from './Icons'
import { usePhoto } from './usePhoto'

const specialties = ['Montage Vidéo IA', 'Storytelling', 'Stratégie de Tunnels', 'Optimisation Conversion']

export default function About() {
  const photo = usePhoto()

  return (
    <section id="about" className="relative overflow-hidden bg-ink-950 py-20 md:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-orange/10 blur-[150px]" />
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* photo */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-orange" />
              <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-orange/50" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-white/10">
                <img
                  src={photo.src}
                  onError={photo.onError}
                  alt="Herbert"
                  className="h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              </div>
              <span className="absolute -bottom-7 left-4 font-script text-5xl text-orange">Herbert</span>
            </div>
          </Reveal>

          {/* text */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow index="03">À propos</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 display-section font-display font-semibold text-balance">
                Qui est <span className="font-accent text-orange">Herbert</span> ?
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-sand">
                Je suis monteur vidéo IA & funnel builder. J'aide les marques et les entrepreneurs
                à créer des vidéos qui captivent et à concevoir des tunnels qui convertissent. Mon
                obsession&nbsp;: transformer l'attention en résultats concrets, mesurables, durables.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-sand">
                J'associe le meilleur des outils IA à un vrai sens du storytelling, pour produire
                plus vite, sans jamais sacrifier la qualité premium.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
                {specialties.map((s) => (
                  <div key={s} className="flex items-center gap-3 border-b border-white/10 py-4 text-[15px] font-medium text-bone">
                    <IconArrowUpRight className="h-4 w-4 shrink-0 text-orange" />
                    {s}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-sand">
                <IconGlobe className="h-5 w-5 text-orange" />
                Basé en Afrique · Travaille dans le monde
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
