import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function Footer() {
  return (
    <footer style={{ background: C.gray800, color: "rgba(255,255,255,0.8)", padding: "50px 0 0" }}>
      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }} className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ fontWeight: 800, fontSize: 20, color: C.white, marginBottom: 12 }}>India Education Consultancy</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
            Your trusted partner for premier Indian education. Expert counseling, exam preparation, and admission guidance for over 15 years.
          </p>
          <div style={{ fontSize: 13 }}>📞 +91 (234) 567 890</div>
          <div style={{ fontSize: 13, marginTop: 6 }}>✉ info@indiaconsultancy.com</div>
        </div>

        {[
          { heading: "Quick Links", links: ["Home", "About Us", "Services", "Entrance Exams", "Contact"] },
          { heading: "Exam Prep", links: ["JEE Main/Advanced", "NEET UG/PG", "CAT/XAT/MAT", "CLAT/AILET", "CUET"] },
          { heading: "Top States", links: ["Karnataka", "Tamil Nadu", "Maharashtra", "Delhi/NCR", "Telangana"] },
        ].map(col => (
          <div key={col.heading}>
            <div style={{ fontWeight: 700, fontSize: 16, color: C.white, marginBottom: 14 }}>{col.heading}</div>
            {col.links.map(l => (
              <a key={l} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none", marginBottom: 8 }}>{l}</a>
            ))}
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40, padding: "20px 0", textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
        © 2026 India Education Consultancy. All Rights Reserved. | Privacy Policy | Terms of Service
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
export default Footer;