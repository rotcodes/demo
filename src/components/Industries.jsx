import { motion } from 'framer-motion'
import { ShoppingCart, Utensils, Pill, Cpu, Building2, Leaf } from 'lucide-react'

const industries = [
  { icon: ShoppingCart, name: 'Retail & E-commerce', count: '180+ clients' },
  { icon: Utensils, name: 'Food & Beverage', count: '120+ clients' },
  { icon: Pill, name: 'Healthcare & Pharma', count: '85+ clients' },
  { icon: Cpu, name: 'Electronics & Tech', count: '60+ clients' },
  { icon: Building2, name: 'Construction', count: '45+ clients' },
  { icon: Leaf, name: 'Agriculture', count: '35+ clients' },
]

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <motion.div
          className="industries__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Industries</span>
          <h2 className="section-title">Serving Every Sector</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Specialized distribution solutions tailored to the unique demands of your industry.
          </p>
        </motion.div>

        <div className="industries__grid">
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              className="industries__card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <div className="industries__card-icon">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="industries__card-name">{item.name}</h3>
              <span className="industries__card-count">{item.count}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
