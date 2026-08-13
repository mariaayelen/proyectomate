import { motion } from 'framer-motion'
import {
  Eye,
  MessageCircle,
  Search,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { Artwork } from './illustrations/IconRegistry'
import './WelcomeSection.css'

interface ResearchStep {
  title: string
  text: string
  icon: LucideIcon
}

const steps: ResearchStep[] = [
  {
    title: 'Observamos',
    text: 'Miramos cómo se comparte el mate y el tereré en casa y en la escuela.',
    icon: Eye,
  },
  {
    title: 'Preguntamos',
    text: 'Conversamos con las familias sobre sus costumbres y preferencias.',
    icon: MessageCircle,
  },
  {
    title: 'Investigamos',
    text: 'Buscamos información sobre el origen del mate, la cultura guaraní y las tradiciones materas.',
    icon: Search,
  },
  {
    title: 'Compartimos',
    text: 'Realizamos una jornada matera donde cada estudiante compartió las costumbres de su familia.',
    icon: Users,
  },
]

export function WelcomeSection() {
  return (
    <section
      className="section section--alt welcome"
      aria-labelledby="bienvenida-title"
    >
      <div className="container">
        <div className="welcome__card card card--stitched">
          <div className="welcome__ribbon" aria-hidden="true" />

          <div className="welcome__layout">
            <div className="welcome__text">
              <h2 id="bienvenida-title">¡Bienvenidos!</h2>

              <p>
                Somos estudiantes de {siteConfig.grade} de{' '}
                {siteConfig.schoolName}. En este proyecto de{' '}
                {siteConfig.event.toLowerCase()} investigamos los usos, las
                costumbres, los sabores y los significados del mate y el
                tereré en nuestra comunidad.
              </p>

              <p>
                Conversamos con las familias, realizamos encuestas,
                recopilamos palabras, reconocimos yuyos y sabores y
                compartimos experiencias relacionadas con estas infusiones.
              </p>

              <p>
                Te invitamos a recorrer nuestros descubrimientos, explorar
                el glosario y participar de los juegos.
              </p>
            </div>

            <div className="welcome__art">
              <Artwork name="mate" size="100%" />
            </div>
          </div>
        </div>

        <div className="welcome__steps">
          <h3 className="welcome__steps-title">
            ¿Cómo investigamos?
          </h3>

          <ol className="welcome__steps-list">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.li
                  key={step.title}
                  className="welcome__step card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.14,
                    ease: 'easeOut',
                  }}
                >
                  <span className="welcome__step-num">
                    {index + 1}
                  </span>

                  <div
                    className="welcome__step-icon"
                    aria-hidden="true"
                  >
                    <Icon
                      size={52}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}