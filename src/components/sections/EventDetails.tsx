import { Clock3, MapPin } from "lucide-react";
import Section from "../Section";
import { wedding } from "../../config/wedding";
export default function EventDetails({ background }: { background?: string }) {
  return (
    <Section
      id="events"
      background={background}
      eyebrow="The important bits"
      title="Location & Timing"
      intro=""
    >
      <div className="event-grid">
        {wedding.events.map((event) => (
          <article className="event-card" key={event.date}>
            <span className="event-date">{event.date}</span>
            <h3>{event.label}</h3>
            <p>
              <MapPin size={16} /> {wedding.venue.name}
            </p>
            <p>
              <Clock3 size={16} /> {event.time}
            </p>
            <a
              className="text-link"
              href={wedding.venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              location 📌
            </a>
          </article>
        ))}
      </div>
      <p className="section-note">
        We checked your calendar and you’re free. Save your excuses for work,
        we'll see you for both days 😌
      </p>
    </Section>
  );
}
