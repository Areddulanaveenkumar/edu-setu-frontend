import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function EntranceExams() {
  const exams = [
    {
      color: "#3b82f6", icon: "⚙️", title: "Engineering",
      items: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEE"]
    },
    {
      color: "#ef4444", icon: "🩺", title: "Medical",
      items: ["NEET UG", "NEET PG", "AIIMS", "JIPMER"]
    },
    {
      color: "#22c55e", icon: "💼", title: "Management",
      items: ["CAT", "XAT", "MAT", "SNAP", "CMAT"]
    },
    {
      color: "#8b5cf6", icon: "⚖️", title: "Law",
      items: ["CLAT", "AILET", "LSAT"]
    },
    {
      color: "#f59e0b", icon: "🎓", title: "University Entrance",
      items: ["CUET", "IPU CET", "BHU UET", "JNU"]
    },
    {
      color: "#06b6d4", icon: "🏛", title: "Design & Architecture",
      items: ["NATA", "JEE Paper 2", "CEED", "NID"]
    },
  ];
  return (
    <section style={{ ...styles.sectionPadding, background: C.white }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Indian Entrance Exam Preparation</h2>
        <p style={styles.sectionSub}>Expert coaching and guidance for all major Indian entrance examinations</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="exams-grid">
          {exams.map(e => (
            <div key={e.title} style={{ border: `1px solid ${C.gray200}`, borderRadius: 12, padding: 22, background: C.gray50 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: e.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                  {e.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: 16, color: C.gray800 }}>{e.title}</div>
              </div>
              {e.items.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, fontSize: 14, color: C.gray700 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: e.color, flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{ background: C.primary, borderRadius: 14, padding: "32px 40px", marginTop: 36, textAlign: "center", color: C.white }}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Free Mock Tests & Preparation Classes</div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
            Join our comprehensive coaching programs for all major entrance exams
          </p>
          <button style={{ ...styles.btnPrimary }}>Register for Mock Tests</button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .exams-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .exams-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default EntranceExams;