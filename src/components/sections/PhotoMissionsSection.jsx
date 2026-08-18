import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function PhotoMissionsSection() {
  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container section-heading-wrap">
        <p className="eyebrow">Photo missions 📸</p>
        <h2>Your mission, should you choose to accept it.</h2>
      </div>

      <div className="container mission-list">
        {weddingConfig.missions.map((mission, index) => (
          <div key={mission} className="mission-item">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{mission}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
