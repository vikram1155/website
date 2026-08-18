import { motion } from "framer-motion";
export default function MissionCard({
  index,
  text,
  done,
  onToggle,
}: {
  index: number;
  text: string;
  done: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      className={`mission-card ${done ? "mission-done" : ""}`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
    >
      <span>MISSION {String(index + 1).padStart(2, "0")}</span>
      <strong>{text}</strong>
      <small>{done ? "Completed ✓" : "Tap to accept"}</small>
    </motion.button>
  );
}
