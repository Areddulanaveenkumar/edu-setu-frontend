import { useState } from "react";
import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Top States", "Entrance Exams", "Services", "Testimonials", "Contact"];

  return (
    <header style={{ background: C.white, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ ...styles.container, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: C.primary, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: C.white, fontWeight: 800, fontSize: 16 }}>IE</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, color: C.primary }}>India Education Consultancy</span>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: 24, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href="#" style={{ fontSize: 14, fontWeight: 500, color: C.gray700, textDecoration: "none" }}>{l}</a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div style={{ display: "flex", gap: 10 }} className="desktop-nav">
          <button style={{ ...styles.btnOutline, color: C.primary, border: `1.5px solid ${C.primary}`, padding: "8px 20px" }}>Login</button>
          <button style={{ ...styles.btnPrimary, background: C.primary, padding: "8px 20px" }}>Register Now</button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: C.primary, display: "none" }}
          className="mobile-menu-btn"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: C.white, borderTop: `1px solid ${C.gray200}`, padding: "12px 16px" }} className="mobile-menu">
          {links.map(l => (
            <a key={l} href="#" style={{ display: "block", padding: "10px 0", color: C.gray700, textDecoration: "none", fontWeight: 500, borderBottom: `1px solid ${C.gray100}` }}>{l}</a>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button style={{ flex: 1, padding: "10px", border: `1.5px solid ${C.primary}`, background: "none", color: C.primary, borderRadius: 6, fontWeight: 600 }}>Login</button>
            <button style={{ flex: 1, padding: "10px", background: C.primary, color: C.white, border: "none", borderRadius: 6, fontWeight: 600 }}>Register</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
export default Navbar;