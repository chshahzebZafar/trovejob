"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LAUNCH_DATE = new Date("2026-09-01T00:00:00Z");

function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days",    label: "Days"  },
  { key: "hours",   label: "Hours" },
  { key: "minutes", label: "Min"   },
  { key: "seconds", label: "Sec"   },
];

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) {
    return (
      <div style={{ height: "clamp(32px, 5vw, 42px)", display: "flex", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--mono)", fontWeight: 300, fontSize: "11px", letterSpacing: "0.1em", color: "var(--warm)" }}>
          — — · — — · — — · — —
        </span>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
      {UNITS.map(({ key, label }, i) => (
        <div key={key} style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 300,
                fontSize: "clamp(26px, 4vw, 34px)",
                lineHeight: 1,
                color: "var(--ink)",
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.01em",
              }}
            >
              {String(timeLeft[key]).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontWeight: 300,
                fontSize: "9px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--warm)",
              }}
            >
              {label}
            </span>
          </div>
          {i < UNITS.length - 1 && (
            <span
              aria-hidden
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(26px, 4vw, 34px)",
                lineHeight: 1,
                color: "var(--gold)",
                margin: "0 10px",
                userSelect: "none",
              }}
            >
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
