import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import WeddingPage from "./pages/WeddingPage";
import PovPage from "./pages/PovPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeddingPage />} />
        <Route path="/his-pov" element={<PovPage />} />
        <Route path="/her-pov" element={<PovPage />} />
      </Routes>
    </BrowserRouter>
  );
}
