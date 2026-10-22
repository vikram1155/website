import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import Section from "../Section";
import MessageCard from "../MessageCard";
import Modal from "../Modal";
import {
  getGuestMessages,
  isGuestbookConfigured,
  postGuestMessage,
  deleteGuestMessage,
} from "../../config/guestbook";
import type { GuestMessage } from "../../config/guestbook";
export default function MessagesSection({
  isAdmin = false,
  background,
}: {
  isAdmin?: boolean;
  background?: string;
}) {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [form, setForm] = useState({ name: "", message: "", anonymous: false });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<GuestMessage | null>(
    null,
  );
  const trayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let active = true;
    getGuestMessages()
      .then((loadedMessages) => {
        if (active) setMessages(loadedMessages);
      })
      .catch(() => {
        if (active) setError("Messages could not be loaded. Please try again.");
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

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

  const post = async (event: React.FormEvent) => {
    event.preventDefault();
    const message = form.message.trim();
    if (!message || isSubmitting) return;

    setError("");
    setIsSubmitting(true);
    try {
      const posted = await postGuestMessage(
        form.anonymous ? "Anonymous" : form.name.trim() || "Guest",
        message,
      );
      setMessages((current) => [posted, ...current]);
      setForm({ name: "", message: "", anonymous: false });
    } catch {
      setError("Your message could not be posted. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteSelectedMessage = async () => {
    if (!selectedMessage || isDeleting) return;
    if (!window.confirm("Delete this guestbook message?")) return;

    setDeleteError("");
    setIsDeleting(true);
    try {
      await deleteGuestMessage(selectedMessage.id);
      setMessages((current) =>
        current.filter((item) => item.id !== selectedMessage.id),
      );
      setSelectedMessage(null);
    } catch {
      setDeleteError("This message could not be deleted. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Section
      id="write-to-us"
      background={background}
      eyebrow="Guestbook"
      title="Leave Us Something Valuable!"
      intro="A wish, a roast, a core memory, terrible advice, rumours or a story about how we all met! Btw, this gets posted, kanda menika post panirathinga frends 🙂. This means a lot to us and try not to post anonymously 👀 "
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
          <button
            className="button button-dark"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting..." : "Post Message"}
          </button>
          {error && <p role="alert">{error}</p>}
          {!isGuestbookConfigured && (
            <p className="section-note">
              Guestbook database is not configured yet. Messages are saved on
              this device for now.
            </p>
          )}
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
            {isLoading && <p className="section-note">Loading messages...</p>}
            {!isLoading && messages.length === 0 && (
              <p className="section-note">Be the first to leave a message.</p>
            )}
            {messages.map((item) => (
              <MessageCard
                key={item.id}
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
              {selectedMessage.message}
            </blockquote>
            {isAdmin && (
              <button
                className="button button-danger"
                type="button"
                onClick={deleteSelectedMessage}
                disabled={isDeleting}
              >
                <Trash2 size={16} />
                {isDeleting ? "Deleting..." : "Delete message"}
              </button>
            )}
            {deleteError && <p role="alert">{deleteError}</p>}
          </div>
        )}
      </Modal>
    </Section>
  );
}
