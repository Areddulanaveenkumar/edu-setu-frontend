import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function Services() {
  const services = [
    { icon: "🧑‍💼", title: "Career Counseling", desc: "Expert guidance to choose the right stream and career path aligned with your goals." },
    { icon: "📚", title: "Exam Preparation", desc: "Comprehensive coaching for JEE, NEET, CAT, CLAT and all major entrance exams." },
    { icon: "🏫", title: "Admission Guidance", desc: "Step-by-step support for college applications, documentation, and enrollment." },
    { icon: "✈️", title: "Travel Resources", desc: "Support for inter-state relocation including transport, hostels, and logistics." },
    { icon: "🏠", title: "Accommodation Assistance", desc: "Help finding suitable hostels and PG accommodation near your target college." },
  ];
  return (
    <section style={{ ...styles.sectionPadding, background: C.bg }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <p style={styles.sectionSub}>Comprehensive end-to-end support for your entire education journey, from exam prep to college admission</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }} className="services-grid">
          {services.map(s => (
            <div key={s.title} style={{ background: C.white, borderRadius: 12, padding: 22, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.gray800, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: C.gray600, lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 380px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Services;