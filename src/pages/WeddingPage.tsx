import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Hero from "../components/sections/Hero";
import EventDetails from "../components/sections/EventDetails";
import CountdownSection from "../components/sections/CountdownSection";
import StorySection from "../components/sections/StorySection";
import PhotoBoothSection from "../components/sections/PhotoBoothSection";
import MessagesSection from "../components/sections/MessagesSection";
import MissionsSection from "../components/sections/MissionsSection";
import RandomUsSection from "../components/sections/RandomUsSection";
import MoiSection from "../components/sections/MoiSection";
import ClosingSection from "../components/sections/ClosingSection";
import Footer from "../components/Footer";

function getInviteeName(pathname: string, search: string) {
  const queryName = new URLSearchParams(search).get("guest");
  const pathValue = pathname.match(/^\/guest=(.*)$/i)?.[1];
  let pathName = pathValue ?? null;

  if (pathName !== null) {
    try {
      pathName = decodeURIComponent(pathName.replace(/\+/g, " "));
    } catch {
      pathName = pathName.replace(/\+/g, " ");
    }
  }

  const name = (queryName || pathName || "")
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 80);

  if (!name || name.toLowerCase() === "undefined") return "";

  return name
    .split(/([\s'-]+)/)
    .map((part) => {
      if (/^[\s'-]+$/.test(part)) return part;
      const [firstCharacter, ...rest] = Array.from(part);
      return `${firstCharacter?.toLocaleUpperCase()}${rest.join("").toLocaleLowerCase()}`;
    })
    .join("");
}

export default function WeddingPage({
  isAdmin = false,
}: {
  isAdmin?: boolean;
}) {
  const { pathname, search } = useLocation();
  const inviteeName = getInviteeName(pathname, search);
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    if (!intro) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [intro]);

  const closeIntro = () => setIntro(false);

  return (
    <>
      <AnimatePresence>
        {intro && (
          <Loader
            guestName={inviteeName}
            onComplete={closeIntro}
            onSkip={closeIntro}
          />
        )}
      </AnimatePresence>
      {!intro && (
        <motion.div
          className="app-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <Header />
          <main>
            <Hero />
            <CountdownSection background="var(--terracotta)" />
            <EventDetails background="linear-gradient(135deg, #ead8cb, #f7f0e8)" />
            {/* <StorySection /> */}
            <PhotoBoothSection background="var(--paper)" />
            <RandomUsSection background="linear-gradient(135deg, #ead8cb, #f7f0e8)" />

            <MissionsSection background="var(--paper)" />
            <MessagesSection
              isAdmin={isAdmin}
              background="linear-gradient(135deg, #ead8cb, #f7f0e8)"
            />
            <MoiSection background="var(--paper)" />
            <ClosingSection background="linear-gradient(135deg, #ead8cb, #f7f0e8)" />
            {/* <WorkSection /> */}
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
