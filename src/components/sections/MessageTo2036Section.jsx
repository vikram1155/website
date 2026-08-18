import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function MessageTo2036Section() {
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const [anonymous, setAnonymous] = useState(false)

  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container card message-box">
        <p className="eyebrow">A message for 2036</p>
        <h2>Message to 2036</h2>
        <p className="section-subtext">We’re going to read these on our 10th anniversary.</p>

        {!submitted ? (
          <form
            className="message-form"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Your message..." rows="5" />
            <label className="checkbox-row">
              <input type="checkbox" checked={anonymous} onChange={() => setAnonymous((current) => !current)} />
              <span>Anonymous</span>
            </label>
            <button type="submit" className="button button-primary">Send it to 2036 →</button>
          </form>
        ) : (
          <div className="submit-success compact">
            <div className="success-badge">Saved for future us.</div>
            <p>We’ll read this later and pretend we were always this wise.</p>
          </div>
        )}
      </div>
    </motion.section>
  )
}
