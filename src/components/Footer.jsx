import { IconLinkedin, IconYoutube, IconInstagram, IconArrowUpRight } from './Icons'

const links = [
  { label: 'Accueil', href: '#top' },
  { label: 'Réalisations', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#about' },
  { label: 'Processus', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { Icon: IconLinkedin, href: '#', label: 'LinkedIn' },
  { Icon: IconInstagram, href: '#', label: 'Instagram' },
  { Icon: IconYoutube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-16">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-orange/10 blur-[130px]" />

      <div className="container-x relative">
        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-orange opacity-60" />
                <span className="inline-flex h-2 w-2 rounded-full bg-orange" />
              </span>
              Disponible pour missions
            </p>
            <h3 className="mt-5 display-section font-display font-semibold">
              Faisons décoller <br className="hidden sm:block" />
              <span className="font-accent text-orange">votre contenu</span>.
            </h3>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Démarrer un projet
            <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* nav + socials */}
        <div className="flex flex-col items-center justify-between gap-8 py-12 md:flex-row md:items-start">
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] font-medium uppercase tracking-[0.1em] text-sand transition-colors hover:text-bone">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(({ Icon, href, label, ext }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="icon-btn h-10 w-10"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* oversized wordmark */}
        <div className="relative -mb-6 select-none overflow-hidden md:-mb-10">
          <div className="bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text text-center font-sans text-[24vw] font-extrabold uppercase leading-none tracking-tighter text-transparent">
            Herbert
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-8 text-sm text-dim md:flex-row">
          <p>© {new Date().getFullYear()} Herbert. Tous droits réservés.</p>
          <p className="text-center md:text-right">
            Réalisé par <span className="font-semibold text-orange">Ismodev12</span>
            <span className="mx-2 text-white/20">·</span>
            Vous voulez un portfolio comme celui-ci ?{' '}
            <a
              href="mailto:salifoukayodeism@gmail.com"
              className="font-medium text-orange transition-colors hover:text-orange-soft"
            >
              salifoukayodeism@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
