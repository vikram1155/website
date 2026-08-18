import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

export default function RsvpSection() {
  const [selected, setSelected] = useState('Coming')

  return (
    <motion.section id="rsvp" className="content-section rsvp-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container rsvp-box">
        <div>
          <p className="eyebrow">RSVP</p>
          <h2>Will you be there?</h2>
        </div>

        <div className="rsvp-options">
          {weddingData.rsvpOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={selected === option ? 'rsvp-btn active' : 'rsvp-btn'}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <p className="rsvp-status">Selected: <strong>{selected}</strong></p>
      </div>
    </motion.section>
  )
}
