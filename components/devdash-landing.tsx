"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "@/lib/styles";
import { Navbar } from "@/components/layout/Navbar";
import LoadingScreen from "@/components/sections/LoadingScreen";
import Hero from "@/components/sections/Hero";
import AboutDevDash from "@/components/sections/AboutDevDash";
import { Schedule } from "@/components/sections/Schedule";
import Prizes from "@/components/sections/Prizes";
import MeetTheTeam from "@/components/sections/MeetTheTeam";
import { FAQSection } from "@/components/sections/Faq";
import Registration from "@/components/sections/Registration";
import Footer from "@/components/layout/Footer";

export default function DevDashLanding() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("devdash_booted");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hasBooted || prefersReduced) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("devdash_booted", "true");
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            style={styles.site}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <Navbar />

            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 30%, transparent 40%, rgba(6,6,8,0.7) 100%)",
              }}
            />

            <Hero />
            <AboutDevDash />
            {/* <Schedule /> */}
            <Prizes />
            <MeetTheTeam />
            <FAQSection />
            <Registration />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
