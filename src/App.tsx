import { Cursor } from '@/components/Cursor'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Skylight } from '@/components/Skylight'
import { SmoothScroll } from '@/components/SmoothScroll'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { SelectedWork } from '@/sections/SelectedWork'
import { Skills } from '@/sections/Skills'

export default function App() {
  return (
    <SmoothScroll>
      <div className="page-shell">
        <Skylight />
        <div className="sky-grid" aria-hidden="true" />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Cursor />
        <Navbar />
        <main id="main" className="relative z-1">
          <Hero />
          <SelectedWork />
          <Projects />
          <Skills />
          <About />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
