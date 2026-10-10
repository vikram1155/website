import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "../Section";

const photoMoments = [
  {
    period: "2018 · campus",
    note: "The March Past nobody wanted to attend.",
    image: null,
  },
  {
    period: "2018 · clock tower",
    note: "Two hours that were supposed to be a quick hello.",
    image: null,
  },
  {
    period: "2019 · Fraaands",
    note: "The friendship got a name of its own.",
    image: null,
  },
  {
    period: "2020–21 · apart, not offline",
    note: "Nightly calls made the distance feel smaller.",
    image: null,
  },
  {
    period: "2022 · grown-up life",
    note: "Same team, slightly rougher seas.",
    image: null,
  },
  {
    period: "2023–24 · date days",
    note: "Twelve-hour dates still called a quick meet.",
    image: null,
  },
  {
    period: "2025 · family chapters",
    note: "The future started feeling a little more real.",
    image: null,
  },
  {
    period: "2026 · us, here",
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

export default function PhotoBoothSection() {
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
      id="photobooth"
      eyebrow="The photo booth"
      title="Our camera roll, with the retakes left in"
      intro="A few frames in chronological order, because one of us does care about timelines."
    >
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
