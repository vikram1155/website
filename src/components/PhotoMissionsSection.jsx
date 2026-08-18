import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

export default function PhotoMissionsSection() {
  return (
    <motion.section id="photo-missions" className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container section-head">
        <p className="eyebrow">Photo missions 📸</p>
        <h2>One tiny challenge per person, and absolutely no taking things seriously.</h2>
      </div>

      <div className="container mission-list">
        {weddingData.photoMissions.map((mission, index) => (
          <div key={mission} className="mission-item">
            <span>0{index + 1}</span>
            <p>{mission}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
