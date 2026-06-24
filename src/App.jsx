import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="grain" />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Services />
      <Industries />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
