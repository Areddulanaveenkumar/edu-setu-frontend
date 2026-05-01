import Navbar from "./shared/Component/Navbar";
import Footer from "./shared/Component/Footer";
import AppRoutes from "./app/routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}