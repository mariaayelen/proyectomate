import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Search } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import {
  flavorsData,
  flavorCategories,
  type FlavorCategory,
  type FlavorItem,
} from '../data/flavorsData'
import { Artwork } from './illustrations/IconRegistry'
import { Divider } from './illustrations/DecorativeLeaves'

const categoryBadge: Record<FlavorCategory, string> = {
  Hierbas: 'badge--herbs',
  Frutas: 'badge--fruits',
  Ingredientes: 'badge--ingredients',
  'Elementos básicos': 'badge--basics',
}

const GLOSSARY_PDF_URL = '/downloads/glosario-matero.pdf'

function FlavorFlipCard({
  item,
  index,
}: {
  item: FlavorItem
  index: number
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.article
      className="flavor-flip-wrap"
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.45,
        delay: (index % 4) * 0.07,
        ease: 'easeOut',
      }}
      layout
    >
      <button
        type="button"
        className={`flavor-flip ${
          flipped ? 'flavor-flip--flipped' : ''
        }`}
        onClick={() => setFlipped((value) => !value)}
        aria-pressed={flipped}
        aria-label={
          flipped
            ? `Cerrar la definición de ${item.name}`
            : `Descubrir la definición de ${item.name}`
        }
      >
        {/* Frente de la tarjeta */}

        <span className="flavor-flip__face flavor-flip__face--front">
          <span
            className={`badge ${
              categoryBadge[item.category]
            }`}
          >
            {item.category}
          </span>

          <span
            className="flavor-flip__art"
            aria-hidden="true"
          >
            <Artwork
              name={item.icon}
              size="100%"
            />
          </span>

          <strong className="flavor-flip__name">
            {item.name}
          </strong>

          <small className="flavor-flip__hint">
            Tocá para descubrir
          </small>
        </span>

        {/* Reverso de la tarjeta */}

        <span className="flavor-flip__face flavor-flip__face--back">
          <span
            className="flavor-flip__back-art"
            aria-hidden="true"
          >
            <Artwork
              name={item.icon}
              size="100%"
            />
          </span>

          <strong className="flavor-flip__name">
            {item.name}
          </strong>

          <span className="flavor-flip__definition">
            {item.definition}
          </span>

          <small className="flavor-flip__hint flavor-flip__hint--back">
            Tocá para volver
          </small>
        </span>
      </button>
    </motion.article>
  )
}

export function FlavorsSection() {
  const [category, setCategory] =
    useState<FlavorCategory | 'Todas'>('Todas')

  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLowerCase()

    return flavorsData.filter((item) => {
      const matchesCategory =
        category === 'Todas' ||
        item.category === category

      const matchesQuery =
        normalizedQuery === '' ||
        item.name
          .toLowerCase()
          .includes(normalizedQuery) ||
        item.definition
          .toLowerCase()
          .includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const showAll = () => {
    setCategory('Todas')
    setQuery('')
  }

  return (
    <section
      className="section section--tinted flavors"
      id="glosario"
      aria-labelledby="glosario-title"
    >
      <div className="container">
        <SectionTitle
          kicker="Palabras, yuyos y sabores"
          title="Glosario matero"
          subtitle="Conocé las hierbas, frutas, ingredientes y palabras que forman parte del mate y el tereré."
        />

        <div className="flavors__controls">
          <div
            className="flavors__filters"
            role="group"
            aria-label="Filtrar el glosario por categoría"
          >
            <button
              type="button"
              className={`chip ${
                category === 'Todas'
                  ? 'chip--active'
                  : ''
              }`}
              aria-pressed={category === 'Todas'}
              onClick={() => setCategory('Todas')}
            >
              Todas ({flavorsData.length})
            </button>

            {flavorCategories.map(
              (currentCategory) => (
                <button
                  key={currentCategory}
                  type="button"
                  className={`chip ${
                    category === currentCategory
                      ? 'chip--active'
                      : ''
                  }`}
                  aria-pressed={
                    category === currentCategory
                  }
                  onClick={() =>
                    setCategory(currentCategory)
                  }
                >
                  {currentCategory}
                </button>
              ),
            )}
          </div>

          <label
            className="searchbox"
            htmlFor="glosario-matero-search"
          >
            <Search
              size={20}
              color="#86562f"
              aria-hidden="true"
            />

            <span className="visually-hidden">
              Buscar una palabra del glosario
            </span>

            <input
              id="glosario-matero-search"
              type="search"
              placeholder="Buscar una palabra, yuyo o sabor…"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
            />
          </label>
        </div>

        <p
          className="flavors__count"
          role="status"
        >
          Mostrando {filtered.length}{' '}
          {filtered.length === 1
            ? 'término'
            : 'términos'}
        </p>

        {filtered.length === 0 ? (
          <div className="flavors__empty card">
            <p>
              No encontramos ningún término con esa
              búsqueda.
            </p>

            <button
              type="button"
              className="btn btn--sm btn--ghost"
              onClick={showAll}
            >
              Mostrar todos
            </button>
          </div>
        ) : (
          <div className="flavors__grid">
            {filtered.map((item, index) => (
              <FlavorFlipCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Descarga del PDF */}

        <motion.div
          className="flavors__download card card--stitched"
          initial={{
            opacity: 0,
            y: 22,
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
            duration: 0.55,
            ease: 'easeOut',
          }}
        >
          <div className="flavors__download-text">
            <h3>Descargá nuestro glosario matero</h3>

            <p>
              Guardalo, compartilo o imprimilo para seguir
              aprendiendo sobre el mate y el tereré.
            </p>
          </div>

          <a
            href={GLOSSARY_PDF_URL}
            download="glosario-matero.pdf"
            className="btn btn--green flavors__download-button"
          >
            <Download
              size={21}
              aria-hidden="true"
            />

            Descargar PDF
          </a>
        </motion.div>

        <Divider className="flavors__divider" />
      </div>
    </section>
  )
}