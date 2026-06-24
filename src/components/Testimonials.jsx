import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Operations',
    company: 'RetailMax Corp',
    text: 'GlobalTrade transformed our supply chain. Their real-time tracking and dedicated account team reduced our stockouts by 73% in the first quarter alone.',
    rating: 5,
    initials: 'SM',
  },
  {
    name: 'James Rodriguez',
    role: 'Procurement Director',
    company: 'FreshFoods International',
    text: "Their cold chain logistics are unmatched. We ship perishables across 12 states and haven't had a single quality incident in two years of partnership.",
    rating: 5,
    initials: 'JR',
  },
  {
    name: 'Aisha Patel',
    role: 'CEO',
    company: 'MedSupply Direct',
    text: 'Switching to GlobalTrade was the best decision we made. Compliance documentation, temperature monitoring, FDA-ready — they handle it all flawlessly.',
    rating: 5,
    initials: 'AP',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
        </motion.div>

        <div className="testimonials__slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonials__card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <Quote size={40} className="testimonials__quote-icon" />
              <p className="testimonials__text">{testimonials[current].text}</p>
              <div className="testimonials__stars">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="testimonials__name">{testimonials[current].name}</div>
                  <div className="testimonials__role">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__controls">
            <button onClick={prev} className="testimonials__btn" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="testimonials__btn" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
