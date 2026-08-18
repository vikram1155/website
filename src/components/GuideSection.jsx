import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

export default function GuideSection() {
  return (
    <motion.section id="guide" className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container section-head">
        <p className="eyebrow">Madurai guide</p>
        <h2>Useful bits for the weekend.</h2>
      </div>

      <div className="container guide-grid">
        {weddingData.guide.map((item) => (
          <article key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="container trivia-wrap">
        <h3>Madurai trivia</h3>
        <ul className="trivia-list">
          {weddingData.trivia.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
