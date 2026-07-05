import Image from "next/image";
import { styles } from "@/lib/styles";
import uclLogo from "@/public/ucl.png";

export default function Footer() {
  return (
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
            {["about", "schedule", "prizes"].map((link) => (
              <li key={link}>
                <a
                  className="footer-link"
                  href={`#${link}`}
                  style={styles.footerLink}
                >
                  <span style={{ color: "rgba(0,204,68,0.3)" }}>→ </span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={styles.footerTitle}>Hosted by</div>
          <Image
            src={uclLogo}
            alt="Universal College Lanka"
            width={80}
            height={80}
            style={{ marginBottom: 10, height: "auto" }}
          />
          <p style={styles.footerBody}>
            UCL ICT Community
            <br />
            Colombo, Sri Lanka
          </p>
        </div>
      </div>
      <div style={styles.footerBottom}>© 2026 DevDash — Organized by UCL</div>
    </footer>
  );
}
