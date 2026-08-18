import { motion } from "framer-motion";
import { wedding } from "../config/wedding";

export default function Loader({ onSkip }: { onSkip: () => void }) {
  return (
    <motion.div
      className="intro-stage"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
    >
      <button className="skip-intro" onClick={onSkip}>
        Skip intro
      </button>
      <div className="intro-content">
        <motion.div
          className="monogram"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span>V</span>
          <i>♥</i>
          <span>M</span>
        </motion.div>
        <motion.div
          className="intro-names"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span>{wedding.couple.groom.toUpperCase()}</span>
          <i>♥</i>
          <span>{wedding.couple.bride.toUpperCase()}</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.7 }}
        >
          {wedding.intro.tagline}
        </motion.p>
        <motion.div
          className="intro-lines"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
}
