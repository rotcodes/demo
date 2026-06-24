import { motion } from 'framer-motion'
import { Package, Warehouse, Truck, BarChart3, Globe2, HeadphonesIcon, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Bulk Procurement',
    desc: 'Direct manufacturer relationships with competitive pricing on 50,000+ SKUs across every major category.',
    color: '#2563EB',
    bg: 'rgba(37, 99, 235, 0.08)',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Storage',
    desc: '2M+ sq ft of climate-controlled warehouse space with automated inventory management systems.',
    color: '#7C3AED',
    bg: 'rgba(124, 58, 237, 0.08)',
  },
  {
    icon: Truck,
    title: 'Fleet Distribution',
    desc: 'Owned fleet of 200+ vehicles with temperature-controlled options and same-day delivery in metro areas.',
    color: '#059669',
    bg: 'rgba(5, 150, 105, 0.08)',
  },
  {
    icon: BarChart3,
    title: 'Inventory Analytics',
    desc: 'AI-powered demand forecasting and real-time stock visibility through our proprietary dashboard.',
    color: '#D97706',
    bg: 'rgba(217, 119, 6, 0.08)',
  },
  {
    icon: Globe2,
    title: 'Import & Export',
    desc: 'Full customs brokerage, freight forwarding, and international compliance documentation handling.',
    color: '#DC2626',
    bg: 'rgba(220, 38, 38, 0.08)',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: '24/7 account management with dedicated reps who know your business inside and out.',
    color: '#0891B2',
    bg: 'rgba(8, 145, 178, 0.08)',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Everything Your<br />Supply Chain Needs</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From sourcing to last-mile delivery, we handle every link in the chain
            so you can focus on growing your business.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="services__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="services__card-top">
                <div className="services__card-icon" style={{ background: service.bg, color: service.color }}>
                  <service.icon size={24} />
                </div>
                <ArrowUpRight size={18} className="services__card-arrow" />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
