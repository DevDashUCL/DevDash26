import { styles } from "@/lib/styles";
import { PROGRAM } from "@/lib/constants";

export default function EventTimeline() {
  return (
    <>
      <section id="schedule" style={styles.section}>
        <div style={styles.secHeader}>
          <div style={styles.secBar} />
          <h2 style={styles.h2}>Program Structure</h2>
        </div>
        <div style={styles.programGrid}>
          {PROGRAM.map((day) => (
            <div key={day.day} style={styles.programCard}>
              <div style={styles.programDay}>{day.day}</div>
              <div style={styles.programTitle}>{day.title}</div>
              <div style={styles.programSessions}>
                {day.sessions.map((s, i) => (
                  <div key={i} style={styles.programSession}>
                    <span style={styles.programSessionName}>{s.name}</span>
                    {s.duration && (
                      <span style={styles.programDuration}>{s.duration}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={styles.programNote}>
          The program will be delivered over a period of approximately 2 weeks,
          consisting of three preparatory workshops followed by the final
          hackathon event.
        </p>
      </section>
    </>
  );
}
