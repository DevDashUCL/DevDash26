"use client";

import TerminalWindow from "@/components/terminal-window";
import Countdown from "@/components/countdown";
import { styles } from "@/lib/styles";
import { REGISTER_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <>
      <nav style={styles.nav}>
        <span style={styles.navLogo}>
          Dev<span style={{ color: "rgba(0,255,100,0.4)" }}>//</span>Dash 2026
        </span>
        <div style={styles.navLinks}>
          {["about", "schedule", "prizes"].map((link) => (
            <a
              key={link}
              className="nav-link"
              href={`#${link}`}
              style={styles.navLink}
            >
              {link}
            </a>
          ))}
          <a
            className="nav-cta"
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            style={styles.navCta}
          >
            ./register
          </a>
        </div>
      </nav>
      <div style={styles.hero}>
        <TerminalWindow />
        <div style={styles.heroEyebrow}>Annual Campus Hackathon</div>
        <h1>DevDash 2026</h1>
        <p style={styles.heroSub}>
          8 hours of building, learning, and breaking things. Unleash your inner
          developer.
        </p>
        <Countdown />
        <div style={styles.infoRow}>
          {["September 2026", "Main Campus Auditorium", "Max 5 Members"].map(
            (chip) => (
              <div key={chip} style={styles.chip}>
                <span style={{ color: "rgba(0,255,100,0.4)" }}># </span>
                {chip}
              </div>
            ),
          )}
        </div>
        <a
          className="btn-reg"
          href={REGISTER_URL}
          target="_blank"
          rel="noreferrer"
          style={styles.btnReg}
        >
          ./register-team →
        </a>
      </div>
    </>
  );
}
