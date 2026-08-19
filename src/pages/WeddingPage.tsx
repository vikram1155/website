import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Hero from "../components/sections/Hero";
import EventDetails from "../components/sections/EventDetails";
import CountdownSection from "../components/sections/CountdownSection";
import StorySection from "../components/sections/StorySection";
import MessagesSection from "../components/sections/MessagesSection";
import MissionsSection from "../components/sections/MissionsSection";
import RandomUsSection from "../components/sections/RandomUsSection";
import MoiSection from "../components/sections/MoiSection";
import ClosingSection from "../components/sections/ClosingSection";
import Footer from "../components/Footer";

const INTRO_SEEN_KEY = "vm-wedding-intro-seen";

export default function WeddingPage() {
  const [intro, setIntro] = useState(() => {
    try {
      return localStorage.getItem(INTRO_SEEN_KEY) !== "true";
    } catch {
      return true;
    }
  });
  useEffect(() => {
    if (!intro) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [intro]);

  const completeIntro = () => {
    localStorage.setItem(INTRO_SEEN_KEY, "true");
    setIntro(false);
    document.body.style.overflow = "";
  };

  const skipIntro = () => {
    localStorage.setItem(INTRO_SEEN_KEY, "true");
    document.body.style.overflow = "";
    setIntro(false);
  };

  return (
    <>
      <AnimatePresence>
        {intro && <Loader onComplete={completeIntro} onSkip={skipIntro} />}
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
            <EventDetails />
            <CountdownSection />
            <StorySection />
            <MessagesSection />
            <MissionsSection />
            <RandomUsSection />
            <MoiSection />
            <ClosingSection />
            {/* <WorkSection /> */}
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
