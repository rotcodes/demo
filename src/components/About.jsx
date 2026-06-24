import { motion } from 'framer-motion'
import { CheckCircle2, Truck, BarChart3, Users } from 'lucide-react'

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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about__image-stack">
              <div className="about__image about__image--main">
                <div className="about__image-placeholder">
                  <div className="about__image-icon">
                    <Truck size={48} strokeWidth={1.5} />
                  </div>
                  <span>Distribution Center</span>
                </div>
              </div>
              <motion.div
                className="about__image about__image--float"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="about__image-placeholder about__image-placeholder--small">
                  <div className="about__float-stat">
                    <span className="about__float-value">24/7</span>
                    <span className="about__float-label">Operations</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="about__image about__image--float2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="about__image-placeholder about__image-placeholder--small">
                  <div className="about__float-stat">
                    <span className="about__float-value">15+</span>
                    <span className="about__float-label">Years Experience</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="section-title">Built for Scale,<br />Driven by Trust</h2>
            <p className="section-subtitle">
              Since 2009, GlobalTrade Distributors has been the backbone of wholesale supply chains
              across North America, Europe, and Asia. We don't just move products — we engineer
              seamless connections between manufacturers and retailers.
            </p>

            <div className="about__features">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  className="about__feature"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="about__feature-icon">
                    <feat.icon size={20} />
                  </div>
                  <div>
                    <h4 className="about__feature-title">{feat.title}</h4>
                    <p className="about__feature-desc">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about__checks">
              {checks.map((item) => (
                <div key={item} className="about__check">
                  <CheckCircle2 size={16} className="about__check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
