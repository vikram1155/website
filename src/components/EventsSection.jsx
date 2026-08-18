import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

export default function EventsSection() {
  return (
    <motion.section id="events" className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container section-head">
        <p className="eyebrow">Events & venue</p>
        <h2>A weekend of family, food, and a bit of chaos.</h2>
      </div>

      <div className="container events-grid">
        {weddingData.events.map((event) => (
          <article key={event.title} className="event-card">
            <p className="event-label">{event.title}</p>
            <h3>{event.day}</h3>
            <p>{event.time}</p>
            <p className="event-place">{event.place}</p>
            <p className="event-note">{event.note}</p>
          </article>
        ))}
      </div>

      <div className="container venue-panel">
        <div className="venue-info">
          <p className="eyebrow">Venue</p>
          <h3>Mahalakshmi Kalyana Mandapam</h3>
          <p>Near Madurai, Tamil Nadu</p>
          <p>Dress code: Traditional / Festive</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">Open map</a>
        </div>

        <div className="map-card" aria-label="Map placeholder">
          <div className="map-pin" />
          <div className="map-detail">Madurai</div>
        </div>
      </div>
    </motion.section>
  )
}
