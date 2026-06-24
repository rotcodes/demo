import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta__bg">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
          alt=""
          className="cta__bg-img"
        />
        <div className="cta__bg-overlay" />
        <motion.div
          className="cta__bg-orb cta__bg-orb--1"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="cta__bg-orb cta__bg-orb--2"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container cta__inner">
        <div className="cta__layout">
          <motion.div
            className="cta__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label" style={{ borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#7DD3FC' }}>
              <span className="section-label__dot" /> Get Started
            </span>
            <h2 className="cta__title">Ready to Scale Your<br />Distribution?</h2>
            <p className="cta__subtitle">
              Join 500+ businesses that trust GlobalTrade. Get a custom
              quote in under 24 hours.
            </p>

            <div className="cta__info">
              <div className="cta__info-item"><Phone size={18} /> +1 (800) 555-0199</div>
              <div className="cta__info-item"><Mail size={18} /> partnerships@globaltrade.com</div>
              <div className="cta__info-item"><MapPin size={18} /> Chicago | New York | Los Angeles</div>
            </div>
          </motion.div>

          <motion.div
            className="cta__form-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form className="cta__form" onSubmit={e => e.preventDefault()}>
              <h3 className="cta__form-title">Request a Quote</h3>
              <div className="cta__form-row">
                <input type="text" placeholder="Full Name" className="cta__input" />
                <input type="email" placeholder="Business Email" className="cta__input" />
              </div>
              <input type="text" placeholder="Company Name" className="cta__input" />
              <select className="cta__input cta__select">
                <option value="">Select Industry</option>
                <option>Retail & E-commerce</option>
                <option>Food & Beverage</option>
                <option>Healthcare & Pharma</option>
                <option>Electronics & Tech</option>
                <option>Construction</option>
                <option>Agriculture</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Tell us about your distribution needs..." className="cta__input cta__textarea" rows={4} />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Request <ArrowRight size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
