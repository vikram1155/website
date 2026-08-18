import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

export default function FinalSection() {
  const [easterEgg, setEasterEgg] = useState(false)

  return (
    <motion.section id="final" className="content-section final-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container final-box">
        <p className="eyebrow">Final note 🥹</p>
        <h2>{weddingData.final.title}</h2>
        <p>{weddingData.final.text}</p>

        <button
          type="button"
          className="tiny-egg-btn"
          onClick={() => setEasterEgg((current) => !current)}
        >
          Hidden clue
        </button>

        {easterEgg && <div className="easter-egg">{weddingData.final.easterEgg}</div>}
      </div>
    </motion.section>
  )
}
