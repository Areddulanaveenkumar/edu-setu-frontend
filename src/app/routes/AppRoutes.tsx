import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../features/home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}