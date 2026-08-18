import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function EasterEggSection() {
  const [opened, setOpened] = useState(false)
  const [versionOpen, setVersionOpen] = useState(false)

  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container easter-shell">
        <button type="button" className="tiny-egg-btn" onClick={() => setOpened((current) => !current)}>
          {weddingConfig.easterEgg.notClickText}
        </button>

        {opened ? (
          <div className="easter-box">
            <p>{weddingConfig.easterEgg.message}</p>
            <p>{weddingConfig.easterEgg.followUp}</p>
          </div>
        ) : null}

        <button type="button" className="footer-secret" onClick={() => setVersionOpen((current) => !current)}>
          {weddingConfig.easterEgg.footerLabel}
        </button>

        {versionOpen ? (
          <div className="version-box">
            <p>{weddingConfig.easterEgg.footerResult}</p>
          </div>
        ) : null}
      </div>
    </motion.section>
  )
}
