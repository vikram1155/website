import { motion } from "framer-motion";
import type { GuestMessage } from "../config/wedding";
export default function MessageCard({
  item,
  onOpen,
}: {
  item: GuestMessage;
  onOpen: () => void;
}) {
  return (
    <motion.article
      className="message-card"
      role="button"
      tabIndex={0}
      aria-label={`Read message from ${item.name}`}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      layout
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
    >
      <p>“{item.message}”</p>
      <footer>
        <strong>{item.name}</strong>
      </footer>
    </motion.article>
  );
}
