import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function VenueDressCodeSection() {
  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container venue-dress-grid">
        <div className="card info-panel">
          <p className="eyebrow">Before you ask...</p>
          <h2>Where?</h2>
          <p className="big-copy">{weddingConfig.couple.location}</p>
          <a href={weddingConfig.eventDetails.wedding.googleMaps} className="button button-secondary" target="_blank" rel="noreferrer">Open Maps →</a>
        </div>

        <div className="card info-panel">
          <p className="eyebrow">What to wear?</p>
          <h3>Reception</h3>
          <p>{weddingConfig.eventDetails.dressCode.reception}</p>
          <h3>Wedding</h3>
          <p>{weddingConfig.eventDetails.dressCode.wedding}</p>
        </div>

        <div className="card info-panel full-width">
          <p className="eyebrow">Important</p>
          <ul className="mini-list">
            <li>Come hungry.</li>
            <li>Charge your phone.</li>
            <li>And please don’t disappear immediately after eating.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
