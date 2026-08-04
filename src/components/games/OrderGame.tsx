import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronUp, ChevronDown, GripVertical, RotateCcw, Shuffle } from 'lucide-react'
import { orderSequences, type DrinkMode, type OrderStep } from '../../data/gameData'
import { Artwork } from '../illustrations/IconRegistry'
import { Heart } from '../illustrations/DecorativeLeaves'

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function OrderGame() {
  const [mode, setMode] = useState<DrinkMode>('mate')
  const [items, setItems] = useState<OrderStep[]>(() => shuffle(orderSequences[0].steps))
  const [dragged, setDragged] = useState<number | null>(null)
  const [checked, setChecked] = useState<'correct' | 'wrong' | null>(null)

  const sequence = orderSequences.find((s) => s.mode === mode) ?? orderSequences[0]
  const correctIds = sequence.steps.map((s) => s.id)

  const switchMode = (m: DrinkMode) => {
    setMode(m)
    setItems(shuffle(orderSequences.find((s) => s.mode === m)!.steps))
    setChecked(null)
    setDragged(null)
  }

  const reshuffle = () => {
    setItems(shuffle(sequence.steps))
    setChecked(null)
    setDragged(null)
  }

  const move = (from: number, to: number) => {
    setItems((prev) => {
      const copy = [...prev]
      const [item] = copy.splice(from, 1)
      copy.splice(Math.max(0, Math.min(copy.length, to)), 0, item)
      return copy
    })
    setChecked(null)
  }

  const moveBy = (index: number, dir: -1 | 1) => {
    const target = index + dir
    if (target < 0 || target >= items.length) return
    move(index, target)
  }

  const check = () => {
    setChecked(items.every((it, i) => it.id === correctIds[i]) ? 'correct' : 'wrong')
  }

  return (
    <div className="game game--order">
      <div className="game__modes" role="group" aria-label="Elegí qué preparación ordenar">
        {orderSequences.map((s) => (
          <button
            key={s.mode}
            type="button"
            className={`chip ${mode === s.mode ? 'chip--active' : ''}`}
            aria-pressed={mode === s.mode}
            onClick={() => switchMode(s.mode)}
          >
            {s.title}
          </button>
        ))}
      </div>

      <p className="game__hint">
        Ordená los pasos de la manera correcta. En computadora podés arrastrar las tarjetas y en
        cualquier dispositivo usar los botones ↑ ↓. También podés tocar una tarjeta para
        seleccionarla.
      </p>

      <AnimatePresence mode="wait">
        <motion.ol
          key={mode}
          className="order-steps"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {items.map((step, index) => (
            <motion.li
              key={step.id}
              className="order-step"
              layout
              draggable
              onDragStart={() => setDragged(index)}
              onDragOver={(e) => {
                e.preventDefault()
                if (dragged === null || dragged === index) return
                move(dragged, index)
                setDragged(index)
              }}
              onDragEnd={() => setDragged(null)}
            >
              <span className="order-step__grip" aria-hidden="true">
                <GripVertical size={18} />
              </span>
              <span className="order-step__num" aria-hidden="true">
                {index + 1}
              </span>
              <span className="order-step__art" aria-hidden="true">
                <Artwork name={step.icon} size="100%" />
              </span>
              <span className="order-step__text">{step.text}</span>
              <span className="order-step__actions">
                <button
                  type="button"
                  className="order-step__btn"
                  aria-label={`Mover arriba: ${step.text}`}
                  onClick={() => moveBy(index, -1)}
                  disabled={index === 0}
                >
                  <ChevronUp size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="order-step__btn"
                  aria-label={`Mover abajo: ${step.text}`}
                  onClick={() => moveBy(index, 1)}
                  disabled={index === items.length - 1}
                >
                  <ChevronDown size={18} aria-hidden="true" />
                </button>
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </AnimatePresence>

      <div className="order-actions">
        <button type="button" className="btn btn--green" onClick={check}>
          <Check size={20} aria-hidden="true" />
          Comprobar orden
        </button>
        <button type="button" className="btn btn--ghost" onClick={reshuffle}>
          <Shuffle size={20} aria-hidden="true" />
          Volver a mezclar
        </button>
      </div>

      <AnimatePresence>
        {checked && (
          <motion.div
            className={`order-feedback ${checked === 'correct' ? 'order-feedback--ok' : 'order-feedback--ko'}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
          >
            {checked === 'correct' ? (
              <>
                <Heart size={26} className="heart-pop" aria-hidden="true" />
                <span>
                  <strong>¡Muy bien!</strong> La preparación está completa.
                </span>
              </>
            ) : (
              <span>
                <strong>Casi.</strong> Revisá el orden e intentá nuevamente.
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button type="button" className="order-restart" onClick={reshuffle}>
        <RotateCcw size={18} aria-hidden="true" />
        Reiniciar orden
      </button>
    </div>
  )
}
