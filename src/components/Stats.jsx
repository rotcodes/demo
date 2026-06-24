import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const started = useRef(false)

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      const startTime = Date.now()
      const tick = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
  }, [inView, end, duration])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Active Clients', desc: 'Businesses trust us with their supply chain' },
  { value: 12, suffix: 'M+', label: 'Units Shipped Monthly', desc: 'Across all product categories' },
  { value: 40, suffix: '+', label: 'Countries', desc: 'Global distribution network reach' },
  { value: 99, suffix: '.8%', label: 'On-Time Delivery', desc: 'Industry-leading fulfillment rate' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stats__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stats__value">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stats__label">{stat.label}</div>
              <div className="stats__desc">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
