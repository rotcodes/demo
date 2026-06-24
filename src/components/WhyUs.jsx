import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Clock, DollarSign, Handshake, BarChart } from 'lucide-react'

const reasons = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Same-day dispatch with average 24-hour delivery in domestic markets.' },
  { icon: ShieldCheck, title: 'Quality Assured', desc: 'Multi-point quality checks with full traceability on every product.' },
  { icon: Clock, title: 'Always On', desc: '24/7 operations and customer support across all time zones.' },
  { icon: DollarSign, title: 'Best Pricing', desc: 'Direct manufacturer partnerships mean lowest wholesale prices, guaranteed.' },
  { icon: Handshake, title: 'Flexible Terms', desc: 'Custom credit lines, NET-30/60/90, and volume-based pricing tiers.' },
  { icon: BarChart, title: 'Full Visibility', desc: 'Real-time tracking, analytics dashboard, and automated reporting.' },
]

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-us__layout">
          <motion.div
            className="why-us__left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Why GlobalTrade</span>
            <h2 className="section-title">The Partner Your<br />Business Deserves</h2>
            <p className="section-subtitle">
              We're not just another distributor. We're an extension of your team,
              committed to your growth with infrastructure that scales with your ambition.
            </p>
            <div className="why-us__highlight">
              <div className="why-us__highlight-number">98%</div>
              <div className="why-us__highlight-text">
                <strong>Client retention rate</strong>
                <span>Our partners stay because we deliver — every time.</span>
              </div>
            </div>
          </motion.div>

          <div className="why-us__grid">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                className="why-us__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="why-us__card-icon">
                  <item.icon size={20} />
                </div>
                <h4 className="why-us__card-title">{item.title}</h4>
                <p className="why-us__card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
