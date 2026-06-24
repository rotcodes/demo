import { motion } from 'framer-motion'
import { Package, Warehouse, Truck, BarChart3, Globe2, HeadphonesIcon, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Bulk Procurement',
    desc: 'Direct manufacturer relationships with competitive pricing on 50,000+ SKUs.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&q=80',
    color: '#0284C7',
  },
  {
    icon: Warehouse,
    title: 'Smart Warehousing',
    desc: '2M+ sq ft of climate-controlled warehouse space with automated management.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&h=400&fit=crop&q=80',
    color: '#0369A1',
  },
  {
    icon: Truck,
    title: 'Fleet Distribution',
    desc: '200+ vehicles with temperature control and same-day metro delivery.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&q=80',
    color: '#0891B2',
  },
  {
    icon: BarChart3,
    title: 'AI Analytics',
    desc: 'AI-powered demand forecasting and real-time stock visibility dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    color: '#F59E0B',
  },
  {
    icon: Globe2,
    title: 'Import & Export',
    desc: 'Full customs brokerage, freight forwarding, and compliance docs.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop&q=80',
    color: '#F43F5E',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    desc: 'Dedicated account management with reps who know your business.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&q=80',
    color: '#10B981',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label"><span className="section-label__dot" /> Services</span>
          <h2 className="section-title">Everything Your<br />Supply Chain Needs</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From sourcing to last-mile delivery, we handle every link so you can focus on growth.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="services__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="services__card-img">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="services__card-img-overlay" />
              </div>
              <div className="services__card-body">
                <div className="services__card-top">
                  <div className="services__card-icon" style={{ color: s.color, background: `${s.color}15` }}>
                    <s.icon size={22} />
                  </div>
                  <ArrowUpRight size={18} className="services__card-arrow" style={{ color: s.color }} />
                </div>
                <h3 className="services__card-title">{s.title}</h3>
                <p className="services__card-desc">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
