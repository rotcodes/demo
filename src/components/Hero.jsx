import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Globe2, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid" />
        <motion.div
          className="hero__orb hero__orb--1"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__orb hero__orb--3"
          animate={{ y: [0, 15, 0], x: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero__badge-dot" />
          Trusted by 500+ businesses worldwide
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Powering Global
          <br />
          <span className="hero__title-gradient">Wholesale Distribution</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          End-to-end supply chain solutions for businesses of every scale.
          We connect manufacturers to markets with speed, reliability, and precision.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a href="#contact" className="btn btn-primary btn--lg">
            Start Partnership <ArrowRight size={18} />
          </a>
          <a href="#about" className="btn btn-secondary btn--lg">
            <Play size={16} /> See How It Works
          </a>
        </motion.div>

        <motion.div
          className="hero__cards"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="hero__card">
            <div className="hero__card-icon hero__card-icon--blue">
              <Globe2 size={20} />
            </div>
            <div>
              <div className="hero__card-value">40+</div>
              <div className="hero__card-label">Countries Served</div>
            </div>
          </div>
          <div className="hero__card">
            <div className="hero__card-icon hero__card-icon--emerald">
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="hero__card-value">$2.4B+</div>
              <div className="hero__card-label">Annual Volume</div>
            </div>
          </div>
          <div className="hero__card">
            <div className="hero__card-icon hero__card-icon--gold">
              <Shield size={20} />
            </div>
            <div>
              <div className="hero__card-value">99.8%</div>
              <div className="hero__card-label">Fulfillment Rate</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
