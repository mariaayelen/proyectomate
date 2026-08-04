import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, RotateCcw } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { glossaryData, glossaryCategories, type GlossaryCategory } from '../data/glossaryData'
import { Artwork } from './illustrations/IconRegistry'

const categoryBadge: Record<GlossaryCategory, string> = {
  Elementos: 'badge--elements',
  'Yuyos y sabores': 'badge--herbs',
  Acciones: 'badge--actions',
}

function FlipCard({
  term,
  index,
}: {
  term: (typeof glossaryData)[number]
  index: number
}) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((v) => !v)

  return (
    <motion.div
      className="flip-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08, ease: 'easeOut' }}
    >
      <button
        type="button"
        className={`flip-card__inner ${flipped ? 'flip-card__inner--flipped' : ''}`}
        onClick={toggle}
        aria-pressed={flipped}
        aria-label={`${term.name}, ${flipped ? 'tocá para cerrar la definición' : 'tocá para descubrir la definición'}`}
      >
        {/* Frente */}
        <span className="flip-card__face flip-card__face--front">
          <span className={`badge ${categoryBadge[term.category]}`}>{term.category}</span>
          <span className="flip-card__art" aria-hidden="true">
            <Artwork name={term.icon} size="100%" />
          </span>
          <strong className="flip-card__name">{term.name}</strong>
          <small className="flip-card__hint">Tocá para descubrir</small>
        </span>

        {/* Reverso */}
        <span className="flip-card__face flip-card__face--back">
          <strong className="flip-card__name">{term.name}</strong>
          <span className="flip-card__def">{term.definition}</span>
          <span className="flip-card__back-btn">Volver</span>
        </span>
      </button>
    </motion.div>
  )
}

export function GlossarySection() {
  const [category, setCategory] = useState<GlossaryCategory | 'Todas'>('Todas')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return glossaryData.filter((t) => {
      const matchCat = category === 'Todas' || t.category === category
      const matchQuery =
        q === '' ||
        t.name.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
      return matchCat && matchQuery
    })
  }, [category, query])

  const showAll = () => {
    setQuery('')
    setCategory('Todas')
  }

  return (
    <section className="section glossary" id="glosario" aria-labelledby="glosario-title">
      <div className="container">
        <SectionTitle
          kicker="Palabras que acompañan"
          title="Glosario matero"
          subtitle="Tocá cada tarjeta para descubrir su significado."
        />

        <div className="glossary__controls">
          <div className="glossary__filters" role="group" aria-label="Filtrar el glosario por categoría">
            <button
              type="button"
              className={`chip ${category === 'Todas' ? 'chip--active' : ''}`}
              aria-pressed={category === 'Todas'}
              onClick={() => setCategory('Todas')}
            >
              Todas ({glossaryData.length})
            </button>
            {glossaryCategories.map((c) => (
              <button
                key={c}
                type="button"
                className={`chip ${category === c ? 'chip--active' : ''}`}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
            <button type="button" className="chip" onClick={showAll}>
              <RotateCcw size={16} aria-hidden="true" />
              Mostrar todos
            </button>
          </div>

          <label className="searchbox" htmlFor="glossary-search">
            <Search size={20} color="#86562f" aria-hidden="true" />
            <span className="visually-hidden">Buscar una palabra del glosario</span>
            <input
              id="glossary-search"
              type="search"
              placeholder="Buscar una palabra…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        <p className="glossary__count" role="status">
          {filtered.length} {filtered.length === 1 ? 'palabra' : 'palabras'}
        </p>

        {filtered.length === 0 ? (
          <div className="glossary__empty card">
            <p>No encontramos ninguna palabra con esa búsqueda.</p>
            <button type="button" className="btn btn--sm btn--ghost" onClick={showAll}>
              Mostrar todos
            </button>
          </div>
        ) : (
          <div className="glossary__grid">
            {filtered.map((term, i) => (
              <FlipCard key={term.id} term={term} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
