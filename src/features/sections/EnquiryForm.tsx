import { useState } from "react";
import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";


function EnquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", date: "", exam: "" });
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const exams = ["JEE Main", "JEE Advanced", "NEET UG", "CAT", "CLAT", "BITSAT", "Other"];

  return (
    <section style={{ ...styles.sectionPadding, background: C.white }}>
      <div style={styles.container}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }} className="form-grid">
          {/* Left */}
          <div>
            <div style={{ color: C.accent, fontWeight: 700, fontSize: 13, letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" }}>Contact Us</div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: C.gray800, marginBottom: 16 }}>Enquiry Form</h2>
            <p style={{ fontSize: 15, color: C.gray600, lineHeight: 1.75, marginBottom: 24 }}>
              Fill in your details and our expert counselors will get in touch with personalized guidance within 24 hours.
            </p>
            <div style={{ background: `linear-gradient(135deg, ${C.primary}22, ${C.primary}44)`, borderRadius: 12, padding: "24px", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>📞</div>
              <div style={{ fontWeight: 700, color: C.primary, fontSize: 16 }}>Call Us Directly</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.gray800, margin: "6px 0" }}>+91 (234) 567 890</div>
              <div style={{ fontSize: 14, color: C.gray600 }}>Mon–Sat: 9 AM – 6 PM</div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: C.gray50, borderRadius: 16, padding: 32 }}>
            {[
              { key: "name", label: "Full Name", placeholder: "Your full name", type: "text" },
              { key: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
              { key: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
              { key: "city", label: "City / State", placeholder: "Your city", type: "text" },
              { key: "date", label: "Current Date", placeholder: "", type: "date" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.gray700, marginBottom: 6 }}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={e => update(f.key, e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: `1.5px solid ${C.gray200}`, borderRadius: 8, fontSize: 14, boxSizing: "border-box", outline: "none" }}
                />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.gray700, marginBottom: 6 }}>Target Entrance Exam</label>
              <select
                value={form.exam}
                onChange={e => update("exam", e.target.value)}
                style={{ width: "100%", padding: "10px 14px", border: `1.5px solid ${C.gray200}`, borderRadius: 8, fontSize: 14, background: C.white, boxSizing: "border-box" }}
              >
                <option value="">Select exam...</option>
                {exams.map(e => <option key={e}>{e}</option>)}
              </select>
            </div>
            <button style={{ ...styles.btnPrimary, background: C.primary, width: "100%", textAlign: "center", padding: "14px" }}>
              Submit Enquiry
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
export default EnquiryForm;