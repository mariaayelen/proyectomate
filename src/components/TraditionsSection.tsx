import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { Artwork } from './illustrations/IconRegistry'
import { Heart } from './illustrations/DecorativeLeaves'

const traditions = [
  {
    title: 'En familia',
    text: 'Muchas personas aprenden a preparar y compartir mate o tereré observando a sus familias.',
    bg: '#fdeecb',
  },
  {
    title: 'Entre amigos',
    text: 'Una ronda de mate o tereré puede acompañar charlas, juegos, recreos y encuentros.',
    bg: '#fbe7e3',
  },
  {
    title: 'En nuestra comunidad',
    text: 'Cada familia tiene sus preferencias: amargo, dulce, con yuyos, con frutas, con jugo o solamente con agua.',
    bg: '#e9f0d8',
  },
]

export function TraditionsSection() {
  return (
    <section className="section traditions" aria-labelledby="tradiciones-title">
      <div className="container">
        <SectionTitle
          kicker="Nuestra comunidad"
          title="Tradiciones que nos reúnen"
          subtitle="El mate y el tereré no son solamente bebidas. También representan momentos de encuentro, conversaciones, costumbres familiares y formas de compartir."
        />

        <div className="traditions__layout">
          <div className="traditions__art">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <Artwork name="compartir" size="100%" />
            </motion.div>
          </div>

          <div className="traditions__cards">
            {traditions.map((t, i) => (
              <motion.article
                key={t.title}
                className="card card--lift traditions__card"
                style={{ background: t.bg }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              >
                <Heart size={34} className="traditions__heart" />
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.blockquote
          className="traditions__quote"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span aria-hidden="true">“</span>
          Cada mate y cada tereré guardan una historia.
          <span aria-hidden="true">”</span>
        </motion.blockquote>
      </div>
    </section>
  )
}
