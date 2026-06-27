"use client";

import { useState, useEffect } from "react";
import { TARGET_DATE } from "@/lib/constants";
import { styles } from "@/lib/styles";

interface CountdownState {
  d: string;
  h: string;
  m: string;
  s: string;
}

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

export default function Countdown() {
  const [time, setTime] = useState<CountdownState | null>(null);

  useEffect(() => {
    setTime(getCountdown());
    const id = setInterval(() => setTime(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: Array<{ key: keyof CountdownState; label: string }> = [
    { key: "d", label: "Days" },
    { key: "h", label: "Hours" },
    { key: "m", label: "Mins" },
    { key: "s", label: "Secs" },
  ];

  if (!time) return null;

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
