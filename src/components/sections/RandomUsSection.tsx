import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import { wedding } from "../../config/wedding";
export default function RandomUsSection() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * wedding.randomFacts.length),
  );
  return (
    <Section
      id="random-us"
      eyebrow="Even more unnecessary information"
      title="Random Us"
      intro="Things you probably didn't need to know. But now you do."
    >
      <div className="random-card">
        <motion.p
          key={index}
          initial={{ opacity: 0, rotateX: -12 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.45 }}
        >
          {wedding.randomFacts[index]}
        </motion.p>
        <button
          className="button button-light"
          onClick={() =>
            setIndex(Math.floor(Math.random() * wedding.randomFacts.length))
          }
        >
          Tell me another one
        </button>
      </div>
    </Section>
  );
}
