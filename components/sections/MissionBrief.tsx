import { styles } from "@/lib/styles";

export default function MissionBrief() {
  return (
    <>
      <section id="about" style={styles.section}>
        <div style={styles.secHeader}>
          <div style={styles.secBar} />
          <h2 className="font-modern-warfare">About the hackathon</h2>
        </div>
        <p style={styles.aboutText}>
          DevDash 2026 brings together the brightest student developers,
          designers, and problem solvers for an intense, high-energy day.
          Whether you're building your first web app, experimenting with system
          scripts, or diving into advanced analytics — this is your sandbox to
          create something meaningful.
        </p>
      </section>
    </>
  );
}
