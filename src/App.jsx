import { MotionConfig } from 'framer-motion'
import { LanguageProvider, useLang } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import Journal from './components/Journal'
import Events from './components/Events'
import About from './components/About'
import Shelf from './components/Shelf'
import Contact from './components/Contact'
import Flashes from './components/Flashes'
import ReadingControls from './components/ReadingControls'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

function SkipLink() {
  const { t } = useLang()
  return <a href="#main-content" className="skip-link">{t('a11y.skip')}</a>
}

export default function App() {
  return (
    // reducedMotion="user" makes every framer-motion animation respect
    // the visitor's prefers-reduced-motion setting automatically.
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <SkipLink />
        <Cursor />
        <Navbar />
        <ReadingControls />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Works />
          <Journal />
          <Events />
          <About />
          <Shelf />
          <Contact />
          <Flashes />
        </main>
        <Footer />
      </LanguageProvider>
    </MotionConfig>
  )
}
