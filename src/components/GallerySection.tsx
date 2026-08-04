import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import {
  galleryData,
  type GalleryCategory,
  type GalleryItem,
} from '../data/galleryData'
import { Artwork } from './illustrations/IconRegistry'

const imageModules = import.meta.glob('/src/assets/gallery/*', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>

/**
 * Convierte nombres como:
 *
 * diseñamos.jpg
 * disenamos.png
 * encuentro_matero01.jpeg
 *
 * en nombres comparables sin extensión, espacios,
 * guiones, tildes ni diferencias de mayúsculas.
 */
function normalizeImageName(value: string) {
  const fileName = value
    .split('/')
    .pop()
    ?.replace(/\.[^.]+$/, '') ?? value

  return fileName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\s_-]+/g, '')
    .toLowerCase()
}

const availableImages = Object.entries(imageModules).map(
  ([path, src]) => ({
    name: normalizeImageName(path),
    src,
  }),
)

function getImageSrc(imageName: string) {
  const normalizedName = normalizeImageName(imageName)

  return availableImages.find(
    (image) => image.name === normalizedName,
  )?.src
}

function getTone(tone: GalleryItem['tone']) {
  switch (tone) {
    case 'aula':
      return {
        bg: '#e9f0d8',
        icon: <Artwork name="yerba" size="100%" />,
      }

    case 'investigando':
      return {
        bg: '#fdeecb',
        icon: <Artwork name="limon" size="100%" />,
      }

    case 'encuestas':
      return {
        bg: '#e2f0f4',
        icon: <Artwork name="vaso" size="100%" />,
      }

    case 'mateada':
      return {
        bg: '#fbe7e3',
        icon: <Artwork name="compartir" size="100%" />,
      }

    case 'escolar':
      return {
        bg: '#f3e2d5',
        icon: <Artwork name="preparar" size="100%" />,
      }

    case 'zonal':
      return {
        bg: '#e5f1f4',
        icon: <Artwork name="guampa" size="100%" />,
      }
  }
}

type GalleryFilter = GalleryCategory | 'todas'

const filters: {
  value: GalleryFilter
  label: string
}[] = [
  {
    value: 'todas',
    label: 'Todas',
  },
  {
    value: 'aula',
    label: 'En el aula',
  },
  {
    value: 'investigacion',
    label: 'Investigación',
  },
  {
    value: 'encuestas',
    label: 'Encuestas',
  },
  {
    value: 'encuentros',
    label: 'Encuentros',
  },
  {
    value: 'feria-escolar',
    label: 'Feria escolar',
  },
  {
    value: 'feria-zonal',
    label: 'Feria zonal',
  },
]

const timeline = [
  'Observamos',
  'Investigamos',
  'Encuestamos',
  'Compartimos',
  'Presentamos',
]

function GalleryLightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const src = getImageSrc(item.image)
  const tone = getTone(item.tone)

  const onKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft') {
        onPrev()
      }

      if (event.key === 'ArrowRight') {
        onNext()
      }
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onKey])

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto: ${item.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox__content card"
        initial={{
          scale: 0.92,
          y: 20,
        }}
        animate={{
          scale: 1,
          y: 0,
        }}
        exit={{
          scale: 0.92,
          y: 20,
        }}
        transition={{
          duration: 0.25,
          ease: 'easeOut',
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="lightbox__close"
          onClick={onClose}
          aria-label="Cerrar visor"
        >
          <X size={26} aria-hidden="true" />
        </button>

        <div
          className="lightbox__media"
          style={{ background: tone.bg }}
        >
          {src ? (
            <img
              src={src}
              alt={item.title}
            />
          ) : (
            <div className="gallery-placeholder gallery-placeholder--big">
              <div className="gallery-placeholder__art">
                {tone.icon}
              </div>

              <span>Próximamente</span>
            </div>
          )}
        </div>

        <div className="lightbox__caption">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>

        <div className="lightbox__nav">
          <button
            type="button"
            className="btn btn--ghost btn--sm"
            onClick={onPrev}
          >
            <ChevronLeft size={20} aria-hidden="true" />
            Anterior
          </button>

          <button
            type="button"
            className="btn btn--ghost btn--sm"
            onClick={onNext}
          >
            Siguiente
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function GallerySection() {
  const [activeFilter, setActiveFilter] =
    useState<GalleryFilter>('todas')

  const [activeIndex, setActiveIndex] =
    useState<number | null>(null)

  const filteredGallery = useMemo(() => {
    if (activeFilter === 'todas') {
      return galleryData
    }

    return galleryData.filter(
      (item) => item.category === activeFilter,
    )
  }, [activeFilter])

  const changeFilter = (filter: GalleryFilter) => {
    setActiveFilter(filter)
    setActiveIndex(null)
  }

  const prev = () => {
    setActiveIndex((index) => {
      if (index === null) {
        return null
      }

      return (
        index - 1 + filteredGallery.length
      ) % filteredGallery.length
    })
  }

  const next = () => {
    setActiveIndex((index) => {
      if (index === null) {
        return null
      }

      return (index + 1) % filteredGallery.length
    })
  }

  return (
    <section
      className="section section--tinted gallery"
      id="galeria"
      aria-labelledby="galeria-title"
    >
      <div className="container">
        <SectionTitle
          kicker="Nuestro recorrido"
          title="Galería del proyecto"
          subtitle="Recorré nuestro camino de investigación a través de fotos."
        />

        <div
          className="gallery__timeline"
          role="list"
          aria-label="Línea de tiempo del proyecto"
        >
          {timeline.map((step, index) => (
            <span
              key={step}
              role="listitem"
              className="gallery__timeline-step"
            >
              {step}

              {index < timeline.length - 1 && (
                <span
                  className="gallery__timeline-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        <div
          className="gallery__filters"
          aria-label="Filtrar fotografías"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={
                activeFilter === filter.value
                  ? 'gallery__filter gallery__filter--active'
                  : 'gallery__filter'
              }
              onClick={() => changeFilter(filter.value)}
              aria-pressed={
                activeFilter === filter.value
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div
          className="gallery__grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => {
              const src = getImageSrc(item.image)
              const tone = getTone(item.tone)

              return (
                <motion.button
                  layout
                  key={item.id}
                  type="button"
                  className="gallery-card"
                  style={{
                    background: tone.bg,
                  }}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Abrir foto: ${item.title}`}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.94,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: (index % 5) * 0.04,
                    ease: 'easeOut',
                  }}
                >
                  <span className="gallery-card__media">
                    {src ? (
                      <img
                        src={src}
                        alt={item.title}
                        loading="lazy"
                      />
                    ) : (
                      <span className="gallery-placeholder">
                        <span className="gallery-placeholder__art">
                          {tone.icon}
                        </span>

                        <span>Próximamente</span>
                      </span>
                    )}
                  </span>

                  <span className="gallery-card__caption">
                    <strong>{item.title}</strong>
                    <small>Tocá para ampliar</small>
                  </span>
                </motion.button>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeIndex !== null &&
          filteredGallery[activeIndex] && (
            <GalleryLightbox
              item={filteredGallery[activeIndex]}
              onClose={() => setActiveIndex(null)}
              onPrev={prev}
              onNext={next}
            />
          )}
      </AnimatePresence>
    </section>
  )
}