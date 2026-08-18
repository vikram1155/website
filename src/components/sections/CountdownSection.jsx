import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

const targetDate = new Date(weddingConfig.couple.weddingDate)

function getTimeLeft() {
  const diff = Math.max(targetDate.getTime() - Date.now(), 0)

  if (diff === 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const passed = Date.now() > targetDate.getTime()

  return (
    <motion.section className="content-section countdown-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container countdown-shell">
        <p className="eyebrow">Countdown</p>
        <h2>{passed ? 'We did it. 🥹' : 'See you in...'}</h2>

        {passed ? (
          <p className="countdown-message">Thank you for being there.</p>
        ) : (
          <div className="countdown-grid">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="counttile">
                <strong>{value}</strong>
                <span>{key}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}
