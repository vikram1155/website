import { useState } from "react";
import Section from "../Section";
import MissionCard from "../MissionCard";
import { wedding } from "../../config/wedding";
export default function MissionsSection() {
  const [done, setDone] = useState<number[]>([]);
  return (
    <Section
      id="missions"
      eyebrow="Guest photo missions"
      title="Your Mission, Should You Choose to Accept It 📸"
      intro="Alright bros, this is the part where you become our official eyes and ears! We are completely counting on you to capture all the chaotic and beautiful moments we’re bound to miss. Send over every single photo, video, and story - they are 100% going straight into our wedding album!"
    >
      <div className="mission-progress">
        {done.length} / {wedding.photoMissions.length} missions completed
      </div>
      <div className="mission-grid">
        {wedding.photoMissions.map((text, index) => (
          <MissionCard
            key={text}
            index={index}
            text={text}
            done={done.includes(index)}
            onToggle={() =>
              setDone((current) =>
                current.includes(index)
                  ? current.filter((item) => item !== index)
                  : [...current, index],
              )
            }
          />
        ))}
      </div>
      <div className="telegram-cta">
        <a
          className="button button-dark"
          href={wedding.photoSharing.telegramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Upload Photos to the Telegram Group →
        </a>
      </div>
    </Section>
  );
}
