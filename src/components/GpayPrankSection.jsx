import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '../data/siteData'

export default function GpayPrankSection() {
  const [paid, setPaid] = useState(false)

  return (
    <motion.section id="gpay" className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container prank-box">
        <div className="prank-copy">
          <p className="eyebrow">Moi Prank 💸</p>
          <h2>{weddingData.gpay.title}</h2>
          <p>{weddingData.gpay.text}</p>
        </div>

        <div className="gpay-card">
          <div className="gpay-header">
            <span>GPay</span>
            <span className="gpay-badge">to Vikram</span>
          </div>

          <div className="gpay-amount">{weddingData.gpay.fakeAmount}</div>

          {!paid ? (
            <button type="button" className="primary-btn wide-btn" onClick={() => setPaid(true)}>
              Send fake payment
            </button>
          ) : (
            <div className="success-note">
              <strong>Payment sent</strong>
              <p>{weddingData.gpay.message}</p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
