"use client";

import { useState, useEffect } from "react";
import { TERM_LINES } from "@/lib/constants";
import type { TermLine } from "@/lib/constants";
import { styles } from "@/lib/styles";

export default function TerminalWindow() {
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
                {line.out?.includes("\u2713") ? (
                  <>
                    <span style={{ color: "#00cc44" }}>✓</span>
                    {line.out.replace("\u2713", "")}
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
