import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatBot from "./components/ChatBot";
import ScrollToTop from "./components/layout/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import DoctorDetails from "./layouts/DoctorDetails";
import Home from "./pages/Home";
import OurServices from "./pages/services/OurServices";
import PCRTesting from "./pages/services/PCRTesting";
import OurTeam from "./pages/OurTeam";
import Clinics from "./pages/clinics/Clinics";
import KarasJLT from "./pages/clinics/KarasJLT";
import KarasDowntown from "./pages/clinics/KarasDowntown";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsServices from "./pages/legal/TermsServices";
import OnlinePayment from "./pages/OnlinePayment";
import OpenVacancies from "./pages/OpenVacancies";
import Internship from "./pages/Internship";
import CarePlan from "./pages/services/CarePlan";
import Insights from "./pages/insights/Insights";
import TeamManagement from "./pages/admin/TeamManagement";
import InsightsManagement from "./pages/admin/InsightsManagement";
import AdminLayout from "./layouts/AdminLayout";
import AuthGuard from "./components/admin/AuthGuard";
import Login from "./pages/admin/auth/Login";
import Dashboard from "./pages/admin/Dashboard";
import NurseManagement from "./components/admin/team/NurseManagement";
import AnimalHandlerManagement from "./components/admin/team/AnimalHandlerManagement";
import DoctorManagement from "./components/admin/team/DoctorManagement";
import ClientSupportManagement from "./components/admin/team/ClientSupportManagement";
import InsightDetails from "./pages/insights/InsightDetails";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="all-services" element={<OurServices />} />
          <Route path="clinics" element={<Clinics />} />
          <Route path="clinics/karas-JLT" element={<KarasJLT />} />
          <Route path="clinics/karas-downtown" element={<KarasDowntown />} />
          <Route path="doctor/:id" element={<DoctorDetails />} />
          <Route path="pcr-testing" element={<PCRTesting />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-services" element={<TermsServices />} />
          <Route path="payment" element={<OnlinePayment />} />
          <Route path="we-are-hiring" element={<OpenVacancies />} />
          <Route path="volunteer" element={<Internship />} />
          <Route path="care-plan" element={<CarePlan />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<InsightDetails />} />{" "}
        </Route>
        <Route path="/login" element={<Login />} />

        <Route element={<AuthGuard />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="team" element={<TeamManagement />}>
              <Route path="doctors" element={<DoctorManagement />} />
              <Route path="nurses" element={<NurseManagement />} />
              <Route
                path="animal-handlers"
                element={<AnimalHandlerManagement />}
              />
              <Route path="support" element={<ClientSupportManagement />} />
              <Route index element={<Navigate to="doctors" replace />} />
            </Route>

            <Route path="insights" element={<InsightsManagement />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
