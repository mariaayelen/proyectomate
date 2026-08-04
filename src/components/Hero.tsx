import { motion } from 'framer-motion'
import { Compass, BarChart3 } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import portadaImg from '../assets/photos/portada.jpg'
import './Hero.css'


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' as const },
  }),
}

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Portada del proyecto">
      

      <div className="container hero__grid">
        <div className="hero__text">
          <motion.p
            className="hero__badge"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
          >
            <span aria-hidden="true">✦</span> {siteConfig.event} · {siteConfig.year}{' '}
            <span aria-hidden="true">✦</span>
          </motion.p>

          <motion.h1
            className="hero__title"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
          >
            {siteConfig.projectName}
          </motion.h1>

          <motion.p className="hero__tagline" variants={fadeUp} custom={2} initial="hidden" animate="show">
            {siteConfig.tagline}
          </motion.p>

          <motion.p className="hero__phrase" variants={fadeUp} custom={3} initial="hidden" animate="show">
            {siteConfig.phrase}
          </motion.p>

          <motion.p className="hero__intro" variants={fadeUp} custom={4} initial="hidden" animate="show">
            Investigamos cómo el mate y el tereré forman parte de nuestra vida cotidiana, qué yuyos
            y sabores elegimos y qué historias compartimos alrededor de estas infusiones.
          </motion.p>

          <motion.div
            className="hero__meta"
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate="show"
          >
            {[siteConfig.event, siteConfig.grade, siteConfig.schoolName, siteConfig.location, siteConfig.year].map(
              (item, i) => (
                <span key={i} className="hero__meta-item">
                  {item}
                </span>
              ),
            )}
          </motion.div>

          <motion.div
            className="hero__actions"
            variants={fadeUp}
            custom={6}
            initial="hidden"
            animate="show"
          >
            <a href="#navegacion" className="btn btn--green">
              <Compass size={22} aria-hidden="true" />
              Explorar el proyecto
            </a>
            <a href="#resultados" className="btn">
              <BarChart3 size={22} aria-hidden="true" />
              Ver resultados
            </a>
          </motion.div>
        </div>

        <motion.div
  className="hero__art"
  initial={{ opacity: 0, x: 34 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
>
  <img
    src={portadaImg}
    alt="Estudiantes participantes del proyecto Mate y Tereré"
    className="hero__photo"
  />
</motion.div>
      </div>
    </section>
  )
}
