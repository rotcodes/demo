import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Counter({ end, suffix = '', prefix = '', duration = 2200 }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const started = useRef(false)

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      const startTime = Date.now()
      const tick = () => {
        const p = Math.min((Date.now() - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 4)
        setCount(Math.floor(eased * end))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
  }, [inView, end, duration])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Active Partners', desc: 'Businesses trust our supply chain' },
  { value: 12, suffix: 'M+', label: 'Units / Month', desc: 'Across all product categories' },
  { value: 40, suffix: '+', label: 'Countries', desc: 'Global distribution network' },
  { value: 99, suffix: '.8%', label: 'On-Time Rate', desc: 'Industry-leading fulfillment' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stats__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="stats__value">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="stats__label">{s.label}</div>
              <div className="stats__desc">{s.desc}</div>
              <div className="stats__glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
