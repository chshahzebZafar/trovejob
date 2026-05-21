"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success";

export default function EmailSignup() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p
        style={{
          fontFamily:    "var(--mono)",
          fontWeight:    300,
          fontSize:      "13px",
          letterSpacing: "0.04em",
          color:         "var(--gold)",
          animation:     "fadeUp 0.5s ease both",
        }}
      >
        ↳ You&apos;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display:     "flex",
        width:       "100%",
        border:      "1px solid var(--hairline)",
        borderRadius: "2px",
        overflow:    "hidden",
        background:  "rgba(255,255,255,0.45)",
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{
          flex:          1,
          padding:       "13px 16px",
          fontFamily:    "var(--mono)",
          fontWeight:    300,
          fontSize:      "13px",
          letterSpacing: "0.03em",
          color:         "var(--ink)",
          background:    "transparent",
          border:        "none",
          outline:       "none",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding:       "13px 22px",
          fontFamily:    "var(--mono)",
          fontWeight:    300,
          fontSize:      "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color:         "#f5f0e8",
          background:    "#1a1714",
          border:        "none",
          cursor:        status === "loading" ? "default" : "pointer",
          opacity:       status === "loading" ? 0.6 : 1,
          transition:    "opacity 0.15s",
          whiteSpace:    "nowrap",
        }}
      >
        {status === "loading" ? "…" : "Notify me"}
      </button>
    </form>
  );
}
