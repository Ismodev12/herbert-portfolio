import Reveal, { SectionHeader } from './Reveal'
import { IconSearch, IconPen, IconMonitor, IconRocket } from './Icons'

const steps = [
  { id: '01', Icon: IconSearch, title: 'Découverte', desc: "On échange, j'analyse vos besoins, votre audience et vos objectifs." },
  { id: '02', Icon: IconPen, title: 'Création', desc: 'Je conçois le concept créatif, le script et le storyboard.' },
  { id: '03', Icon: IconMonitor, title: 'Réalisation', desc: 'Montage, tunnel, intégration et mise en œuvre complète.' },
  { id: '04', Icon: IconRocket, title: 'Lancement', desc: 'On lance, on mesure les données et on optimise ensemble.' },
]

export default function Process() {
  return (
    <section id="process" className="bg-ink-950 py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          index="05"
          label="Processus"
          title={<>De l'idée à <span className="font-accent text-orange">l'impact</span>.</>}
          description="Une collaboration fluide et transparente, pensée pour vous faire gagner du temps à chaque étape."
        />

        <div className="relative grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/12 to-transparent lg:block" />

          {steps.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <div className="group relative">
                <div className="relative flex items-center justify-between">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-white/12 bg-ink-900 text-bone transition-all duration-300 group-hover:-translate-y-1 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                    <s.Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-5xl font-medium text-white/[0.08]">{s.id}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-sand">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
