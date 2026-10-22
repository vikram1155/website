import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { wedding } from "../../config/wedding";
import logo from "../../assets/logo.png";

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
          <div
            style={{
              margin: "30px 0",
              display: "flex",
              justifySelf: "center",
              width: "20%",
            }}
          >
            <img
              src={logo}
              alt={`${wedding.couple.groom} and ${wedding.couple.bride}`}
            />
          </div>
          <p
            className="eyebrow"
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
            }}
          >
            {wedding.couple.dates}
          </p>
          <p
            className="eyebrow"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
            }}
          >
            <MapPin size={16} /> {wedding.couple.location}
          </p>
          <p className="hero-note">{wedding.hero.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
