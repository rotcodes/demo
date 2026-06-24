import { motion } from 'framer-motion'
import { Truck, Package, Globe2, BarChart3, Shield, Zap, Clock, Award } from 'lucide-react'

const items = [
  { icon: Truck, text: 'Same-Day Dispatch' },
  { icon: Package, text: '50,000+ SKUs' },
  { icon: Globe2, text: '40+ Countries' },
  { icon: BarChart3, text: 'AI-Powered Analytics' },
  { icon: Shield, text: 'ISO 9001 Certified' },
  { icon: Zap, text: 'Lightning Fast' },
  { icon: Clock, text: '24/7 Operations' },
  { icon: Award, text: 'Industry Leading' },
]

const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="marquee">
      <motion.div
        className="marquee__track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="marquee__item">
            <item.icon size={18} />
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
