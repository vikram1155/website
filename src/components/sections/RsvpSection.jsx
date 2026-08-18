import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function RsvpSection() {
  const [selected, setSelected] = useState(weddingConfig.rsvp.options[0].id)
  const [formValues, setFormValues] = useState({ name: '', guests: '2', note: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.section id="rsvp" className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container rsvp-box">
        <div>
          <p className="eyebrow">RSVP</p>
          <h2>So... are you coming?</h2>
          <p className="section-subtext">Be honest. We’re planning the food. 👀</p>
        </div>

        {!submitted ? (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="choice-grid">
              {weddingConfig.rsvp.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={selected === option.id ? 'choice-pill active' : 'choice-pill'}
                  onClick={() => setSelected(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="field-grid">
              <label>
                <span>Name</span>
                <input name="name" value={formValues.name} onChange={handleChange} placeholder={weddingConfig.rsvp.placeholderName} />
              </label>

              <label>
                <span>Number of people</span>
                <input name="guests" value={formValues.guests} onChange={handleChange} type="number" min="1" max="10" />
              </label>
            </div>

            <label>
              <span>Optional note</span>
              <textarea name="note" value={formValues.note} onChange={handleChange} placeholder={weddingConfig.rsvp.placeholderNote} rows="3" />
            </label>

            <button type="submit" className="button button-primary">Leave it →</button>
          </form>
        ) : (
          <div className="submit-success">
            <div className="success-badge">Done!</div>
            <h3>See you in Madurai. ❤️</h3>
            <p>Now don’t cancel.</p>
          </div>
        )}
      </div>
    </motion.section>
  )
}
