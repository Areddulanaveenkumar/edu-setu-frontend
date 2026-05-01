import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function Hero() {
  return (
    <section style={{ background: `linear-gradient(135deg, ${C.primary} 0%, #2a52b0 60%, #3a62c0 100%)`, color: C.white, padding: "70px 0 60px", position: "relative", overflow: "hidden" }}>
      {/* BG decoration */}
      <div style={{ position: "absolute", right: -80, top: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
      <div style={{ position: "absolute", right: 60, bottom: -100, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }} className="hero-grid">
        <div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 18 }}>
            Your Gateway to<br />Premier Indian<br />Education
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 32, lineHeight: 1.7 }}>
            Navigate India's top universities and entrance exams with expert guidance from JEE to NEET, CAT to CLAT — we've got you covered.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button style={styles.btnPrimary}>Get Started</button>
            <button style={styles.btnOutline}>Learn More</button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 28, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { val: "500+", label: "Partner Colleges" },
              { val: "95%", label: "Admission Success" },
            ].map(s => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "14px 22px", backdropFilter: "blur(8px)" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: C.white }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: 28, backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>🎓 Complete Counseling Support</div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
            From college selection to final admission — personalized guidance every step of the way.
          </p>
          {[
            { icon: "🏫", text: "500+ Partner Colleges" },
            { icon: "✅", text: "95% Admission Success Rate" },
            { icon: "👩‍🎓", text: "25,000+ Students Guided" },
            { icon: "⭐", text: "15+ Years Experience" },
          ].map(item => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, fontSize: 14 }}>
              <span>{item.icon}</span>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>{item.text}</span>
            </div>
          ))}
          <button style={{ ...styles.btnPrimary, marginTop: 12, width: "100%", textAlign: "center" }}>Book Free Counseling</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Hero;