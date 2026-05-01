import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function About() {
  const features = [
    { icon: "🎓", title: "Entrance Exam Expertise", desc: "Specialized coaching for JEE, NEET, CAT, CLAT and more top entrance exams." },
    { icon: "🧭", title: "Counseling Support", desc: "One-on-one personalized guidance for your ideal college admission." },
    { icon: "📈", title: "High Success Rate", desc: "95%+ admission success rate across all major Indian universities." },
    { icon: "🏛", title: "State Expertise", desc: "Deep knowledge of top colleges across Karnataka, Tamil Nadu, Maharashtra, and more." },
  ];
  return (
    <section style={{ ...styles.sectionPadding, background: C.bg }}>
      <div style={styles.container}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }} className="about-grid">
                      <div style={{ color: C.accent, fontWeight: 700, fontSize: 13, letterSpacing: 2, marginBottom: 8, textTransform: "uppercase", textAlign:"center" }}>About Us</div>
          {/* Image */}
          <div style={{ borderRadius: 16, overflow: "hidden", background: `linear-gradient(135deg, ${C.primary}22, ${C.primary}44)`, height: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 80 }}>🎓</span>
          </div>

          {/* Text */}
          <div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: C.gray800, marginBottom: 14 }}>Your Trusted Partner in Indian Education</h2>
            <p style={{ fontSize: 15, color: C.gray600, lineHeight: 1.75, marginBottom: 24 }}>
              With over 15 years of experience in Indian education consultancy, we have helped more than 25,000 students gain admission into top colleges across India. Our expert counselors provide guidance on NEET, JEE, Management, and other entrance exams with personalized attention.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {features.map(f => (
                <div key={f.title} style={{ background: C.white, borderRadius: 10, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: C.gray800, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: C.gray600, lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default About;