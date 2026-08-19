import { useEffect } from "react";
import { motion } from "framer-motion";
import { wedding } from "../config/wedding";

const LOADER_TAGLINE = "Yep, we're getting married!";

export default function Loader({
  onComplete,
  onSkip,
}: {
  onComplete: () => void;
  onSkip?: () => void;
}) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, wedding.intro.durationMs);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="intro-stage"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      }}
    >
      {onSkip && (
        <button className="skip-intro" onClick={onSkip}>
          Skip intro
        </button>
      )}

      <div className="intro-content">
        <div className="intro-composition" aria-label="Vikram and Monica">
          {/* LEFT */}
          <div className="intro-person intro-person-left">
            {/* V */}
            <motion.span
              className="intro-name intro-initial"
              initial={{
                opacity: 0,
                filter: "brightness(0.3) blur(2px)",
              }}
              animate={{
                opacity: [0, 0.8, 1, 1, 0],
                filter: [
                  "brightness(0.3) blur(2px)",
                  "brightness(1) blur(0px)",
                  "brightness(1) blur(0px)",
                  "brightness(1) blur(0px)",
                  "brightness(1) blur(0px)",
                ],
              }}
              transition={{
                duration: 4.8,
                times: [0, 0.2, 0.3, 0.72, 1],
                ease: "easeInOut",
              }}
            >
              V
            </motion.span>

            {/* Vikram */}
            <motion.span
              className="intro-name intro-full-name"
              initial={{
                opacity: 0,
                filter: "brightness(0.3) blur(5px)",
              }}
              animate={{
                opacity: [0, 0, 0.25, 1],
                filter: [
                  "brightness(0.3) blur(5px)",
                  "brightness(0.3) blur(5px)",
                  "brightness(0.8) blur(2px)",
                  "brightness(1) blur(0px)",
                ],
              }}
              transition={{
                delay: 3.6,
                duration: 1.4,
                times: [0, 0.25, 0.55, 1],
                ease: "easeOut",
              }}
            >
              VikraM
            </motion.span>
          </div>

          {/* HEART */}
          <motion.span
            className="intro-heart"
            initial={{
              opacity: 0,
              scale: 0.8,
              filter: "brightness(0.4) blur(2px)",
            }}
            animate={{
              opacity: [0, 0.8, 0.25, 1],
              scale: [0.8, 1.05, 0.95, 1],
              filter: "brightness(1) blur(0px)",
            }}
            transition={{
              delay: 1.5,
              duration: 0.9,
              times: [0, 0.3, 0.55, 1],
              ease: "easeOut",
            }}
          >
            ❤️‍🔥
          </motion.span>

          {/* RIGHT */}
          <div className="intro-person intro-person-right">
            {/* M */}
            <motion.span
              className="intro-name intro-initial"
              initial={{
                opacity: 0,
                filter: "brightness(0.3) blur(2px)",
              }}
              animate={{
                opacity: [0, 0.8, 1, 1, 0],
                filter: [
                  "brightness(0.3) blur(2px)",
                  "brightness(1) blur(0px)",
                  "brightness(1) blur(0px)",
                  "brightness(1) blur(0px)",
                  "brightness(1) blur(0px)",
                ],
              }}
              transition={{
                duration: 4.8,
                times: [0, 0.2, 0.3, 0.72, 1],
                ease: "easeInOut",
              }}
            >
              M
            </motion.span>

            {/* Monica */}
            <motion.span
              className="intro-name intro-full-name"
              initial={{
                opacity: 0,
                filter: "brightness(0.3) blur(5px)",
              }}
              animate={{
                opacity: [0, 0, 0.25, 1],
                filter: [
                  "brightness(0.3) blur(5px)",
                  "brightness(0.3) blur(5px)",
                  "brightness(0.8) blur(2px)",
                  "brightness(1) blur(0px)",
                ],
              }}
              transition={{
                delay: 3.6,
                duration: 1.4,
                times: [0, 0.25, 0.55, 1],
                ease: "easeOut",
              }}
            >
              Monica
            </motion.span>
          </div>
        </div>

        {/* TAGLINE */}

        <motion.p className="intro-tagline" aria-label={LOADER_TAGLINE}>
          {Array.from(LOADER_TAGLINE).map((character, index) => (
            <motion.span
              key={`${character}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 5 + index * 0.025,
                duration: 0.02,
              }}
            >
              {character === " " ? "\u00a0" : character}
            </motion.span>
          ))}

          <motion.i
            className="intro-cursor"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              delay: 5,
              duration: 0.45,
              repeat: 2,
              ease: "linear",
            }}
          />
        </motion.p>
      </div>
    </motion.div>
  );
}
