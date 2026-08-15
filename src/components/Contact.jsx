import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal, { Eyebrow } from './Reveal'
import { IconArrow, IconMail, IconPhone, IconMapPin, IconWhatsapp } from './Icons'
import { EMAILJS, CONTACT_EMAIL, isEmailjsConfigured } from '../emailjs.config'

const coords = [
  { Icon: IconPhone, label: '+229 01 53 62 04 18', sub: 'Téléphone / WhatsApp', href: 'tel:+2290153620418' },
  { Icon: IconMail, label: CONTACT_EMAIL, sub: 'Email', href: `mailto:${CONTACT_EMAIL}` },
  { Icon: IconMapPin, label: 'Basé en Afrique · dans le monde', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()

    // Repli mailto tant qu'EmailJS n'est pas configuré
    if (!isEmailjsConfigured()) {
      const subject = encodeURIComponent(form.subject || 'Nouveau projet')
      const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
          time: new Date().toLocaleString('fr-FR'),
          to_email: CONTACT_EMAIL,
        },
        EMAILJS.publicKey
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-ink-900 py-20 md:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* left */}
          <div>
            <Reveal>
              <Eyebrow index="06">Un projet en tête ?</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 display-section font-display font-semibold">
                Parlons de <span className="font-accent text-orange">votre projet</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-sand">
                Une vidéo à monter, un tunnel à construire, ou simplement une idée à explorer ?
                Remplissez le formulaire et je vous réponds sous 24h.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="mt-10 space-y-4">
                {coords.map(({ Icon, label, sub, href, ext }) => {
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange/15 text-orange transition-colors group-hover/c:bg-orange group-hover/c:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col leading-tight">
                        {sub && (
                          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sand">
                            {sub}
                          </span>
                        )}
                        <span className="text-[15px] font-medium text-bone/90">{label}</span>
                      </span>
                    </>
                  )
                  return (
                    <li key={sub || label}>
                      {href ? (
                        <a
                          href={href}
                          {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="group/c flex items-center gap-4 transition-colors hover:text-orange"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{inner}</div>
                      )}
                    </li>
                  )
                })}
              </ul>

              <a
                href="https://wa.me/2290153620418"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                <IconWhatsapp className="h-4 w-4" /> Écrire sur WhatsApp
              </a>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.18}>
            <form onSubmit={onSubmit} className="rounded-4xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nom complet *" name="name" value={form.name} onChange={onChange} placeholder="Votre nom" required />
                <Field label="Email *" name="email" type="email" value={form.email} onChange={onChange} placeholder="vous@email.com" required />
              </div>
              <div className="mt-4">
                <Field label="Sujet de votre projet *" name="subject" value={form.subject} onChange={onChange} placeholder="Ex : Montage de mes shorts + tunnel" required />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-bone/80">Décrivez votre projet *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  required
                  placeholder="Parlez-moi de vos objectifs…"
                  className="w-full resize-none rounded-2xl border border-white/15 bg-ink-950 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-dim focus:border-orange"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending'
                  ? 'Envoi en cours…'
                  : status === 'success'
                    ? 'Message envoyé ✓'
                    : 'Envoyer ma demande'}
                {status !== 'sending' && (
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

              {status === 'success' && (
                <p className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                  Merci ! Votre message a bien été envoyé. Je vous réponds sous 24h.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  Une erreur est survenue. Réessayez, ou écrivez-moi directement à {CONTACT_EMAIL}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-bone/80">{label}</label>
      <input
        {...props}
        className="w-full rounded-2xl border border-white/15 bg-ink-950 px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-dim focus:border-orange"
      />
    </div>
  )
}
