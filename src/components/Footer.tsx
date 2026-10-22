import { Camera } from "lucide-react";
import { wedding } from "../config/wedding";
export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <section className="work-section">
        <div className="section-container">
          <div className="footer-copy" style={{ color: "var(--paper)" }}>
            Proudly overdone with a excessive amount of time and energy that
            literally nobody asked for 🙃
            <h2>
              <b>VikraM 🧡 Monica</b>
            </h2>
            Hours spent and concepts rejected designing this: let's not talk
            about it 🤫
          </div>
          <div className="footer-details" style={{ color: "var(--paper)" }}>
            <h4>{wedding.couple.dates}</h4>
            <h4>{wedding.couple.location}</h4>
          </div>
        </div>
        <div className="footer-inner" style={{ color: "var(--paper)" }}>
          <div className="telegram-cta">
            <a
              className="button button-dark"
              href={wedding.photoSharing.telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Apdiye edutha Photos lam.. Telegram Group la potu vidrathu 🙂
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
