import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma", place: "IIT Bombay, CSE", rating: 5,
      text: "The counseling support was exceptional. They helped me navigate the complex JEE Advanced process and I got into my dream college. Couldn't have done it without their expert guidance."
    },
    {
      name: "Priya Mehta", place: "AIIMS Delhi, MBBS", rating: 5,
      text: "Got into AIIMS Delhi thanks to the incredible support. The mock tests and personal mentoring sessions made a huge difference in my NEET preparation."
    },
    {
      name: "Aditya Verma", place: "IIM Ahmedabad, MBA", rating: 5,
      text: "Their CAT preparation modules and GD/PI coaching were top-notch. The consultancy truly understands what it takes to crack India's top management entrance exams."
    },
  ];
  return (
    <section style={{ ...styles.sectionPadding, background: C.bg }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Student Testimonials</h2>
        <p style={styles.sectionSub}>Hear from students who have achieved their dream admissions with our guidance</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="testi-grid">
          {testimonials.map(t => (
            <div key={t.name} style={{ background: C.white, borderRadius: 14, padding: 28, boxShadow: "0 2px 14px rgba(0,0,0,0.07)" }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: C.yellow, fontSize: 16 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: C.primary + "22", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: C.primary, fontSize: 16 }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: C.gray800 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: C.accent }}>{t.place}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
export default Testimonials;