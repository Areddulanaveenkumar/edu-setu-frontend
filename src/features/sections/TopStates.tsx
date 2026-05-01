import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function TopStates() {
  const states = [
    { name: "Karnataka", sub: "Bengaluru, Mysuru, Hubli", emoji: "🏙" },
    { name: "Tamil Nadu", sub: "Chennai, Coimbatore, Trichy", emoji: "🌊" },
    { name: "Maharashtra", sub: "Mumbai, Pune, Nagpur", emoji: "🌆" },
    { name: "Delhi/NCR", sub: "Capital Region Excellence", emoji: "🏛" },
    { name: "Telangana", sub: "Hyderabad, Warangal", emoji: "🌿" },
    { name: "West Bengal", sub: "Cultural & Academic Heritage", emoji: "🎭" },
  ];
  return (
    <section style={{ ...styles.sectionPadding, background: C.white }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Top Educational States in India</h2>
        <p style={styles.sectionSub}>Discover world-class education across India's top states with 500+ partner colleges and top-ranked universities</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="states-grid">
          {states.map(s => (
            <div key={s.name} style={{
              borderRadius: 12, overflow: "hidden", background: `linear-gradient(135deg, ${C.primary}dd, ${C.primaryDark}ff)`,
              color: C.white, padding: "40px 24px", cursor: "pointer", position: "relative", minHeight: 120,
              display: "flex", flexDirection: "column", justifyContent: "flex-end"
            }}>
              <div style={{ position: "absolute", top: 16, right: 16, fontSize: 36, opacity: 0.3 }}>{s.emoji}</div>
              <div style={{ fontWeight: 800, fontSize: 18 }}>{s.name}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .states-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .states-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default TopStates;