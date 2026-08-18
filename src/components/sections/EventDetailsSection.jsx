import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function EventDetailsSection() {
  const events = [weddingConfig.eventDetails.reception, weddingConfig.eventDetails.wedding]

  return (
    <motion.section id="events" className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container section-heading-wrap">
        <p className="eyebrow">Okay, here’s the important stuff.</p>
        <h2>Okay, here’s the important stuff.</h2>
      </div>

      <div className="container events-grid">
        {events.map((event) => (
          <article key={event.label} className="card event-card">
            <p className="event-label">{event.label}</p>
            <h3>{event.date}</h3>
            <p>{event.summary}</p>
            <p className="event-meta">Time: {event.time}</p>
            <p className="event-meta">Venue: {event.venue}</p>
            <p className="event-meta">Address: {event.address}</p>
            <a href={event.googleMaps} target="_blank" rel="noreferrer">Open map →</a>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
