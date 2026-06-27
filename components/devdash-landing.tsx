"use client";

import { styles } from "@/lib/styles";
import TerminalBg from "@/components/terminal-bg";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Program from "@/components/sections/program";
import Prizes from "@/components/sections/prizes";
import Team from "@/components/sections/team";
import FooterSection from "@/components/sections/footer";

export default function DevDashLanding() {
  return (
    <>
      <div style={styles.site}>
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
        <About />
        <Program />
        <Prizes />
        <Team />
        <FooterSection />
      </div>
    </>
  );
}
