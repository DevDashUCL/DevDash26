import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <span className="nav-logo">DevDash 2026</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#schedule">Schedule</a>
          <a href="#prizes">Prizes</a>
          <a
            href="https://forms.gle/e7YfuG6DT2M2aaTNA"
            target="_blank"
            className="nav-cta"
          >
            Register
          </a>
        </div>
      </nav>
      <div className="hero">
        <div className="hero-eyebrow">Annual Campus Hackathon</div>
        <h1>DevDash 2026</h1>
        <p className="hero-sub">
          6 hours of building, learning, and breaking things. Unleash your inner
          developer.
        </p>
        <div className="info-cards">
          <div className="info-card">
            <div className="label">When</div>
            <div className="value">September 2026</div>
          </div>
          <div className="info-card">
            <div className="label">Where</div>
            <div className="value">Main Campus Lab & Virtual</div>
          </div>
          <div className="info-card">
            <div className="label">Team size</div>
            <div className="value">2–5 Members</div>
          </div>
        </div>
        <a
          href="https://forms.gle/e7YfuG6DT2M2aaTNA"
          target="_blank"
          className="btn-register"
        >
          Register your team →
        </a>
      </div>
      <hr className="divider" />
      <section id="about">
        <div className="section-header">
          <div className="section-bar" />
          <h2>About the hackathon</h2>
        </div>
        <p className="about-text">
          DevDash 2026 brings together the brightest student developers,
          designers, and problem solvers for an intense, high-energy weekend.
          Whether you are building your very first web app, experimenting with
          custom system scripts, or diving into advanced analytics — this is
          your sandbox to create something meaningful.
        </p>
      </section>
      <hr className="divider" />
      <section id="tracks">
        <div className="section-header">
          <div className="section-bar" />
          <h2>Hackathon tracks</h2>
        </div>
        <div className="tracks-grid">
          <div className="track-card">
            <div className="track-icon">⚡</div>
            <div className="track-name">Core Infrastructure & Tools</div>
            <p className="track-desc">
              Build utilities, optimize configurations, or create automation
              tools that streamline software engineering workflows and system
              performance.
            </p>
          </div>
          <div className="track-card">
            <div className="track-icon">🌐</div>
            <div className="track-name">Web & Mobile Apps</div>
            <p className="track-desc">
              Design and implement highly responsive, minimalist, and secure
              applications addressing real-world user pain points.
            </p>
          </div>
          <div className="track-card">
            <div className="track-icon">🚀</div>
            <div className="track-name">Open Innovation</div>
            <p className="track-desc">
              Got a unique, out-of-the-box idea that cuts through the noise?
              Build it here without standard track limitations.
            </p>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="schedule">
        <div className="section-header">
          <div className="section-bar" />
          <h2>The schedule</h2>
        </div>
        <div className="schedule-table">
          <div className="schedule-row">
            <span className="schedule-time">Friday, 5:00 PM</span>
            <span className="schedule-event">
              Opening Ceremony & Team Matching
            </span>
          </div>
          <div className="schedule-row">
            <span className="schedule-time">Friday, 6:30 PM</span>
            <span className="schedule-event">Hacking Begins & Dinner</span>
          </div>
          <div className="schedule-row">
            <span className="schedule-time">Saturday, 10:00 AM</span>
            <span className="schedule-event">
              Technical Mentorship Checkpoints
            </span>
          </div>
          <div className="schedule-row">
            <span className="schedule-time">Sunday, 2:00 PM</span>
            <span className="schedule-event">Code Freeze & Presentations</span>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section id="prizes">
        <div className="section-header">
          <div className="section-bar" />
          <h2>Prizes</h2>
        </div>
        <div className="prizes-box">
          <div className="prizes-amount">🎁 Over $2,500 in prizes</div>
          <p className="prizes-desc">
            Top teams secure technical equipment upgrades, exclusive internship
            interview opportunities, and custom high-performance peripheral
            kits.
          </p>
        </div>
      </section>
      <div className="footer-cta">
        <p>Registration closes July 18, 2026. Spaces are limited.</p>
        <a
          href="https://forms.gle/e7YfuG6DT2M2aaTNA"
          target="_blank"
          className="btn-register"
        >
          Register team now
        </a>
      </div>
      <footer className="border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Info */}
            <div>
              <h3 className="text-xl font-bold mb-3">DevDash 2026</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                DevDash is UCLs annual hackathon, bringing together students,
                developers, designers, and innovators to build impactful
                solutions, learn new technologies, and compete in an exciting
                development challenge.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="hover:underline">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#prizes" className="hover:underline">
                    Prizes
                  </a>
                </li>
                <li>
                  <a href="#register" className="hover:underline">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            {/* UCL */}
            <div>
              <h4 className="font-semibold mb-3">Hosted By</h4>

              <Image
                src="/ucl.png"
                alt="Universal College Lanka"
                width={60}
                height={60}
                className="h-auto w-auto mb-3 mx-auto"
              />

              <p className="text-sm text-muted-foreground">
                Universal College Lanka (UCL)
                <br />
                Colombo, Sri Lanka
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 DevDash. All rights reserved.
            </p>

            <p className="text-sm text-muted-foreground">
              Organized by UCL Student Community
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
