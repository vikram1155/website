import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../../data/weddingConfig'

export default function MaduraiTriviaSection() {
  const [fact, setFact] = useState(() => {
    const randomIndex = Math.floor(Math.random() * weddingConfig.triviaFacts.length)
    return weddingConfig.triviaFacts[randomIndex]
  })

  const nextFact = () => {
    const next = weddingConfig.triviaFacts[Math.floor(Math.random() * weddingConfig.triviaFacts.length)]
    setFact(next)
  }

  const factList = useMemo(() => weddingConfig.triviaFacts, [])

  return (
    <motion.section className="content-section" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <div className="container trivia-shell card">
        <p className="eyebrow">Madurai trivia</p>
        <h2>One random Madurai fact</h2>
        <p className="fact-text">{fact}</p>
        <button type="button" className="button button-secondary" onClick={nextFact}>Another one →</button>
        <ul className="mini-fact-list">
          {factList.slice(0, 5).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
