import { useState } from 'react'
import {
  motion,
  AnimatePresence,
} from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { Artwork } from './illustrations/IconRegistry'
import { Sprig } from './illustrations/DecorativeLeaves'

type DrinkMode = 'mate' | 'terere'

interface PreparationStep {
  id: string
  title: string
  description: string
  icon: string
}

interface PreparationSequence {
  mode: DrinkMode
  title: string
  steps: PreparationStep[]
}

const elements = [
  {
    name: 'Mate',
    icon: 'mate',
  },
  {
    name: 'Bombilla',
    icon: 'bombilla',
  },
  {
    name: 'Termo',
    icon: 'termo',
  },
  {
    name: 'Guampa',
    icon: 'guampa',
  },
  {
    name: 'Jarra',
    icon: 'jarra',
  },
  {
    name: 'Vaso',
    icon: 'vaso',
  },
]

const actions = [
  {
    name: 'Preparar',
    icon: 'preparar',
    description:
      'Organizar y combinar los elementos necesarios para hacer mate o tereré.',
  },
  {
    name: 'Cebar',
    icon: 'cebar',
    description:
      'Servir el agua o la preparación sobre la yerba.',
  },
  {
    name: 'Tomar',
    icon: 'tomar',
    description:
      'Beber el mate o el tereré utilizando la bombilla.',
  },
  {
    name: 'Colar',
    icon: 'colar',
    description:
      'Pasar el jugo o el agua por un colador para evitar restos de frutas o hierbas.',
  },
  {
    name: 'Agitar',
    icon: 'agitar',
    description:
      'Mover la yerba o la preparación antes de servir.',
  },
  {
    name: 'Compartir',
    icon: 'compartir',
    description:
      'Tomar mate o tereré en ronda con otras personas.',
  },
]

const preparationSequences: PreparationSequence[] = [
  {
    mode: 'mate',
    title: 'Cómo preparamos mate',
    steps: [
      {
        id: 'mate-calentar',
        title: 'Calentar el agua',
        description:
          'Calentamos el agua entre 70 y 80 grados, sin dejar que hierva, para no quemar la yerba.',
        icon: 'termo',
      },
      {
        id: 'mate-colocar-yerba',
        title: 'Colocar la yerba',
        description:
          'Colocamos yerba dentro del mate hasta la mitad o un poco más.',
        icon: 'yerba',
      },
      {
        id: 'mate-acomodar',
        title: 'Acomodar la yerba',
        description:
          'Inclinamos el mate y lo agitamos suavemente para acomodar la yerba hacia un costado.',
        icon: 'agitar',
      },
      {
        id: 'mate-bombilla',
        title: 'Colocar la bombilla',
        description:
          'Colocamos la bombilla en la parte más baja, procurando no moverla después.',
        icon: 'bombilla',
      },
      {
        id: 'mate-cebar',
        title: 'Cebar con agua',
        description:
          'Servimos el agua caliente lentamente, siempre cerca de la bombilla.',
        icon: 'cebar',
      },
      {
        id: 'mate-compartir',
        title: 'Tomar y compartir',
        description:
          'Tomamos el mate y lo compartimos en ronda, volviendo a cebar cada vez.',
        icon: 'compartir',
      },
    ],
  },
  {
    mode: 'terere',
    title: 'Cómo preparamos tereré',
    steps: [
      {
        id: 'terere-preparar',
        title: 'Preparar el agua o el jugo',
        description:
          'Preparamos agua fría, jugo exprimido, frutas o yuyos para darle sabor.',
        icon: 'jugo',
      },
      {
        id: 'terere-colar',
        title: 'Colar la preparación',
        description:
          'Pasamos el jugo o el agua por un colador para evitar restos de frutas o hierbas.',
        icon: 'colar',
      },
      {
        id: 'terere-hielo',
        title: 'Agregar hielo',
        description:
          'Agregamos hielo para mantener bien fría y refrescante la preparación.',
        icon: 'hielo',
      },
      {
        id: 'terere-yerba',
        title: 'Colocar la yerba',
        description:
          'Colocamos yerba dentro de la guampa hasta aproximadamente la mitad.',
        icon: 'yerba',
      },
      {
        id: 'terere-agitar',
        title: 'Agitar o acomodar la yerba',
        description:
          'Movemos suavemente la guampa para acomodar la yerba antes de servir.',
        icon: 'agitar',
      },
      {
        id: 'terere-bombilla',
        title: 'Colocar la bombilla',
        description:
          'Colocamos la bombilla en la parte más baja de la guampa.',
        icon: 'bombilla',
      },
      {
        id: 'terere-cebar',
        title: 'Cebar con la preparación fría',
        description:
          'Servimos lentamente el agua fría o el jugo cerca de la bombilla.',
        icon: 'cebar',
      },
      {
        id: 'terere-compartir',
        title: 'Tomar y compartir',
        description:
          'Tomamos el tereré y lo compartimos en ronda, volviendo a cebar.',
        icon: 'compartir',
      },
    ],
  },
]

export function ElementsActions() {
  const [mode, setMode] =
    useState<DrinkMode>('mate')

  const sequence =
    preparationSequences.find(
      (item) => item.mode === mode,
    ) ?? preparationSequences[0]

  return (
    <section
      className="section section--alt elements"
      id="elementos"
      aria-labelledby="elementos-title"
    >
      <div className="container">
        <SectionTitle
          kicker="Lo que usamos y lo que hacemos"
          title="Elementos y acciones"
          subtitle="Conocé los utensilios, las acciones y los pasos que seguimos para preparar mate o tereré."
        />

        <div
          className="elements__tabs"
          role="tablist"
          aria-label="Elegí una preparación"
        >
          {preparationSequences.map((item) => (
            <button
              key={item.mode}
              type="button"
              role="tab"
              id={`tab-${item.mode}`}
              aria-selected={mode === item.mode}
              aria-controls={`panel-${item.mode}`}
              className={`chip ${
                mode === item.mode
                  ? 'chip--active'
                  : ''
              }`}
              onClick={() => setMode(item.mode)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="elements__layout">
          {/* COLUMNA 1: ELEMENTOS Y ACCIONES */}

          <div className="elements__column elements__column--items">
            <h3 className="elements__column-title">
              Elementos
            </h3>

            <ul className="elements__items">
              {elements.map((element, index) => (
                <motion.li
                  key={element.name}
                  className="elements__item"
                  initial={{
                    opacity: 0,
                    y: 14,
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
                    duration: 0.4,
                    delay: (index % 6) * 0.06,
                    ease: 'easeOut',
                  }}
                >
                  <span
                    className="elements__item-art"
                    aria-hidden="true"
                  >
                    <Artwork
                      name={element.icon}
                      size="100%"
                    />
                  </span>

                  <strong>{element.name}</strong>
                </motion.li>
              ))}
            </ul>

            <h3
              className="elements__column-title"
              style={{ marginTop: '2rem' }}
            >
              Acciones
            </h3>

            <ul className="elements__items elements__items--actions">
              {actions.map((action, index) => (
                <motion.li
                  key={action.name}
                  className="elements__item elements__item--action"
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 6) * 0.06,
                    ease: 'easeOut',
                  }}
                >
                  <span
                    className="elements__item-art"
                    aria-hidden="true"
                  >
                    <Artwork
                      name={action.icon}
                      size="100%"
                    />
                  </span>

                  <span className="elements__item-text">
                    <strong>{action.name}</strong>
                    <small>{action.description}</small>
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 2: PREPARACIÓN */}

          <div className="elements__column elements__column--steps">
            <h3 className="elements__column-title">
              {sequence.title}
            </h3>

            <AnimatePresence mode="wait">
              <motion.ol
                key={mode}
                role="tabpanel"
                id={`panel-${mode}`}
                aria-labelledby={`tab-${mode}`}
                className="elements__steps"
                initial={{
                  opacity: 0,
                  x: 24,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -24,
                }}
                transition={{
                  duration: 0.35,
                  ease: 'easeOut',
                }}
              >
                {sequence.steps.map(
                  (step, index) => (
                    <motion.li
                      key={step.id}
                      className="elements__step"
                      initial={{
                        opacity: 0,
                        y: 16,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                        ease: 'easeOut',
                      }}
                    >
                      <span
                        className="elements__step-num"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>

                      <span
                        className="elements__step-art"
                        aria-hidden="true"
                      >
                        <Artwork
                          name={step.icon}
                          size="100%"
                        />
                      </span>

                      <span className="elements__step-body">
                        <strong>{step.title}</strong>
                        <small>
                          {step.description}
                        </small>
                      </span>
                    </motion.li>
                  ),
                )}
              </motion.ol>
            </AnimatePresence>
          </div>
        </div>

        <Sprig className="elements__sprig" />
      </div>
    </section>
  )
}