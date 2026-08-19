import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      {/* global grain overlay */}
      <div className="pointer-events-none fixed inset-0 z-[55] opacity-[0.5] grain mix-blend-soft-light" />

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <About />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
