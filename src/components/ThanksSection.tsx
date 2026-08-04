import { motion } from 'framer-motion'
import { siteConfig } from '../data/siteConfig'
import { AnimatedMateTerere } from './AnimatedMateTerere'
import './ThanksSection.css'

export function ThanksSection() {
  const projectData = [
    siteConfig.schoolName,
    siteConfig.grade,
    siteConfig.location,
    siteConfig.event,
    siteConfig.year,
  ].filter(Boolean)

  return (
    <section
      className="section thanks"
      aria-labelledby="gracias-title"
    >
      <div className="container">
        <div className="thanks__layout">
          <motion.div
            className="thanks__art"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          >
            <AnimatedMateTerere />
          </motion.div>

          <motion.div
            className="thanks__text"
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <h2 id="gracias-title">
              ¡Gracias!
            </h2>

            <p>
              Agradecemos a todas las personas que nos acompañaron
              durante este proyecto.
            </p>

            <p>
              A nuestra escuela, a las familias, a la comunidad y a
              cada persona que compartió sus conocimientos, sus
              costumbres y sus experiencias.
            </p>

            <blockquote className="thanks__phrase">
              ¡Un sentimiento que nos une!
            </blockquote>

            <div
              className="thanks__meta"
              aria-label="Datos del proyecto"
            >
              {projectData.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>

            <p className="thanks__note">
              Hecho con dedicación, curiosidad y muchas ganas de
              compartir.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}