import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "../Section";
import MessageCard from "../MessageCard";
import Modal from "../Modal";
import { wedding } from "../../config/wedding";
import type { GuestMessage } from "../../config/wedding";
const STORAGE_KEY = "vm-wedding-messages";
function readMessages(): GuestMessage[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved) as GuestMessage[];
    const seed = wedding.messages.map((item) => ({
      ...item,
      createdAt: new Date().toISOString(),
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return seed;
  } catch {
    return wedding.messages.map((item) => ({
      ...item,
      createdAt: new Date().toISOString(),
    }));
  }
}
export default function MessagesSection() {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [form, setForm] = useState({ name: "", message: "", anonymous: false });
  const [selectedMessage, setSelectedMessage] = useState<GuestMessage | null>(
    null,
  );
  const trayRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMessages(readMessages()), []);

  useEffect(() => {
    const tray = trayRef.current;
    if (!tray || messages.length < 2) return;

    // Nudge the horizontal tray slowly so guests notice there are more cards.
    const timer = window.setInterval(() => {
      const nextPosition = tray.scrollLeft + 290;
      const atEnd = nextPosition + tray.clientWidth >= tray.scrollWidth - 8;
      tray.scrollTo({ left: atEnd ? 0 : nextPosition, behavior: "smooth" });
    }, 4200);

    return () => window.clearInterval(timer);
  }, [messages.length]);

  const moveTray = (direction: number) => {
    trayRef.current?.scrollBy({ left: direction * 290, behavior: "smooth" });
  };

  const post = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.message.trim()) return;
    const next = [
      {
        name: form.anonymous ? "Anonymous" : form.name.trim() || "Guest",
        message: form.message.trim(),
        createdAt: new Date().toISOString(),
      },
      ...messages,
    ];
    setMessages(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* Storage can be unavailable in private browsing. */
    }
    setForm({ name: "", message: "", anonymous: false });
  };
  return (
    <Section
      id="messages"
      eyebrow="Guestbook"
      title="Leave Us Something Valuable!"
      intro="A wish, a roast, a core memory, terrible advice, or a story about how we all met! This means alot to us and try not to post anonymously 👀 "
    >
      <div className="messages-layout">
        <form className="message-form" onSubmit={post}>
          <label>
            Name
            <input
              value={form.name}
              disabled={form.anonymous}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label>
            Message
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <label className="check-label">
            <input
              type="checkbox"
              checked={form.anonymous}
              onChange={(e) =>
                setForm({ ...form, anonymous: e.target.checked })
              }
            />{" "}
            Post Anonymously
          </label>
          <button className="button button-dark" type="submit">
            Post Message
          </button>
        </form>
        <div className="message-tray-wrap">
          <div
            className="message-tray-controls"
            aria-label="Guestbook message navigation"
          >
            <span>Click a card to read the full message</span>
            <div>
              <button
                type="button"
                className="tray-button"
                onClick={() => moveTray(-1)}
                aria-label="Previous messages"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="tray-button"
                onClick={() => moveTray(1)}
                aria-label="Next messages"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <motion.div ref={trayRef} className="message-grid" layout>
            {messages.map((item, index) => (
              <MessageCard
                key={`${item.createdAt}-${index}`}
                item={item}
                onOpen={() => setSelectedMessage(item)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <Modal
        open={Boolean(selectedMessage)}
        onClose={() => setSelectedMessage(null)}
      >
        {selectedMessage && (
          <div className="message-modal-content">
            <p className="eyebrow">A note from {selectedMessage.name}</p>
            <blockquote style={{ fontSize: "1.25rem" }}>
              “{selectedMessage.message}”
            </blockquote>
            {/* <strong>{selectedMessage.name}</strong> */}
          </div>
        )}
      </Modal>
    </Section>
  );
}
