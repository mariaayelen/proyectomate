import { MotionConfig } from 'framer-motion'
import './styles/components.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WelcomeSection } from './components/WelcomeSection'
import { ProjectNavigation } from './components/ProjectNavigation'
import { TraditionsSection } from './components/TraditionsSection'
import { SurveyResults } from './components/SurveyResults'
import { FlavorsSection } from './components/FlavorsSection'
import { ElementsActions } from './components/ElementsActions'
import { GamesSection } from './components/GamesSection'
import { GallerySection } from './components/GallerySection'
import { ThanksSection } from './components/ThanksSection'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#inicio" className="skip-link">
        Saltar al contenido
      </a>

      <Header />

      <main>
        <Hero />
        <WelcomeSection />
        <ProjectNavigation />
        <TraditionsSection />
        <SurveyResults />

        {/* Ahora esta sección es el Glosario matero */}
        <FlavorsSection />

        {/* Elementos, acciones y preparación */}
        <ElementsActions />

        <GamesSection />
        <GallerySection />
        <ThanksSection />
      </main>

      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}

export default App