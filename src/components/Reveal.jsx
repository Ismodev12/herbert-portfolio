import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 26, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* Small editorial eyebrow: (index) - LABEL */
export function Eyebrow({ index, children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {index && <span className="font-display text-sm text-orange">({index})</span>}
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sand">
        {children}
      </span>
    </div>
  )
}

/* Reusable section header used across the whole site for a cohesive rhythm */
export function SectionHeader({ index, label, title, description, action, className = '' }) {
  return (
    <div className={`mb-12 grid gap-8 md:mb-16 md:grid-cols-12 md:items-end ${className}`}>
      <div className="md:col-span-8">
        <Reveal>
          <Eyebrow index={index}>{label}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 display-section font-display font-semibold text-balance">{title}</h2>
        </Reveal>
      </div>
      {(description || action) && (
        <Reveal delay={0.12} className="md:col-span-4 md:pb-2 md:text-right">
          {description && (
            <p className="text-[15px] leading-relaxed text-sand md:ml-auto md:max-w-xs">
              {description}
            </p>
          )}
          {action && <div className="mt-6 md:flex md:justify-end">{action}</div>}
        </Reveal>
      )}
    </div>
  )
}
