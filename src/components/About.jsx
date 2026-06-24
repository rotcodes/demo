import { motion } from 'framer-motion'
import { CheckCircle2, Truck, BarChart3, Users, ArrowRight } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Logistics Excellence', desc: 'Temperature-controlled fleet with real-time GPS tracking across every shipment.' },
  { icon: BarChart3, title: 'Data-Driven', desc: 'Advanced analytics for demand forecasting, inventory optimization, and route planning.' },
  { icon: Users, title: 'Dedicated Teams', desc: 'Account managers who understand your business and anticipate your needs.' },
]

const checks = [
  'ISO 9001:2015 Certified Operations',
  'FDA-Compliant Cold Chain',
  'Real-Time Inventory Visibility',
  'Flexible Payment Terms',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about__img-main">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=500&fit=crop&q=80"
                alt="Distribution center"
                loading="lazy"
              />
              <div className="about__img-overlay" />
            </div>

            <motion.div
              className="about__float about__float--1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="about__float-inner">
                <span className="about__float-value">24/7</span>
                <span className="about__float-label">Operations</span>
              </div>
            </motion.div>

            <motion.div
              className="about__float about__float--2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="about__float-inner">
                <span className="about__float-value">15+</span>
                <span className="about__float-label">Years</span>
              </div>
            </motion.div>

            <div className="about__img-accent" />
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-label">
              <span className="section-label__dot" /> About Us
            </span>
            <h2 className="section-title">Built for Scale,<br />Driven by Trust</h2>
            <p className="section-subtitle">
              Since 2009, GlobalTrade has been the backbone of wholesale supply chains
              across three continents. We don't just move products — we engineer
              seamless connections between manufacturers and retailers.
            </p>

            <div className="about__features">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="about__feature"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="about__feature-icon">
                    <f.icon size={20} />
                  </div>
                  <div>
                    <h4 className="about__feature-title">{f.title}</h4>
                    <p className="about__feature-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about__checks">
              {checks.map((c) => (
                <div key={c} className="about__check">
                  <CheckCircle2 size={16} className="about__check-icon" />
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <a href="#services" className="btn btn-primary" style={{ marginTop: 32 }}>
              Explore Services <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
