import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { CategoryGame } from './games/CategoryGame'
import { OrderGame } from './games/OrderGame'
import { Twig } from './illustrations/DecorativeLeaves'

export function GamesSection() {
  return (
    <section className="section games" id="juegos" aria-labelledby="juegos-title">
      <div className="container">
        <SectionTitle
          kicker="Poné a prueba lo aprendido"
          title="¡A jugar!"
          subtitle="Poné a prueba todo lo que aprendiste."
        />

        <div className="games__grid">
          <motion.article
            className="card card--stitched games__panel"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="games__panel-head">
              <Twig size={40} />
              <div>
                <h3>¿Elemento, sabor o acción?</h3>
                <p>Clasificá cada palabra en su grupo correcto.</p>
              </div>
            </div>
            <CategoryGame />
          </motion.article>

          <motion.article
            className="card card--stitched games__panel"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
          >
            <div className="games__panel-head">
              <Twig size={40} />
              <div>
                <h3>Ordená los pasos</h3>
                <p>Armá la secuencia correcta para preparar mate o tereré.</p>
              </div>
            </div>
            <OrderGame />
          </motion.article>
        </div>
      </div>
    </section>
  )
}
