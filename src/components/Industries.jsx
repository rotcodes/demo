import { motion } from 'framer-motion'
import { ShoppingCart, Utensils, Pill, Cpu, Building2, Leaf } from 'lucide-react'

const industries = [
  { icon: ShoppingCart, name: 'Retail & E-commerce', count: '180+ clients', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80' },
  { icon: Utensils, name: 'Food & Beverage', count: '120+ clients', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80' },
  { icon: Pill, name: 'Healthcare & Pharma', count: '85+ clients', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop&q=80' },
  { icon: Cpu, name: 'Electronics & Tech', count: '60+ clients', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80' },
  { icon: Building2, name: 'Construction', count: '45+ clients', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80' },
  { icon: Leaf, name: 'Agriculture', count: '35+ clients', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80' },
]

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <motion.div
          className="industries__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label"><span className="section-label__dot" /> Industries</span>
          <h2 className="section-title">Serving Every Sector</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Specialized distribution tailored to each industry's unique demands.
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
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <div className="industries__card-img">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="industries__card-img-overlay" />
              </div>
              <div className="industries__card-body">
                <div className="industries__card-icon">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="industries__card-name">{item.name}</h3>
                <span className="industries__card-count">{item.count}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
