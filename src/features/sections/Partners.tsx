import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function Partners() {
  const partners = ["University", "Global Edu", "Institute", "Academy", "EduConnect", "LearnHub"];
  return (
    <section style={{ ...styles.sectionPadding, background: C.white }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Our Affiliated Institutes & Partners</h2>
        <p style={styles.sectionSub}>Trusted partnerships with India's leading educational institutions</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 30 }}>
          {partners.map(p => (
            <div key={p} style={{ background: C.gray50, border: `1px solid ${C.gray200}`, borderRadius: 10, padding: "16px 32px", fontWeight: 700, color: C.gray700, fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}>
              🏛 {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Partners;