import Section from "../Section";
import Countdown from "../Countdown";
export default function CountdownSection() {
  return (
    <Section
      className="countdown-section"
      eyebrow="The clock is ticking"
      title="Okay, but how long until this actually happens?"
    >
      <Countdown />
    </Section>
  );
}
