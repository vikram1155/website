import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function MaduraiGuideSection() {
  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container section-heading-wrap">
        <p className="eyebrow">Since you’re already coming to Madurai...</p>
        <h2>Since you’re already coming to Madurai...</h2>
        <p className="section-subtext">Might as well eat something good.</p>
      </div>

      <div className="container guide-grid">
        {weddingConfig.guide.map((item) => (
          <article key={item.title} className="card guide-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.map} target="_blank" rel="noreferrer">Open map →</a>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
