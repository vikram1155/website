import { Camera } from "lucide-react";
import { wedding } from "../config/wedding";
export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <section className="work-section">
        <div className="section-container">
          <div style={{ color: "var(--paper)" }}>
            Proudly overdone with a comically excessive amount of time and
            energy that literally nobody asked for 🙃 <br></br>
            <h2 style={{ marginTop: "0.5rem" }}>
              <b>VikraM 🧡 Monica</b>
            </h2>
            Hours spent and concepts rejected designing this: let's not talk
            about it 🙃
          </div>
          <br></br>
          <h4 style={{ color: "var(--paper)" }}>{wedding.couple.dates}</h4>
          <h4 style={{ color: "var(--paper)" }}>{wedding.couple.location}</h4>
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
