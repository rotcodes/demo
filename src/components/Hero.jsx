import { motion } from 'framer-motion'
import { ArrowRight, Play, Globe2, TrendingUp, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero__video-wrap">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
        >
          <source src="https://videos.pexels.com/video-files/6169049/6169049-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
      </div>

      {/* Animated mesh gradient */}
      <div className="hero__mesh">
        <motion.div
          className="hero__mesh-orb hero__mesh-orb--1"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__mesh-orb hero__mesh-orb--2"
          animate={{
            x: [0, -70, 80, 0],
            y: [0, 50, -60, 0],
            scale: [1, 0.8, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__mesh-orb hero__mesh-orb--3"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 80, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero__badge-dot" />
          Trusted by 500+ businesses across 40 countries
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          The Future of
          <br />
          <span className="hero__title-gradient">Wholesale Distribution</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          End-to-end supply chain intelligence that connects manufacturers
          to markets with unmatched speed and precision.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a href="#contact" className="btn btn-primary">
            Start Partnership <ArrowRight size={17} />
          </a>
          <a href="#about" className="btn btn-glass">
            <Play size={15} fill="white" /> Watch Story
          </a>
        </motion.div>

        {/* Floating glass metric cards */}
        <motion.div
          className="hero__metrics"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {[
            { icon: Globe2, value: '40+', label: 'Countries', color: '#818CF8' },
            { icon: TrendingUp, value: '$2.4B+', label: 'Annual Volume', color: '#06B6D4' },
            { icon: Shield, value: '99.8%', label: 'Fulfillment', color: '#10B981' },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              className="hero__metric"
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <m.icon size={22} style={{ color: m.color }} />
              <div className="hero__metric-value">{m.value}</div>
              <div className="hero__metric-label">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <motion.div
          className="hero__scroll-dot"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
