import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { wedding } from "../../config/wedding";
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <p className="eyebrow" style={{ marginBottom: "30px" }}>
            The Wedding of
          </p>

          <h1>
            {wedding.couple.groom} <span>&</span> {wedding.couple.bride}
          </h1>
          <p className="hero-date">{wedding.couple.dates}</p>
          <p className="hero-location">
            <MapPin size={16} /> {wedding.couple.location}
          </p>
          <p className="hero-note">{wedding.hero.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
