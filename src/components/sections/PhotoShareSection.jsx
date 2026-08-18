import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function PhotoShareSection() {
  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container photo-share-shell card">
        <p className="eyebrow">Got photos?</p>
        <h2>Got photos?</h2>
        <p className="section-subtext">Don’t let those beautiful photos die in your gallery.</p>
        <p>Take photos. Take too many photos. Send them to us.</p>
        <a href={weddingConfig.rsvp.telegramLink} className="button button-primary" target="_blank" rel="noreferrer">Share photos →</a>
        <p className="tiny-note">Especially the embarrassing ones. 😌</p>
      </div>
    </motion.section>
  )
}
