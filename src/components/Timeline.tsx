import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { wedding } from "../config/wedding";
import PlaceholderImage from "./PlaceholderImage";

function storyHtml(text: string) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&lt;(\/?)(b|i)&gt;/gi, "<$1$2>")
    .replace(/\r?\n/g, "<br />");

  return { __html: escaped };
}

export default function Timeline() {
  return (
    <>
      <div className="timeline">
        {wedding.story.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.date + item.title}
            initial={{ opacity: 0, x: index % 2 ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.04 }}
          >
            <div className="timeline-dot" />
            <PlaceholderImage
              src={item.image}
              alt={`${item.title} placeholder`}
              label={item.title}
            />
            <div className="timeline-copy">
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              {/* The formatter preserves newlines and permits only local b/i tags. */}
              <p dangerouslySetInnerHTML={storyHtml(item.text)} />
            </div>
          </motion.article>
        ))}
      </div>
      <br></br>
      <br></br>
      <div className="story-links">
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1.7rem",
            fontWeight: 400,
          }}
        >
          Want to know more about us? We can definitely read your mind voice
          saying no 🙃
        </p>
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1.2 rem",
            fontWeight: 400,
          }}
        >
          Still, for those who would like to know more, here's our POVs and
          stories!
        </p>
        <br></br>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/his-pov">
            <b>Vikram's Story →</b>
          </Link>
          <Link to="/her-pov">
            <b>Monica's Story →</b>
          </Link>
        </div>
      </div>
    </>
  );
}
