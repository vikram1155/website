import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function RandomUsSection() {
  const [fact, setFact] = useState(() => {
    const randomIndex = Math.floor(Math.random() * weddingConfig.randomUsFacts.length)
    return weddingConfig.randomUsFacts[randomIndex]
  })

  const rotateFact = () => {
    const next = weddingConfig.randomUsFacts[Math.floor(Math.random() * weddingConfig.randomUsFacts.length)]
    setFact(next)
  }

  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container card random-shell">
        <p className="eyebrow">Random us 🎲</p>
        <h2>Things you probably didn’t need to know about us</h2>
        <p className="fact-text">{fact}</p>
        <button type="button" className="button button-secondary" onClick={rotateFact}>Tell me another one →</button>
      </div>
    </motion.section>
  )
}
