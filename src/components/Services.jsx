import Reveal, { SectionHeader } from './Reveal'
import { IconArrowUpRight } from './Icons'

const services = [
  {
    id: '01',
    title: 'Montage Vidéo IA',
    desc:
      "Short-form viral, YouTube, publicités et films produits. Rythme, sous-titres dynamiques, sound design et B-rolls générés par IA, pour un rendu premium en un temps record.",
    tags: ['Short-form', 'YouTube', 'Film produit', 'Ads'],
  },
  {
    id: '02',
    title: 'Funnel Building',
    desc:
      "Des tunnels de vente qui attirent, engagent et convertissent : landing pages, séquences email, upsells et automatisations pensées pour maximiser chaque euro investi.",
    tags: ['Landing', 'Email', 'Upsell', 'Automatisation'],
  },
  {
    id: '03',
    title: 'Stratégie de Contenu',
    desc:
      "Ligne éditoriale, hooks et calendrier de publication pour transformer votre audience en communauté engagée, et vos vues en clients.",
    tags: ['Hooks', 'Scripts', 'Planning'],
  },
  {
    id: '04',
    title: 'Automatisation IA',
    desc:
      "Voix off IA, avatars et repurposing automatique : un contenu long transformé en dizaines de formats courts, sans effort supplémentaire.",
    tags: ['Voix IA', 'Repurpose', 'Avatars'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-ink-900 py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          index="02"
          label="Services"
          title={<>Ce que <span className="font-accent text-orange">je fais</span>.</>}
          description="De la première image au dernier clic d'achat, je gère toute la chaîne de valeur de votre contenu."
        />

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 0.1}>
              <div className="group flex h-full flex-col border-t border-white/12 pt-7 transition-colors duration-300 hover:border-orange">
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-medium text-white/12 transition-colors duration-300 group-hover:text-orange/50">
                    {s.id}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-sand transition-all duration-300 group-hover:rotate-45 group-hover:border-orange group-hover:text-orange">
                    <IconArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-sand">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-sand"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
