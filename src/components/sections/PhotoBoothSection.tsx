import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "../Section";

const photoMoments = [
  {
    period: "2018 · SSN did what it does best",
    note: "Seedling. The March Past both of us never wanted to attend.",
    image:
      "https://camo.githubusercontent.com/5e45bc648dba68520ce949a53690af6bcef2880f84a1d46cbb1636649afd6d84/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d313032312e6a7067",
  },
  {
    period: "2018 · Clock tower",
    note: "Two hours that were supposed to be a quick hello.",
    image: null,
  },
  {
    period: "2019 · Fraaands",
    note: "Roamed the campus, clocked 10k for no reason",
    image: null,
  },
  {
    period: "2020 · Covid, and wierd distance",
    note: "Secret calls made the distance feel smaller.",
    image: null,
  },
  {
    period: "2021 · Farewell, but temporary",
    note: "Last day pierced hard, realisations wasn't fun.",
    image: null,
  },
  {
    period: "2022 · Career, even more distance",
    note: "Boring days ending with an hourly chat",
    image: null,
  },
  {
    period: "2023 · Surprises, call and nothing else",
    note: "Secret half day dates, and a lot of KFC.",
    image: null,
  },
  {
    period: "2024 · Trolls, fights, and more fights",
    note: "Chennai to Bangalore to Chennai to Bangalore to Chennai to Bangalore ",
    image: null,
  },
  {
    period: "2025 · Long awaited family chapters",
    note: "'Family' things going as per plan, yet not as per plan.",
    image: null,
  },
  {
    period: "2026 · Us, here",
    note: "All those years, leading to this weekend.",
    image: null,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -56 : 56,
    opacity: 0,
  }),
};

export default function PhotoBoothSection({
  background,
}: {
  background?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const activeMoment = photoMoments[activeIndex];

  const move = (step: number) => {
    setDirection(step);
    setActiveIndex(
      (index) => (index + step + photoMoments.length) % photoMoments.length,
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((index) => (index + 1) % photoMoments.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <Section
      id="story"
      className="photobooth-section"
      background={background}
      eyebrow="How we got here"
      title="Our journey through these years"
      intro=""
    >
      <p className="section-intro photobooth-section-intro">
        We can hear you say - <b>'Ithulam yarra keta ipo' 🙃</b>
        still we thought we should share our story with you! So here it is 😅
      </p>
      <div
        className="photobooth-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Photos of Vikram and Monica in chronological order"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="photobooth-frame">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              className="photobooth-slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) move(1);
                else if (info.offset.x > 60) move(-1);
              }}
              aria-label={`Photo ${activeIndex + 1} of ${photoMoments.length}: ${activeMoment.period}`}
            >
              {activeMoment.image ? (
                <img
                  className="photobooth-image"
                  src={activeMoment.image}
                  alt={activeMoment.note}
                />
              ) : (
                <div
                  className={`photobooth-placeholder tone-${activeIndex % 4}`}
                >
                  <Camera size={34} strokeWidth={1.2} aria-hidden="true" />
                  <span>{activeMoment.period}</span>
                  <small>
                    FRAME {String(activeIndex + 1).padStart(2, "0")}
                  </small>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="photobooth-caption" aria-live="polite">
          {activeMoment.period}
        </p>
        <p className="photobooth-caption" aria-live="polite">
          {activeMoment.note}
        </p>

        <div className="photobooth-controls">
          <button
            type="button"
            className="photobooth-control"
            aria-label="Previous photo"
            onClick={() => move(-1)}
          >
            <ChevronLeft size={20} />
          </button>
          <span aria-live="off">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(photoMoments.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="photobooth-control"
            aria-label="Next photo"
            onClick={() => move(1)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
}
