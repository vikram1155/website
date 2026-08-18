import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function MemoryWallSection() {
  const [messages, setMessages] = useState(weddingConfig.memoryWallSeed)
  const [form, setForm] = useState({ name: '', message: '', anonymous: false })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.message.trim()) return

    setMessages((current) => [
      {
        name: form.anonymous ? 'Anonymous' : form.name || 'Guest',
        message: form.message.trim(),
      },
      ...current,
    ])

    setForm({ name: '', message: '', anonymous: false })
  }

  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container section-heading-wrap">
        <p className="eyebrow">Memory wall 💬</p>
        <h2>Leave us something.</h2>
        <p className="section-subtext">One memory. One roast. One piece of advice. Anything.</p>
      </div>

      <div className="container memory-layout">
        <form className="card memory-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" disabled={form.anonymous} />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write something sweet, funny, or mildly rude." rows="4" />
          </label>
          <label className="checkbox-row">
            <input type="checkbox" name="anonymous" checked={form.anonymous} onChange={handleChange} />
            <span>Post anonymously</span>
          </label>
          <button type="submit" className="button button-primary">Leave it →</button>
        </form>

        <div className="memory-grid">
          {messages.map((entry, index) => (
            <article key={`${entry.name}-${index}`} className="card memory-card">
              <div className="memory-avatar">{(entry.name || 'A').slice(0, 1).toUpperCase()}</div>
              <div>
                <h3>{entry.name}</h3>
                <p>{entry.message}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
