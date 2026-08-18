import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

export default function RandomUsSection() {
  return (
    <motion.section id="random-us" className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container section-head">
        <p className="eyebrow">Random Us 🎲</p>
        <h2>Some facts, some nonsense, all true enough.</h2>
      </div>

      <div className="container random-grid">
        {weddingData.randomUs.map((item) => (
          <article key={item.label} className="random-card">
            <p>{item.label}</p>
            <h3>{item.value}</h3>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
