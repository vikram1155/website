import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import { wedding } from "../../config/wedding";

function shuffleFacts() {
  const indexes = wedding.randomFacts.map((_, index) => index);

  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[randomIndex]] = [
      indexes[randomIndex],
      indexes[index],
    ];
  }

  return indexes;
}

function drawFactPair(remaining: number[]) {
  const pair: number[] = [];
  let deck = [...remaining];
  const pairSize = Math.min(2, wedding.randomFacts.length);

  while (pair.length < pairSize) {
    if (deck.length === 0) deck = shuffleFacts();
    const [next, ...rest] = deck;
    deck = rest;

    if (pair.includes(next)) {
      deck.push(next);
      continue;
    }

    pair.push(next);
  }

  return { indexes: pair, remaining: deck };
}

export default function RandomUsSection({
  background,
}: {
  background?: string;
}) {
  const [selection, setSelection] = useState(() => drawFactPair([]));
  return (
    <Section
      id="random-us"
      background={background}
      eyebrow="Even more unnecessary information"
      title="Random Us"
      intro="Things you probably didn't need to know. But now you do."
    >
      <div className="random-facts-wrap">
        <div className="random-facts-grid">
          {selection.indexes.map((index) => (
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
          // className="button button-light"
          onClick={() =>
            setSelection((current) => drawFactPair(current.remaining))
          }
          className="button button-dark"
        >
          Tell me more
        </button>
      </div>
    </Section>
  );
}
