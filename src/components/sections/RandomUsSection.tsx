import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import { wedding } from "../../config/wedding";

function getRandomPair() {
  const first = Math.floor(Math.random() * wedding.randomFacts.length);
  let second = Math.floor(Math.random() * wedding.randomFacts.length);

  while (second === first) {
    second = Math.floor(Math.random() * wedding.randomFacts.length);
  }

  return [first, second];
}

export default function RandomUsSection() {
  const [indexes, setIndexes] = useState(getRandomPair);
  return (
    <Section
      id="random-us"
      eyebrow="Even more unnecessary information"
      title="Random Us"
      intro="Things you probably didn't need to know. But now you do."
    >
      <div className="random-facts-wrap">
        <div className="random-facts-grid">
          {indexes.map((index) => (
            <div className="random-card" key={index}>
              <motion.p
                initial={{ opacity: 0, rotateX: -12 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.45 }}
              >
                {wedding.randomFacts[index]}
              </motion.p>
            </div>
          ))}
        </div>
        <button
          className="button button-light"
          onClick={() => setIndexes(getRandomPair())}
        >
          Tell me more
        </button>
      </div>
    </Section>
  );
}
