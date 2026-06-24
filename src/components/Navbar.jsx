import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, Menu, X, ChevronRight } from 'lucide-react'

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
    const onScroll = () => setScrolled(window.scrollY > 20)
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
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container navbar__inner">
          <a href="#" className="navbar__logo">
            <div className="navbar__logo-icon">
              <Package size={22} strokeWidth={2.5} />
            </div>
            <span className="navbar__logo-text">
              Global<span className="navbar__logo-accent">Trade</span>
            </span>
          </a>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="navbar__link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="navbar__actions">
            <a href="#contact" className="btn btn-primary btn--nav">
              Get a Quote <ChevronRight size={16} />
            </a>
          </div>

          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu__links">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.name}
                  <ChevronRight size={18} />
                </motion.a>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
