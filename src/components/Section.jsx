import { motion } from "framer-motion";

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  background,
}) {
  return (
    <motion.section
      id={id}
      className={`site-section ${className}`.trim()}
      style={background ? { background } : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-container">
        {(eyebrow || title || intro) && (
          <header className="section-heading">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {intro && <p className="section-intro">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </motion.section>
  );
}
