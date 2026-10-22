import Section from "../Section";
import Countdown from "../Countdown";
export default function CountdownSection({
  background,
}: {
  background?: string;
}) {
  return (
    <Section
      className="countdown-section"
      background={background}
      eyebrow="This timer is running too fast right 👀"
      title="Okay, but how long until this actually happens?"
    >
      <Countdown />
    </Section>
  );
}
