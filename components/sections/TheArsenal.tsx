import { styles } from "@/lib/styles";
import { PRIZES } from "@/lib/constants";

export default function TheArsenal() {
  return (
    <>
      <section id="prizes" style={styles.section}>
        <div style={styles.secHeader}>
          <div style={styles.secBar} />
          <h2 style={styles.h2}>Prizes & Recognition</h2>
        </div>
        <p style={styles.prizesIntro}>
          The following awards will be presented at the closing ceremony.
        </p>
        <div style={styles.prizesList}>
          {PRIZES.map((p, i) => (
            <div key={i} style={styles.prizesItem}>
              <span style={styles.prizesItemAward}>{p.award}</span>
              <span style={styles.prizesItemRecipients}>{p.recipients}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
