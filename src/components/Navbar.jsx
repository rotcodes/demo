import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container nav__inner">
          <a href="#" className="nav__logo">
            <div className="nav__logo-icon">
              <Package size={20} strokeWidth={2.5} />
            </div>
            <span>Global<span className="nav__logo-accent">Trade</span></span>
          </a>

          <div className="nav__links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav__link">{link.name}</a>
            ))}
          </div>

          <a href="#contact" className="nav__cta">
            Get Started <ArrowRight size={15} />
          </a>

          <button className="nav__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="mobile-nav__link"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.name}
              </motion.a>
            ))}
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)} style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
              Get Started <ArrowRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
