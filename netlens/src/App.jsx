import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Dashboard from "./pages/Dashboard";
import AttackTypes from "./pages/AttackTypes";
import DetectionProcess from "./pages/DetectionProcess";
import Datasets from "./pages/Datasets";
import MLModels from "./pages/MLModels";
import LiveMonitoring from "./pages/LiveMonitoring";
import Reports from "./pages/Reports";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import AdminPanel from "./pages/AdminPanel";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import FAQ from "./pages/FAQ";
import Team from "./pages/Team";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attack-types" element={<AttackTypes />} />
          <Route path="/detection-process" element={<DetectionProcess />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/ml-models" element={<MLModels />} />
          <Route path="/live-monitoring" element={<LiveMonitoring />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
