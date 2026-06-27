import { styles } from "@/lib/styles";
import { TEAM_CARDS } from "@/lib/constants";

export default function Team() {
  return (
    <>
      <section id="team" style={styles.section}>
        <div style={styles.secHeader}>
          <div style={styles.secBar} />
          <h2 style={styles.h2}>Meet the team</h2>
        </div>
        <div style={styles.teamGrid}>
          {TEAM_CARDS.map((card) => (
            <div
              key={card.name}
              className="team-card"
              style={styles.teamCard}
            >
              <div style={styles.teamIcon}>{card.icon}</div>
              <div style={styles.teamName}>{card.name}</div>
              <p style={styles.teamDesc}>{card.desc}</p>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${card.contact}`} target="_blank" style={styles.teamLink}>{card.contact}</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
