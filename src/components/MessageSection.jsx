import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

export default function MessageSection() {
  return (
    <motion.section id="message-2036" className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container letter-box">
        <p className="eyebrow">Message to 2036 ❤️</p>
        <h2>{weddingData.anniversary.title}</h2>
        <p>{weddingData.anniversary.text}</p>
      </div>
    </motion.section>
  )
}
