import { motion } from 'framer-motion'

export function Reveal({ children, className = '', as: Component = 'div', id }) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      as={Component}
    >
      {children}
    </motion.div>
  )
}
