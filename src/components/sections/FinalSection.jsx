import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function FinalSection() {
  return (
    <motion.section className="content-section final-section" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container final-wrap">
        <p className="eyebrow">That’s it.</p>
        <h2>That’s it.</h2>
        <p>{weddingConfig.final.description}</p>
        <p className="final-date">{weddingConfig.final.title}</p>
        <p className="final-name">Vikram & Monica</p>
        <p className="small-note">{weddingConfig.final.kicker}</p>
      </div>
    </motion.section>
  )
}
