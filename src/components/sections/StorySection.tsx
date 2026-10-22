import Section from "../Section";
import Timeline from "../Timeline";
export default function StorySection() {
  return (
    <Section
      id="story"
      className="story-section"
      eyebrow="How we got here"
      title="Our journey through these years"
      intro=""
    >
      <p className="section-intro story-section-intro">
        We can hear you say - <b>'Ithulam yarra keta ipo' 🙃</b>
        still we thought we should share our story with you! So here it is 😅
      </p>
      <Timeline />
    </Section>
  );
}
