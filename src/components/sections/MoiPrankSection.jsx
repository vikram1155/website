import { useState } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function MoiPrankSection() {
  const [step, setStep] = useState(0)
  const [reveal, setReveal] = useState(false)

  const prankSteps = [
    'Connecting...',
    'Checking moi account...',
    'Calculating wedding expenses...',
    'Checking your generosity...',
  ]

  const handleClick = () => {
    setReveal(false)
    setStep(0)
    const interval = setInterval(() => {
      setStep((current) => {
        if (current >= prankSteps.length - 1) {
          clearInterval(interval)
          setReveal(true)
          return current
        }
        return current + 1
      })
    }, 700)
  }

  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container prank-layout card">
        <div className="prank-copy">
          <p className="eyebrow">Okay... one last thing.</p>
          <h2>Website lam panoirkom...</h2>
          <p>konojom moi lam paathu pannunga bhaa🙂</p>
        </div>

        <div className="prank-panel">
          {!reveal ? (
            <>
              <div className="qr-card">
                <div className="qr-pattern" aria-hidden="true" />
              </div>
              <button type="button" className="button button-primary" onClick={handleClick}>Moi kudukka →</button>
              <p className="prank-progress">{prankSteps[step]}</p>
            </>
          ) : (
            <div className="prank-reveal">
              <h3>Paaahh 😂</h3>
              <p>Moi lam veika manasu irukaa?</p>
              <p>Apdi iruntha nerla vanthu saptutu veinga 😊</p>
              <p className="soft-copy">Your presence is more than enough. ❤️</p>
              <button type="button" className="button button-secondary" onClick={() => setReveal(false)}>Okay fine, take me back →</button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
