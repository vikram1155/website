import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

const targetDate = new Date('2026-12-12T10:00:00+05:30')

function getTimeLeft() {
  const difference = targetDate.getTime() - Date.now()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="hero-section">
      <nav className="topbar container">
        <span>Vikram & Monica</span>
        <a href="#rsvp">RSVP</a>
      </nav>

      <div className="container hero-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="eyebrow">Wedding Weekend • Madurai</p>
          <h1>{weddingData.couple.names}</h1>
          <p className="hero-tagline">12–13 December 2026</p>
          <p className="hero-meta">Madurai, Tamil Nadu</p>

          <div className="countdown-row">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="count-box">
                <strong>{value}</strong>
                <span>{key}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#events" className="primary-btn">View details</a>
            <a href="#rsvp" className="secondary-btn">RSVP now</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="mini-card-header">Save the date</div>
          <div className="mini-date">12 Dec 2026</div>
          <div className="mini-venue">Mahalakshmi Kalyana Mandapam</div>
          <ul>
            {weddingData.heroStats.map((stat) => (
              <li key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  )
}
