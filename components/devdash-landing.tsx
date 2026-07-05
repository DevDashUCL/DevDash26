"use client";

import { styles } from "@/lib/styles";
import { Navbar } from "@/components/layout/Navbar";
import TerminalBg from "@/components/terminal-bg";
import Hero from "@/components/sections/Hero";
import MissionBrief from "@/components/sections/MissionBrief";
import EventTimeline from "@/components/sections/EventTimeline";
import TheArsenal from "@/components/sections/TheArsenal";
import MeetTheTeam from "@/components/sections/MeetTheTeam";
import Footer from "@/components/layout/Footer";

export default function DevDashLanding() {
  return (
    <>
      <div style={styles.site}>
        <Navbar />
        <TerminalBg />

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
        <MissionBrief />
        <EventTimeline />
        <TheArsenal />
        <MeetTheTeam />
        <Footer />
      </div>
    </>
  );
}
