import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function StatsBar() {
  const stats = [
    { icon: "🏫", val: "500+", label: "Partner Colleges" },
    { icon: "✅", val: "95%", label: "Admission Success" },
    { icon: "👩‍🎓", val: "25,000+", label: "Students Guided" },
    { icon: "⭐", val: "15+", label: "Years Experience" },
  ];
  return (
    <div style={{ background: C.white, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", padding: "24px 0" }}>
      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center", padding: "12px 0", borderRight: i < 3 ? `1px solid ${C.gray200}` : "none" }}>
            <div style={{ fontSize: 28 }}>{s.icon}</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: C.primary }}>{s.val}</div>
            <div style={{ fontSize: 13, color: C.gray600 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

export default StatsBar;