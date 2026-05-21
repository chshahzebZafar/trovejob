import CountdownTimer from "./components/CountdownTimer";
import EmailSignup from "./components/EmailSignup";

const S = {
  mono: { fontFamily: "var(--mono)", fontWeight: 300 } as React.CSSProperties,
  serif: { fontFamily: "var(--serif)", fontWeight: 300 } as React.CSSProperties,
};

const STATS = [
  { num: "1,200+", label: "Jobs Curated" },
  { num: "340+",   label: "Companies"    },
  { num: "40+",    label: "Industries"   },
];

const BRACKET = 18;
const BW      = 1;

function CornerBrackets() {
  const corners = [
    { top: 24, left: 24,  borderTop: BW, borderLeft:  BW, borderRight: 0, borderBottom: 0 },
    { top: 24, right: 24, borderTop: BW, borderRight: BW, borderLeft:  0, borderBottom: 0 },
    { bottom: 24, left: 24,  borderBottom: BW, borderLeft:  BW, borderTop: 0, borderRight: 0 },
    { bottom: 24, right: 24, borderBottom: BW, borderRight: BW, borderTop: 0, borderLeft:  0 },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            position:     "fixed",
            width:        BRACKET,
            height:       BRACKET,
            borderStyle:  "solid",
            borderColor:  "var(--hairline)",
            borderWidth:  `${c.borderTop ?? 0}px ${c.borderRight ?? 0}px ${c.borderBottom ?? 0}px ${c.borderLeft ?? 0}px`,
            top:          c.top,
            left:         c.left,
            right:        c.right,
            bottom:       c.bottom,
            opacity:      0.55,
            pointerEvents:"none",
            zIndex:       50,
          }}
        />
      ))}
    </>
  );
}

function Logomark() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-label="TroveJob logomark">
      <rect x="1" y="1" width="36" height="36" stroke="var(--ink)" strokeWidth="1" rx="1" />
      <line x1="9" y1="12" x2="29" y2="12" stroke="var(--ink)"  strokeWidth="1" />
      <line x1="9" y1="19" x2="29" y2="19" stroke="var(--gold)" strokeWidth="1.5" />
      <line x1="9" y1="26" x2="29" y2="26" stroke="var(--ink)"  strokeWidth="1" />
    </svg>
  );
}

function Ornament() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ display: "block", height: "1px", width: "40px", background: "var(--gold)", opacity: 0.6 }} />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <line x1="8" y1="0" x2="8" y2="16" stroke="var(--gold)" strokeWidth="0.8" />
        <line x1="0" y1="8" x2="16" y2="8"  stroke="var(--gold)" strokeWidth="0.8" />
        <rect x="5" y="5" width="6" height="6" stroke="var(--gold)" strokeWidth="0.8" />
      </svg>
      <span style={{ display: "block", height: "1px", width: "40px", background: "var(--gold)", opacity: 0.6 }} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <CornerBrackets />

      <div
        style={{
          minHeight:      "100vh",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          padding:        "0 24px",
        }}
      >
        {/* Top rule */}
        <div className="fu d1" style={{ width: "100%", maxWidth: 680, paddingTop: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ flex: 1, height: "1px", background: "var(--hairline)" }} />
            <span style={{ ...S.mono, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--warm)" }}>
              Trovejob.com
            </span>
            <span style={{ flex: 1, height: "1px", background: "var(--hairline)" }} />
          </div>
        </div>

        {/* Column */}
        <main
          style={{
            width:         "100%",
            maxWidth:      680,
            flex:          1,
            display:       "flex",
            flexDirection: "column",
            alignItems:    "flex-start",
            gap:           "20px",
            paddingTop:    "28px",
            paddingBottom: "24px",
          }}
        >

          {/* Logomark */}
          <div className="fu d2">
            <Logomark />
          </div>

          {/* Headline */}
          <div className="fu d3" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1
              style={{
                ...S.serif,
                fontSize:      "clamp(36px, 6vw, 58px)",
                lineHeight:    1.05,
                letterSpacing: "-0.02em",
                color:         "var(--ink)",
              }}
            >
              The place where<br />
              great work{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>finds</em>
              <br />
              great people.
            </h1>

            <p
              style={{
                ...S.serif,
                fontStyle:     "italic",
                fontSize:      "clamp(14px, 1.8vw, 17px)",
                lineHeight:    1.5,
                color:         "var(--warm)",
                letterSpacing: "0.005em",
                maxWidth:      520,
              }}
            >
              A curated job board for people who take their craft seriously.
              Launching Autumn 2026.
            </p>
          </div>

          {/* Gold ornament */}
          <div className="fu d4">
            <Ornament />
          </div>

          {/* Hairline */}
          <div className="fu d4" style={{ width: "100%", height: "1px", background: "var(--hairline)" }} />

          {/* Countdown */}
          <div className="fu d5" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ ...S.mono, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--warm)" }}>
              Launching in
            </span>
            <CountdownTimer />
          </div>

          {/* Hairline */}
          <div className="fu d5" style={{ width: "100%", height: "1px", background: "var(--hairline)" }} />

          {/* Email form */}
          <div className="fu d6" style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ ...S.mono, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--warm)" }}>
              Get early access
            </span>
            <EmailSignup />
            <span style={{ ...S.mono, fontSize: "10px", letterSpacing: "0.04em", color: "var(--warm)", opacity: 0.6 }}>
              No spam. One email when we launch.
            </span>
          </div>

          {/* Hairline */}
          <div className="fu d6" style={{ width: "100%", height: "1px", background: "var(--hairline)" }} />

          {/* Trust stats */}
          <div className="fu d7" style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
            {STATS.map(({ num, label }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", paddingRight: 32 }}>
                  <span style={{ ...S.serif, fontSize: "clamp(22px, 3.5vw, 28px)", lineHeight: 1, color: "var(--ink)" }}>
                    {num}
                  </span>
                  <span style={{ ...S.mono, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--warm)" }}>
                    {label}
                  </span>
                </div>
                {i < STATS.length - 1 && (
                  <span style={{ width: "1px", background: "var(--hairline)", marginRight: 32, alignSelf: "stretch" }} />
                )}
              </div>
            ))}
          </div>

        </main>

        {/* Bottom rule + footer */}
        <div className="fu d8" style={{ width: "100%", maxWidth: 680, paddingBottom: "28px" }}>
          <div style={{ height: "1px", background: "var(--hairline)", marginBottom: "12px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ ...S.mono, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--warm)", opacity: 0.5 }}>
              © {new Date().getFullYear()} TroveJob — All rights reserved
            </span>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Twitter", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{ ...S.mono, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--warm)", opacity: 0.5, textDecoration: "none" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
