import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import Journal from './components/Journal'
import Shelf from './components/Shelf'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function App() {
  return (
    // reducedMotion="user" makes every framer-motion animation respect
    // the visitor's prefers-reduced-motion setting automatically.
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <Works />
          <Journal />
          <Shelf />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </MotionConfig>
  )
}
