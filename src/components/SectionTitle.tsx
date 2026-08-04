import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  id?: string
  kicker?: string
  title: string
  subtitle?: string
  icon?: ReactNode
}

export function SectionTitle({ id, kicker, title, subtitle, icon }: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      className="section-head"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="section-title-ribbon">
        {icon && <span style={{ marginRight: '0.4em' }}>{icon}</span>}
        {title}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  )
}
