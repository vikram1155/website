import { useEffect, useMemo, useState } from 'react'
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

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const passed = Date.now() > targetDate.getTime()

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const stats = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ],
    [timeLeft],
  )

  return (
    <header className="hero-section">
      <nav className="topbar container">
        <span>{weddingConfig.couple.names}</span>
        <a href="#rsvp">RSVP</a>
      </nav>

      <div className="container hero-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="eyebrow">Wedding weekend • Madurai</p>
          <h1>
            {weddingConfig.couple.groom}
            <span className="ampersand">&</span>
            {weddingConfig.couple.bride}
          </h1>
          <p className="hero-tagline">{weddingConfig.couple.dates}</p>
          <p className="hero-meta">{weddingConfig.couple.location}</p>

          <div className="countdown-row">
            {passed ? (
              <div className="count-box count-box-wide">
                <strong>We did it.</strong>
                <span>Thank you for being there.</span>
              </div>
            ) : (
              stats.map((item) => (
                <div key={item.label} className="count-box">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))
            )}
          </div>

          <div className="hero-actions">
            <a href="#events" className="button button-primary">
              {weddingConfig.hero.cta}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="mini-card-header">Save the date</div>
          <div className="mini-date">12–13 Dec 2026</div>
          <div className="mini-venue">Madurai, Tamil Nadu</div>
          <ul>
            <li>
              <span>Wedding</span>
              <strong>13 Dec</strong>
            </li>
            <li>
              <span>Reception</span>
              <strong>12 Dec</strong>
            </li>
            <li>
              <span>Dress code</span>
              <strong>Festive</strong>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  )
}
