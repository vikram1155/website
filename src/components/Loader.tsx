import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const GREETING_TYPING_MS = 2000;
const LOGO_DELAY_MS = GREETING_TYPING_MS + 1000;
const LOGO_ANIMATION_MS = 2000;
const WEDDING_TAGLINE_DELAY_MS = LOGO_DELAY_MS + LOGO_ANIMATION_MS + 1000;
const WEDDING_TAGLINE_TYPING_MS = 3000;
const OUTRO_HOLD_MS = 2000;
const INTRO_DURATION_MS =
  WEDDING_TAGLINE_DELAY_MS + WEDDING_TAGLINE_TYPING_MS + OUTRO_HOLD_MS;
const WEDDING_TAGLINE = "Yep, we're getting married!";

export default function Loader({
  guestName,
  onComplete,
  onSkip,
}: {
  guestName?: string;
  onComplete: () => void;
  onSkip?: () => void;
}) {
  const name = guestName?.trim();
  const displayName = name && name.toLowerCase() !== "undefined" ? name : "";
  const greeting = displayName
    ? `Hello, ${displayName} 👋`
    : "Hello there 👋";
  const greetingCharacters = Array.from(greeting);

  useEffect(() => {
    const timer = window.setTimeout(onComplete, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="intro-stage">
      {onSkip && (
        <button className="skip-intro" type="button" onClick={onSkip}>
          Skip intro
        </button>
      )}

      <div className="intro-content">
        <p className="intro-tagline" aria-label={greeting}>
          {greetingCharacters.map((character, index) => (
            <motion.span
              key={`${character}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay:
                  (GREETING_TYPING_MS / 1000) *
                  (index / Math.max(greetingCharacters.length - 1, 1)),
                duration: 0.001,
              }}
            >
              {character === " " ? "\u00a0" : character}
            </motion.span>
          ))}
        </p>
        <motion.img
          className="intro-logo"
          src={logo}
          alt="Vikram and Monica"
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: LOGO_DELAY_MS / 1000,
            duration: LOGO_ANIMATION_MS / 1000,
            ease: "easeOut",
          }}
        />
        <p
          className="intro-tagline intro-wedding-tagline"
          aria-label={WEDDING_TAGLINE}
        >
          {Array.from(WEDDING_TAGLINE).map((character, index) => (
            <motion.span
              key={`${character}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay:
                  WEDDING_TAGLINE_DELAY_MS / 1000 +
                  (WEDDING_TAGLINE_TYPING_MS / 1000) *
                    (index / Math.max(WEDDING_TAGLINE.length - 1, 1)),
                duration: 0.001,
              }}
            >
              {character === " " ? "\u00a0" : character}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
}
