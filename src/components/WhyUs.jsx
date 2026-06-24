import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Clock, DollarSign, Handshake, BarChart } from 'lucide-react'

const reasons = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Same-day dispatch, avg 24hr domestic delivery.', color: '#F59E0B' },
  { icon: ShieldCheck, title: 'Quality Assured', desc: 'Multi-point checks with full traceability.', color: '#818CF8' },
  { icon: Clock, title: 'Always On', desc: '24/7 operations across all time zones.', color: '#06B6D4' },
  { icon: DollarSign, title: 'Best Pricing', desc: 'Direct manufacturer pricing, guaranteed.', color: '#10B981' },
  { icon: Handshake, title: 'Flexible Terms', desc: 'Custom credit, NET-30/60/90 options.', color: '#F43F5E' },
  { icon: BarChart, title: 'Full Visibility', desc: 'Real-time tracking and analytics.', color: '#A78BFA' },
]

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-us__layout">
          <motion.div
            className="why-us__left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label"><span className="section-label__dot" /> Why GlobalTrade</span>
            <h2 className="section-title">The Partner Your<br />Business Deserves</h2>
            <p className="section-subtitle">
              We're an extension of your team — committed to your growth with
              infrastructure that scales with your ambition.
            </p>

            <motion.div
              className="why-us__highlight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="why-us__highlight-ring">
                <svg viewBox="0 0 120 120" className="why-us__highlight-svg">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                  <motion.circle
                    cx="60" cy="60" r="52" fill="none" stroke="url(#grad)" strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${0.98 * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    transform="rotate(-90 60 60)"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#818CF8" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <text x="60" y="55" textAnchor="middle" fill="white" fontSize="28" fontWeight="700" fontFamily="Space Grotesk">98%</text>
                  <text x="60" y="75" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontWeight="500" fontFamily="Inter">Retention</text>
                </svg>
              </div>
              <div>
                <strong style={{ color: 'var(--white)', fontSize: 16 }}>Client Retention Rate</strong>
                <p style={{ color: 'var(--white-50)', fontSize: 14, marginTop: 4 }}>Our partners stay because we deliver — every single time.</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="why-us__grid">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                className="why-us__card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, borderColor: `${r.color}30` }}
              >
                <div className="why-us__card-icon" style={{ color: r.color, background: `${r.color}12` }}>
                  <r.icon size={20} />
                </div>
                <h4 className="why-us__card-title">{r.title}</h4>
                <p className="why-us__card-desc">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
