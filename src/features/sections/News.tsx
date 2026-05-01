import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function News() {
  const news = [
    {
      category: "JEE", title: "JEE Main 2026 Dates Announced",
      desc: "The National Testing Agency announces JEE Main session 1 will be held in January and session 2 in April. Registration opens soon.",
      date: "April 2026",
    },
    {
      category: "NEET", title: "NEET Counseling Schedule",
      desc: "MCC releases NEET 2025–26 counseling schedule. Qualifying students must register within the specified dates.",
      date: "March 2026",
    },
    {
      category: "FREE", title: "Free Mock Tests Available",
      desc: "Complimentary mock tests now available for JEE, NEET, CAT and CLAT. Detailed performance analysis included.",
      date: "May 2026",
    },
  ];
  const catColor = { JEE: "#3b82f6", NEET: "#ef4444", FREE: "#22c55e" };
  return (
    <section style={{ ...styles.sectionPadding, background: C.bg }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Recent News & Updates</h2>
        <p style={styles.sectionSub}>Stay updated with the latest in Indian education, exam schedules, and admission news</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="news-grid">
          {news.map(n => (
            <div key={n.title} style={{ background: C.white, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ height: 160, background: `linear-gradient(135deg, ${C.primary}22, ${C.primary}55)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
                📰
              </div>
              <div style={{ padding: "18px 20px" }}>
                <span style={{ background: (catColor[n.category] || C.primary) + "20", color: catColor[n.category] || C.primary, fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>{n.category}</span>
                <div style={{ fontWeight: 700, fontSize: 16, color: C.gray800, margin: "10px 0 6px" }}>{n.title}</div>
                <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.6, marginBottom: 14 }}>{n.desc}</p>
                <a href="#" style={{ color: C.primary, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .news-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
export default News;