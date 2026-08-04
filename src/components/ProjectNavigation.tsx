import { motion } from 'framer-motion'
import {
  PieChart,
  BookOpenText,
  ListChecks,
  Gamepad2,
  Images,
  type LucideIcon,
} from 'lucide-react'
import { SectionTitle } from './SectionTitle'

interface NavigationCard {
  href: string
  icon: LucideIcon
  title: string
  text: string
  bg: string
  iconBg: string
}

const navCards: NavigationCard[] = [
  {
    href: '#resultados',
    icon: PieChart,
    title: 'Resultados de la encuesta',
    text: 'Descubrí qué eligió nuestra comunidad.',
    bg: '#e9f0d8',
    iconBg: '#d4e3bc',
  },
  {
    href: '#glosario',
    icon: BookOpenText,
    title: 'Glosario matero',
    text: 'Conocé las palabras, los yuyos, las frutas y los ingredientes.',
    bg: '#fdeecb',
    iconBg: '#f2d995',
  },
  {
    href: '#elementos',
    icon: ListChecks,
    title: 'Elementos y acciones',
    text: 'Aprendé qué utilizamos y cómo preparamos mate y tereré.',
    bg: '#f3e2d5',
    iconBg: '#e7c9b4',
  },
  {
    href: '#juegos',
    icon: Gamepad2,
    title: 'Juegos',
    text: 'Poné a prueba todo lo que aprendiste.',
    bg: '#fbe7e3',
    iconBg: '#f3ccc5',
  },
  {
    href: '#galeria',
    icon: Images,
    title: 'Galería',
    text: 'Recorré nuestro camino de investigación.',
    bg: '#e5f1f4',
    iconBg: '#c8e2e8',
  },
]

export function ProjectNavigation() {
  return (
    <section
      className="section section--tinted"
      id="navegacion"
      aria-labelledby="navegacion-title"
    >
      <div className="container">
        <SectionTitle
          kicker="Menú del recorrido"
          title="Navegá nuestro proyecto"
          subtitle="Explorá cada sección y descubrí todo lo que aprendimos sobre el mate y el tereré."
        />

        <div className="nav-grid">
          {navCards.map(
            (card, index) => {
              const Icon = card.icon

              return (
                <motion.a
                  key={card.href}
                  href={card.href}
                  className="nav-card"
                  style={{
                    background: card.bg,
                  }}
                  initial={{
                    opacity: 0,
                    y: 26,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      (index % 3) * 0.12,
                    ease: 'easeOut',
                  }}
                >
                  <span
                    className="nav-card__icon"
                    style={{
                      background:
                        card.iconBg,
                    }}
                    aria-hidden="true"
                  >
                    <Icon
                      size={48}
                      strokeWidth={1.8}
                    />
                  </span>

                  <h3>{card.title}</h3>
                  <p>{card.text}</p>

                  <span
                    className="nav-card__go"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </motion.a>
              )
            },
          )}
        </div>
      </div>
    </section>
  )
}