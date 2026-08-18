import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

export default function MemoryWallSection() {
  return (
    <motion.section id="memory-wall" className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container section-head">
        <p className="eyebrow">Memory wall 💬</p>
        <h2>Leave a memory, roast, or a tiny advisory note.</h2>
      </div>

      <div className="container memory-grid">
        {weddingData.memoryWall.map((entry) => (
          <article key={entry.name + entry.text} className="memory-card">
            <div className="memory-avatar">{entry.initial}</div>
            <div>
              <h3>{entry.name}</h3>
              <p>{entry.text}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
