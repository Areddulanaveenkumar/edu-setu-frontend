import {styles} from "../../theme/styles";
import {C} from "../../theme/theme";
function TopBar() {
  return (
    <div style={{ background: C.primaryDark, color: C.white, fontSize: 13, padding: "6px 0" }}>
      <div style={{ ...styles.container, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", gap: 20 }}>
          <span>📞 +91 (234) 567 890</span>
          <span>✉ info@indiaconsultancy.com</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="#" style={{ color: C.white, textDecoration: "none" }}>EduSetu</a>
          <a href="#" style={{ color: C.white, textDecoration: "none" }}>Colleges Listing</a>
          <a href="#" style={{ color: C.white, textDecoration: "none" }}>Compare Colleges</a>
        </div>
      </div>
    </div>
  );
}
