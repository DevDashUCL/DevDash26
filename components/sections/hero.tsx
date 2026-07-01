"use client";

import { useState } from "react";
import TerminalWindow from "@/components/terminal-window";
import Countdown from "@/components/countdown";
import { styles, blue } from "@/lib/styles";
import { REGISTER_URL } from "@/lib/constants";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="site-nav" style={styles.nav}>
        <span style={styles.navLogo}>Dev Dash</span>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div className="nav-links-desktop" style={{ display: "flex", gap: 28, alignItems: "center" }}>
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
          </div>
          <a
            className="nav-cta"
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            style={styles.navCta}
          >
            ./register
          </a>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: 4,
              padding: 4,
            }}
          >
            <span style={{ display: "block", width: 18, height: 2, background: blue, borderRadius: 1 }} />
            <span style={{ display: "block", width: 18, height: 2, background: blue, borderRadius: 1 }} />
            <span style={{ display: "block", width: 18, height: 2, background: blue, borderRadius: 1 }} />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "fixed",
            top: 52,
            left: 0,
            right: 0,
            zIndex: 9,
            background: "rgba(6,6,8,0.95)",
            borderBottom: `1px solid rgba(0,102,255,0.12)`,
            backdropFilter: "blur(12px)",
            padding: "16px 24px",
            display: "none",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {["about", "schedule", "prizes"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
      <div style={styles.hero}>
        <TerminalWindow />
        <div style={styles.heroEyebrow}>Annual Campus Hackathon</div>
        <img
          src="/devdash.png"
          alt="DevDash 2026"
          style={{
            width: "clamp(300px, 50vw, 700px)",
            height: "auto",
            marginBottom: 16,
          }}
        />
        <p style={styles.heroSub}>
          8 hours of building, learning, and breaking things. Unleash your inner
          developer.
        </p>
        <Countdown />
        <div style={styles.infoRow}>
          {["September 2026", "Main Campus Auditorium", "Max 5 Members"].map(
            (chip) => (
              <div key={chip} style={styles.chip}>
                <span style={{ color: "rgba(0,102,255,0.4)" }}># </span>
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
