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
          <a href="YOUR_GOOGLE_FORM_LINK" target="_blank" className="nav-cta">
            Register
          </a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Annual Campus Hackathon</div>
        <h1>DevDash 2026</h1>
        <p className="hero-sub">
          48 hours of building, learning, and breaking things. Unleash your
          inner developer.
        </p>
        <div className="info-cards">
          <div className="info-card">
            <div className="label">When</div>
            <div className="value">July 24–26, 2026</div>
          </div>
          <div className="info-card">
            <div className="label">Where</div>
            <div className="value">Main Campus Lab & Virtual</div>
          </div>
          <div className="info-card">
            <div className="label">Team size</div>
            <div className="value">2–4 Members</div>
          </div>
        </div>
        <a
          href="YOUR_GOOGLE_FORM_LINK"
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
            <div className="track-icon">🎮</div>
            <div className="track-name">Interactive Systems & Gaming</div>
            <p className="track-desc">
              Develop engaging mechanics, innovative physics simulators, or
              collaborative networking integrations for modern systems.
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
          href="YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          className="btn-register"
        >
          Register team now
        </a>
      </div>

      <footer>&copy; 2026 DevDash &mdash; Annual Campus Hackathon</footer>
    </>
  );
}
