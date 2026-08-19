import { useEffect, useState } from 'react'

const links = [
  { label: 'Accueil', href: '#top', id: 'top' },
  { label: 'Réalisations', href: '#work', id: 'work' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'À propos', href: '#about', id: 'about' },
  { label: 'Processus', href: '#process', id: 'process' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = [...links.map((l) => l.id), 'testimonials', 'contact']
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'border border-white/10 bg-ink-900/80 backdrop-blur-xl'
              : 'border border-transparent max-lg:bg-ink-900/70 max-lg:backdrop-blur-xl max-lg:border-white/10'
          }`}
        >
          {/* logo */}
          <a href="#top" className="flex items-center">
            <img
              src="/LOGO.jpg"
              alt="Herbert - Funnel Builder & Monteur Vidéo IA"
              className="h-9 w-auto mix-blend-lighten md:h-11"
            />
          </a>

          {/* links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium uppercase tracking-[0.1em] transition-colors ${
                    active === l.id ? 'text-bone' : 'text-sand hover:text-bone'
                  }`}
                >
                  {active === l.id && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]" />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden btn-primary !px-6 !py-2.5 sm:inline-flex">
              Me contacter
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-bone transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-bone transition-all ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-bone transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            open ? 'mt-2 max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 rounded-4xl border border-white/[0.08] bg-ink-900/95 backdrop-blur-xl p-3">
            {[...links, { label: 'Contact', href: '#contact', id: 'contact' }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.1em] text-sand hover:bg-white/5 hover:text-bone"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
