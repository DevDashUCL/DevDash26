"use client";

import { useEffect, useRef, useState } from "react";

interface CountdownState {
  d: string;
  h: string;
  m: string;
  s: string;
}

interface TermLine {
  prompt?: string;
  cmd?: string;
  out?: string;
  delay: number;
}

const TARGET_DATE = new Date("2026-09-30T00:00:00");
const REGISTER_URL = "https://forms.gle/e7YfuG6DT2M2aaTNA";
const FONT_SIZE = 14;
const CHARS = "ucldevdash";

const TERM_LINES: TermLine[] = [
  { prompt: "ucl@devdash:~$", cmd: " npm run build-the-future", delay: 600 },
  { out: "✓ DevDash 2026 is ready. Let's go.", delay: 1200 },
];

const TRACKS = [
  {
    icon: "⚡",
    name: "Core Infrastructure & tools",
    desc: "Build utilities, optimize configurations, or create automation tools that streamline software engineering workflows and system performance.",
  },
  {
    icon: "🌐",
    name: "Web & Mobile Development",
    desc: "Design and implement highly responsive, minimalist, and secure applications addressing real-world user pain points.",
  },
  {
    icon: "🚀",
    name: "Open Innovation",
    desc: "Got a unique, out-of-the-box idea that cuts through the noise? Build it here without standard track limitations.",
  },
];

const TEAM_CARDS = [
  {
    icon: "👩‍🎨",
    name: "Name",
    desc: "role",
    contact: "email",
  },
  {
    icon: "👨‍💻",
    name: "name",
    desc: "role",
    contact: "email",
  },
];

function pad(n: number): string {
  return String(Math.max(0, n)).padStart(2, "0");
}

function getCountdown(): CountdownState {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { d: "00", h: "00", m: "00", s: "00" };
  return {
    d: pad(Math.floor(diff / 86400000)),
    h: pad(Math.floor((diff % 86400000) / 3600000)),
    m: pad(Math.floor((diff % 3600000) / 60000)),
    s: pad(Math.floor((diff % 60000) / 1000)),
  };
}

function TerminalBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let cols: number;
    let drops: number[];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      cols = Math.floor(canvas!.width / FONT_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    }

    function draw() {
      ctx!.fillStyle = "rgba(6,6,8,0.18)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      ctx!.font = `${FONT_SIZE}px JetBrains Mono, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * FONT_SIZE;
        const alpha = 0.12 + Math.random() * 0.18;
        ctx!.fillStyle = `rgba(0,255,100,${alpha})`;
        ctx!.fillText(ch, i * FONT_SIZE, y);
        if (y > canvas!.height && Math.random() > 0.99) drops[i] = 0;
        drops[i] += 0.1;
      }
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

function TerminalWindow() {
  const [lines, setLines] = useState<TermLine[]>([]);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    TERM_LINES.forEach((line) => {
      timers.push(
        setTimeout(() => setLines((prev) => [...prev, line]), line.delay),
      );
    });

    timers.push(setTimeout(() => setShowCursor(true), 3600));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={styles.terminalWindow}>
      <div style={styles.terminalBar}>
        <div style={{ ...styles.tb, background: "#ff5f57" }} />
        <div style={{ ...styles.tb, background: "#febc2e" }} />
        <div style={{ ...styles.tb, background: "#28c840" }} />
        <span style={styles.terminalPath}>~/devdash-2026</span>
      </div>
      <div style={styles.terminalBody}>
        {lines.map((line, i) =>
          line.prompt ? (
            <div key={i} style={styles.tLine}>
              <span style={styles.prompt}>{line.prompt}</span>
              <span style={styles.cmd}>{line.cmd}</span>
            </div>
          ) : (
            <div key={i} style={styles.tLine}>
              <span style={styles.out}>
                {line.out?.includes("✓") ? (
                  <>
                    <span style={{ color: "#00ff64" }}>✓</span>
                    {line.out.replace("✓", "")}
                  </>
                ) : (
                  line.out
                )}
              </span>
            </div>
          ),
        )}
        {showCursor && (
          <div style={styles.tLine}>
            <span style={styles.prompt}>ucl@devdash:~$</span>{" "}
            <span style={styles.cursor} />
          </div>
        )}
      </div>
    </div>
  );
}

function Countdown() {
  const [time, setTime] = useState<CountdownState>(getCountdown);

  useEffect(() => {
    const id = setInterval(() => setTime(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: Array<{ key: keyof CountdownState; label: string }> = [
    { key: "d", label: "Days" },
    { key: "h", label: "Hours" },
    { key: "m", label: "Mins" },
    { key: "s", label: "Secs" },
  ];

  return (
    <div style={styles.countdown}>
      {units.map(({ key, label }) => (
        <div key={key} style={styles.cdUnit}>
          <span style={styles.cdNum}>{time[key]}</span>
          <span style={styles.cdLbl}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function DevDashLanding() {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500;700;900&display=swap");
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { background: #000; }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .nav-link:hover { color: #00ff64 !important; }
        .nav-cta:hover { background: #33ff88 !important; }
        .btn-reg:hover { background: #33ff88 !important; transform: translateY(-1px); }
        .btn-reg:active { transform: scale(0.98); }
        .track-card:hover { border-color: rgba(0,255,100,0.4) !important; }
        .footer-link:hover { color: #00ff64 !important; }
        h1 {
          font-size: clamp(48px, 9vw, 80px);
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, #fff 20%, #80ffb4 60%, #00ff64 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }
      `}</style>

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

        <nav style={styles.nav}>
          <span style={styles.navLogo}>
            Dev<span style={{ color: "rgba(0,255,100,0.4)" }}>//</span>Dash 2026
          </span>
          <div style={styles.navLinks}>
            {["about", "tracks", "schedule", "prizes"].map((link) => (
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
            8 hours of building, learning, and breaking things. Unleash your
            inner developer.
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

        <hr style={styles.divider} />

        <section id="about" style={styles.section}>
          <div style={styles.secHeader}>
            <div style={styles.secBar} />
            <h2 style={styles.h2}>About the hackathon</h2>
          </div>
          <p style={styles.aboutText}>
            DevDash 2026 brings together the brightest student developers,
            designers, and problem solvers for an intense, high-energy day.
            Whether you're building your first web app, experimenting with
            system scripts, or diving into advanced analytics — this is your
            sandbox to create something meaningful.
          </p>
        </section>

        <hr style={styles.divider} />

        <section id="tracks" style={styles.section}>
          <div style={styles.secHeader}>
            <div style={styles.secBar} />
            <h2 style={styles.h2}>Hackathon tracks</h2>
          </div>
          <div style={styles.tracksGrid}>
            {TRACKS.map((track) => (
              <div
                key={track.name}
                className="track-card"
                style={styles.trackCard}
              >
                <div style={styles.trackIcon}>{track.icon}</div>
                <div style={styles.trackName}>{track.name}</div>
                <p style={styles.trackDesc}>{track.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={styles.divider} />

        <section id="prizes" style={styles.section}>
          <div style={styles.secHeader}>
            <div style={styles.secBar} />
            <h2 style={styles.h2}>Prizes</h2>
          </div>
          <div style={styles.prizesBox}>
            <div style={styles.prizesAmount}>🎁 TBD</div>
            <p style={styles.prizesDesc}>
              Top teams secure technical equipment upgrades, exclusive
              internship interview opportunities, and custom high-performance
              peripheral kits.
            </p>
          </div>
        </section>
        <hr style={styles.divider} />

        <section id="team" style={styles.section}>
          <div style={styles.secHeader}>
            <div style={styles.secBar} />
            <h2 style={styles.h2}>Meet the team</h2>
          </div>
          <div style={styles.tracksGrid}>
            {TEAM_CARDS.map((card) => (
              <div
                key={card.name}
                className="track-card"
                style={styles.trackCard}
              >
                <div style={styles.trackIcon}>{card.icon}</div>
                <div style={styles.trackName}>{card.name}</div>
                <p style={styles.trackDesc}>{card.desc}</p>
                <p style={styles.trackDesc}>{card.contact}</p>
              </div>
            ))}
          </div>
        </section>

        <footer style={styles.footer}>
          <div style={styles.footerGrid}>
            <div>
              <div style={styles.footerTitle}>DevDash 2026</div>
              <p style={styles.footerBody}>
                UCL's annual hackathon — bringing together students, developers,
                designers, and innovators to build impactful solutions.
              </p>
            </div>
            <div>
              <div style={styles.footerTitle}>Quick links</div>
              <ul style={styles.footerLinks}>
                {["about", "tracks", "prizes"].map((link) => (
                  <li key={link}>
                    <a
                      className="footer-link"
                      href={`#${link}`}
                      style={styles.footerLink}
                    >
                      <span style={{ color: "rgba(0,255,100,0.3)" }}>→ </span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={styles.footerTitle}>Hosted by</div>
              <p style={styles.footerBody}>
                Universal College Lanka (UCL)
                <br />
                Colombo, Sri Lanka
              </p>
            </div>
          </div>
          <div style={styles.footerBottom}>
            © 2026 DevDash — Organized by UCL
          </div>
        </footer>
      </div>
    </>
  );
}

const mono = '"JetBrains Mono", monospace';
const green = "#00ff64";

const styles: Record<string, React.CSSProperties> = {
  site: {
    fontFamily: '"Inter", sans-serif',
    background: "#060608",
    color: "#fff",
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 40px",
    borderBottom: "1px solid rgba(0,255,100,0.12)",
    background: "rgba(6,6,8,0.75)",
    backdropFilter: "blur(12px)",
  },
  navLogo: {
    fontFamily: mono,
    fontSize: 15,
    fontWeight: 700,
    color: green,
    letterSpacing: "0.05em",
  },
  navLinks: { display: "flex", gap: 28, alignItems: "center" },
  navLink: {
    fontSize: 13,
    color: "rgba(255,255,255,0.55)",
    textDecoration: "none",
    fontFamily: mono,
    transition: "color 0.15s",
  },
  navCta: {
    fontFamily: mono,
    fontSize: 12,
    fontWeight: 700,
    color: "#000",
    background: green,
    padding: "8px 18px",
    borderRadius: 4,
    textDecoration: "none",
    letterSpacing: "0.04em",
    transition: "background 0.15s",
  },
  hero: {
    position: "relative",
    zIndex: 2,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "120px 24px 80px",
  },
  terminalWindow: {
    background: "rgba(10,12,10,0.85)",
    border: "1px solid rgba(0,255,100,0.25)",
    borderRadius: 8,
    marginBottom: 36,
    width: "100%",
    maxWidth: 520,
    backdropFilter: "blur(8px)",
    textAlign: "left",
    overflow: "hidden",
  },
  terminalBar: {
    background: "rgba(0,255,100,0.06)",
    borderBottom: "1px solid rgba(0,255,100,0.15)",
    padding: "8px 14px",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  tb: { width: 10, height: 10, borderRadius: "50%" },
  terminalPath: {
    fontFamily: mono,
    fontSize: 11,
    color: "rgba(0,255,100,0.5)",
    marginLeft: 8,
  },
  terminalBody: {
    padding: "16px 18px",
    fontFamily: mono,
    fontSize: 12,
    lineHeight: 1.8,
    minHeight: 110,
  },
  tLine: { color: "rgba(255,255,255,0.4)" },
  prompt: { color: green },
  cmd: { color: "#fff" },
  out: { color: "rgba(255,255,255,0.38)" },
  cursor: {
    display: "inline-block",
    width: 8,
    height: 13,
    background: green,
    verticalAlign: "middle",
    animation: "blink 1s step-end infinite",
  },
  heroEyebrow: {
    fontFamily: mono,
    fontSize: 11,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: green,
    marginBottom: 16,
  },
  heroSub: {
    fontSize: 15,
    color: "rgba(255,255,255,0.45)",
    maxWidth: 400,
    lineHeight: 1.7,
    marginBottom: 32,
  },
  countdown: {
    display: "flex",
    gap: 12,
    marginBottom: 32,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cdUnit: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0,255,100,0.04)",
    border: "1px solid rgba(0,255,100,0.2)",
    borderRadius: 6,
    padding: "14px 20px 10px",
    minWidth: 76,
  },
  cdNum: {
    fontFamily: mono,
    fontSize: 28,
    fontWeight: 700,
    color: green,
    lineHeight: 1,
    fontVariantNumeric: "tabular-nums",
  },
  cdLbl: {
    fontFamily: mono,
    fontSize: 9,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(0,255,100,0.4)",
    marginTop: 6,
  },
  infoRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 32,
  },
  chip: {
    fontFamily: mono,
    fontSize: 14,
    color: "rgba(255,255,255,0.5)",
    border: "1px solid rgba(0,255,100,0.15)",
    borderRadius: 4,
    padding: "5px 12px",
  },
  btnReg: {
    fontFamily: mono,
    fontSize: 13,
    fontWeight: 700,
    color: "#000",
    background: green,
    padding: "14px 32px",
    borderRadius: 4,
    textDecoration: "none",
    letterSpacing: "0.04em",
    transition: "background 0.15s, transform 0.1s",
    display: "inline-block",
  },
  divider: {
    border: "none",
    borderTop: "1px solid rgba(0,255,100,0.1)",
    margin: "0 40px",
  },
  section: {
    position: "relative",
    zIndex: 2,
    padding: "80px 40px",
    maxWidth: 960,
    margin: "0 auto",
  },
  secHeader: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 32,
  },
  secBar: {
    width: 3,
    height: 28,
    background: green,
    borderRadius: 2,
  },
  h2: { fontSize: 28, fontWeight: 700 },
  aboutText: {
    fontSize: 15,
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.8,
    maxWidth: 680,
    marginLeft: "auto",
    marginRight: "auto",
  },
  tracksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  },
  trackCard: {
    background: "rgba(0,255,100,0.03)",
    border: "1px solid rgba(0,255,100,0.15)",
    borderRadius: 8,
    padding: 24,
    transition: "border-color 0.2s",
  },
  trackIcon: { fontSize: 22, marginBottom: 12 },
  trackName: {
    fontFamily: mono,
    fontSize: 16,
    fontWeight: 700,
    color: green,
    marginBottom: 10,
  },
  trackDesc: {
    fontSize: 13,
    color: "rgba(255,255,255,0.45)",
    lineHeight: 1.7,
  },
  prizesBox: {
    background: "rgba(0,255,100,0.03)",
    border: "1px solid rgba(0,255,100,0.2)",
    borderRadius: 8,
    padding: 32,
    maxWidth: 480,
    margin: "0 auto",
  },
  prizesAmount: {
    fontFamily: mono,
    fontSize: 28,
    fontWeight: 700,
    color: green,
    marginBottom: 12,
  },
  prizesDesc: {
    fontSize: 14,
    color: "rgba(255,255,255,0.45)",
    lineHeight: 1.7,
  },
  footerCta: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "60px 24px",
    borderTop: "1px solid rgba(0,255,100,0.1)",
  },
  footerCtaText: {
    fontFamily: mono,
    fontSize: 13,
    color: "rgba(0,255,100,0.5)",
    marginBottom: 20,
  },
  footer: {
    position: "relative",
    zIndex: 2,
    borderTop: "1px solid rgba(0,255,100,0.1)",
    padding: "48px 40px 32px",
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 32,
    maxWidth: 900,
    margin: "0 auto 32px",
  },
  footerTitle: {
    fontFamily: mono,
    fontSize: 14,
    fontWeight: 700,
    color: green,
    marginBottom: 12,
  },
  footerBody: {
    fontSize: 13,
    color: "rgba(255,255,255,0.4)",
    lineHeight: 1.7,
  },
  footerLinks: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  footerLink: {
    fontFamily: mono,
    fontSize: 12,
    color: "rgba(255,255,255,0.4)",
    textDecoration: "none",
    transition: "color 0.15s",
  },
  footerBottom: {
    textAlign: "center",
    fontFamily: mono,
    fontSize: 11,
    color: "rgba(255,255,255,0.2)",
    borderTop: "1px solid rgba(0,255,100,0.08)",
    paddingTop: 20,
    maxWidth: 900,
    margin: "0 auto",
  },
};
