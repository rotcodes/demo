import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Operations, RetailMax Corp',
    text: 'GlobalTrade transformed our supply chain. Their real-time tracking and dedicated account team reduced our stockouts by 73% in the first quarter alone.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80',
  },
  {
    name: 'James Rodriguez',
    role: 'Director, FreshFoods International',
    text: "Their cold chain logistics are unmatched. We ship perishables across 12 states and haven't had a single quality incident in two years.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80',
  },
  {
    name: 'Aisha Patel',
    role: 'CEO, MedSupply Direct',
    text: 'Switching to GlobalTrade was the best decision we made. Compliance, temperature monitoring, FDA-ready — they handle it all flawlessly.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label"><span className="section-label__dot" /> Testimonials</span>
          <h2 className="section-title">Trusted by Leaders</h2>
        </motion.div>

        <div className="testimonials__slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonials__card"
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.5 }}
            >
              <Quote size={48} className="testimonials__quote" />
              <p className="testimonials__text">{testimonials[current].text}</p>
              <div className="testimonials__stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <div className="testimonials__author">
                <img src={testimonials[current].image} alt={testimonials[current].name} className="testimonials__avatar" />
                <div>
                  <div className="testimonials__name">{testimonials[current].name}</div>
                  <div className="testimonials__role">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__nav">
            <button onClick={() => setCurrent(c => c === 0 ? testimonials.length - 1 : c - 1)} className="testimonials__btn"><ChevronLeft size={18} /></button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            <button onClick={() => setCurrent(c => (c + 1) % testimonials.length)} className="testimonials__btn"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
