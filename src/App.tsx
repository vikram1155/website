import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import WeddingPage from "./pages/WeddingPage";
import PovPage from "./pages/PovPage";

const ADMIN_PATH = "/admin=vm070999";

function GuestInviteRoute() {
  const { pathname } = useLocation();
  if (pathname.toLowerCase() === ADMIN_PATH) {
    return <WeddingPage isAdmin />;
  }
  if (pathname.toLowerCase().startsWith("/guest=")) return <WeddingPage />;
  return <Navigate to="/" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeddingPage />} />
        <Route path="/:invitePath" element={<GuestInviteRoute />} />
        <Route path="/his-pov" element={<PovPage />} />
        <Route path="/her-pov" element={<PovPage />} />
      </Routes>
    </BrowserRouter>
  );
}
