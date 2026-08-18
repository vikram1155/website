import Section from "../Section";
export default function ClosingSection() {
  return (
    <Section
      className="closing-section"
      eyebrow="That’s it."
      title="That's It."
    >
      <div className="closing-copy">
        <p>
          We could have written something dramatic here. We decided against it.
        </p>
        <p>
          We're just really happy that after all these years, we're getting to
          celebrate this with the people who have been part of our lives.
        </p>
        <p>
          So come for the wedding.
          <br />
          Stay for the food.
          <br />
          Take too many photos.
          <br />
          Laugh loudly.
          <br />
          And make a memory with us.
        </p>
        <p>See you there.</p>
      </div>
    </Section>
  );
}
