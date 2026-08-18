// Small standalone panda illustration used as a loader fallback.
// This avoids external assets while still feeling playful and warm.
export default function PandaIllustration({ flipped = false }) {
  return (
    <svg
      className={`panda-illustration ${flipped ? "flipped" : ""}`}
      viewBox="0 0 150 120"
      role="img"
      aria-label="Cute panda illustration"
    >
      <g>
        <ellipse cx="75" cy="100" rx="42" ry="12" fill="rgba(0,0,0,0.06)" />
        <circle cx="52" cy="55" r="24" fill="#1f1a1a" />
        <circle cx="98" cy="55" r="24" fill="#1f1a1a" />
        <circle cx="45" cy="50" r="8" fill="#f8f7f6" />
        <circle cx="105" cy="50" r="8" fill="#f8f7f6" />
        <circle cx="46" cy="49" r="3" fill="#111" />
        <circle cx="106" cy="49" r="3" fill="#111" />
        <circle cx="75" cy="66" r="12" fill="#f8f7f6" />
        <circle cx="68" cy="63" r="2.5" fill="#111" />
        <circle cx="82" cy="63" r="2.5" fill="#111" />
        <path
          d="M66 73c5 5 15 5 20 0"
          stroke="#111"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="31" cy="35" r="6" fill="#1f1a1a" />
        <circle cx="119" cy="35" r="6" fill="#1f1a1a" />
        <path
          d="M42 89c8 8 19 12 33 12s25-4 33-12"
          fill="none"
          stroke="#1f1a1a"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
