import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, RotateCcw, Check, X } from 'lucide-react'
import { categoryCards, type CardType, type CategoryCard } from '../../data/gameData'
import { Artwork } from '../illustrations/IconRegistry'
import { Heart } from '../illustrations/DecorativeLeaves'

const typeLabels: Record<CardType, string> = {
  elemento: 'Elemento',
  sabor: 'Yuyo o sabor',
  accion: 'Acción',
}

const typeOptions: CardType[] = ['elemento', 'sabor', 'accion']

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function FinalCard({ score, total, onRestart }: { score: number; total: number; onRestart: () => void }) {
  const pct = total === 0 ? 0 : Math.round((score / total) * 100)
  const message =
    pct >= 80
      ? '¡Sos un o una gran matera! Conocés muy bien el mundo del mate y el tereré.'
      : pct >= 50
        ? '¡Muy bien! Seguí jugando para convertirte en una experta o experto.'
        : '¡No te preocupes! Repasá el glosario y volvé a intentarlo.'

  return (
    <motion.div
      className="game-result card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      role="status"
    >
      <div className="game-result__hearts" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <Heart key={i} size={38} className="heart-pop" />
        ))}
      </div>
      <h4>¡Terminaste el juego!</h4>
      <p className="game-result__score">
        Respondiste <strong>{score}</strong> de <strong>{total}</strong> correctas.
      </p>
      <p>{message}</p>
      <button type="button" className="btn btn--green" onClick={onRestart}>
        <RotateCcw size={20} aria-hidden="true" />
        Jugar otra vez
      </button>
    </motion.div>
  )
}

export function CategoryGame() {
  const [order, setOrder] = useState<CategoryCard[]>(() => shuffle(categoryCards))
  const [pos, setPos] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selected, setSelected] = useState<CardType | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const current = order[pos]
  const total = order.length

  const answer = (type: CardType) => {
    if (answered) return
    setSelected(type)
    setAnswered(true)
    if (type === current.type) setScore((s) => s + 1)
  }

  const next = () => {
    if (pos + 1 >= total) {
      setFinished(true)
    } else {
      setPos((p) => p + 1)
      setAnswered(false)
      setSelected(null)
    }
  }

  const restart = () => {
    setOrder(shuffle(categoryCards))
    setPos(0)
    setAnswered(false)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return <FinalCard score={score} total={total} onRestart={restart} />
  }

  return (
    <div className="game">
      <div className="game__progress" aria-live="polite">
        <span>
          Tarjeta {pos + 1} de {total}
        </span>
        <span>Puntaje: {score}</span>
      </div>
      <div className="game__bar" aria-hidden="true">
        <span style={{ width: `${((pos + (answered ? 1 : 0)) / total) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="game__card card"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <span className="game__card-art" aria-hidden="true">
            <Artwork name={current.icon} size="100%" />
          </span>
          <p className="game__prompt">¿Es un elemento, un yuyo o sabor, o una acción?</p>
          <h4 className="game__word">{current.word}</h4>

          <div className="game__options">
            {typeOptions.map((t) => {
              const isCorrectOption = t === current.type
              let className = 'btn btn--ghost game__option'
              if (answered) {
                if (isCorrectOption) className += ' game__option--correct'
                else if (t === selected) className += ' game__option--wrong'
                else className += ' game__option--muted'
              }
              return (
                <button
                  key={t}
                  type="button"
                  className={className}
                  onClick={() => answer(t)}
                  disabled={answered}
                >
                  {answered && isCorrectOption && <Check size={18} aria-hidden="true" />}
                  {answered && !isCorrectOption && t === selected && <X size={18} aria-hidden="true" />}
                  {typeLabels[t]}
                </button>
              )
            })}
          </div>

          {answered && (
            <motion.div
              className={`game__feedback ${selected === current.type ? 'game__feedback--ok' : 'game__feedback--ko'}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
            >
              {selected === current.type ? (
                <strong>¡Correcto!</strong>
              ) : (
                <strong>¡Casi! Era «{typeLabels[current.type]}».</strong>
              )}{' '}
              {current.explanation}
            </motion.div>
          )}

          {answered && (
            <motion.button
              type="button"
              className="btn btn--dark game__next"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={next}
            >
              {pos + 1 >= total ? 'Ver resultado' : 'Siguiente tarjeta'}
              <ArrowRight size={20} aria-hidden="true" />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}


