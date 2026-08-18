import { useEffect, useState } from "react";
import { wedding } from "../config/wedding";

const target = new Date(wedding.countdown).getTime();
function getLeft() {
  const diff = Math.max(target - Date.now(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
    live: diff === 0,
  };
}
export default function Countdown() {
  const [left, setLeft] = useState(getLeft());
  useEffect(() => {
    const timer = setInterval(() => setLeft(getLeft()), 1000);
    return () => clearInterval(timer);
  }, []);
  return left.live ? (
    <div className="live-state">
      <strong>EVENT IS LIVE</strong>
      <span>Yep. This is happening.</span>
    </div>
  ) : (
    <div className="countdown-grid">
      {Object.entries(left)
        .filter(([key]) => key !== "live")
        .map(([key, value]) => (
          <div className="countdown-unit" key={key}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{key}</span>
          </div>
        ))}
    </div>
  );
}
