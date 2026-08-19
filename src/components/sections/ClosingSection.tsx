import PlaceholderImage from "../PlaceholderImage";
import Section from "../Section";
export default function ClosingSection() {
  return (
    <Section
      className="closing-section"
      eyebrow="That’s it."
      title="Closing Note"
    >
      <div className="closing-section-content">
        <div className="closing-copy">
          <p>
            We could've just sent you a formal pathrikkai and called it a day.
            But where's the fun in that? So we thought we'd do something a
            little extra (at least that's what we think 😂) and gave this whole{" "}
            <i>"let's make a wedding website"</i> thing a shot.
          </p>

          <br></br>

          <p>
            We hope you had fun going through it (guessing most of you probably
            scrolled past 🙂), scrolling through our story, looking at our
            pictures, and getting a small glimpse into the chaos that somehow
            brought us all the way here. After all these years, we're happy that
            we get to celebrate with the people who have been part of our
            journey in one way or another.
          </p>

          <br></br>

          <p>And now, for the actual formal invitation...</p>

          <br></br>

          <p>
            <b>We're getting married! 🎉</b>
          </p>

          <p>
            We'd like you to join us on <b>Saturday, 12 Dec</b> and{" "}
            <b>Sunday, 13 Dec</b> in Madurai.
          </p>

          <br></br>

          <p>
            Think of it as a wedding, a get-together, a reunion, and a pretty
            good excuse to come to Madurai for a <i>"food trip"</i> 😌
          </p>

          <br></br>

          <p>
            Come celebrate with us, catch up with people, have fun, and
            hopefully cherish old memories while making some new ones along the
            way.
          </p>

          <br></br>

          <p>See you there 🙌</p>
        </div>
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <PlaceholderImage
            src={"/images/closing.jpg"}
            alt="Closing placeholder"
            label="Closing"
          />
        </div>
      </div>
    </Section>
  );
}
