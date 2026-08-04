import { motion } from 'framer-motion'
import { Artwork } from './illustrations/IconRegistry'
import './AnimatedMateTerere.css'

export function AnimatedMateTerere() {
  return (
    <div
      className="drinks-animation"
      role="img"
      aria-label="Un mate caliente y un tereré frío"
    >
      {/* MATE */}

      <motion.div
        className="animated-drink animated-drink--mate"
        animate={{
          y: [0, -8, 0],
          rotate: [0, -1.5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className="drink-halo drink-halo--mate" />

        <div className="animated-drink__image">
          <Artwork name="mate" size="100%" />
        </div>

        <span className="steam steam--one" />
        <span className="steam steam--two" />
        <span className="steam steam--three" />
      </motion.div>

      {/* CORAZÓN CENTRAL */}

      <motion.span
        className="drinks-animation__heart"
        aria-hidden="true"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.12, 1],
          rotate: [-5, 6, -5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ♥
      </motion.span>

      {/* TERERÉ */}

      <motion.div
        className="animated-drink animated-drink--terere"
        animate={{
          y: [0, -6, 0],
          rotate: [0, 1.5, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4,
        }}
      >
        <span className="drink-halo drink-halo--terere" />

        <div className="terere-composition">
          <div className="terere-composition__guampa">
            <Artwork name="guampa" size="100%" />
          </div>

          <motion.div
            className="terere-composition__bombilla"
            animate={{
              rotate: [-5, 1, -5],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Artwork name="bombilla" size="100%" />
          </motion.div>

          <div className="terere-composition__ice">
            <Artwork name="hielo" size="100%" />
          </div>
        </div>

        <motion.span
          className="cold-spark cold-spark--one"
          aria-hidden="true"
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          ✦
        </motion.span>

        <motion.span
          className="cold-spark cold-spark--two"
          aria-hidden="true"
          animate={{
            opacity: [1, 0.2, 1],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
          }}
        >
          ✦
        </motion.span>
      </motion.div>

      {/* HOJAS FLOTANTES */}

      <motion.div
        className="drinks-animation__leaf drinks-animation__leaf--left"
        aria-hidden="true"
        animate={{
          y: [0, -7, 0],
          rotate: [-8, 6, -8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Artwork name="menta" size="100%" />
      </motion.div>

      <motion.div
        className="drinks-animation__leaf drinks-animation__leaf--right"
        aria-hidden="true"
        animate={{
          y: [0, 6, 0],
          rotate: [8, -5, 8],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Artwork name="cedron" size="100%" />
      </motion.div>
    </div>
  )
}