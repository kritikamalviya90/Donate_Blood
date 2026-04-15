import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./component/layouts/Layout";

// Pages
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import FindBlood from "./pages/FindBlood";
import About from "./pages/About";
import BecomeDonor from "./pages/BecomeDonor";
import Hospitals from "./pages/Hospitals";
import ContactHospital from "./pages/ContactHospital";
import Payment from "./pages/Payment";
import ProceedToPay from "./pages/ProceedToPay";
import RoleDashboards from "./pages/RoleDashboards";
import ContactSupport from "./pages/ContectSupport";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HelpCenter from "./pages/HelpCenter";
import FAQs from "./pages/FAQs";
import ReportAbuse from "./pages/ReportAbuse";
import EmergencyGuide from "./pages/EmergencyGuide";
import BloodBanks from "./pages/BloodBanks";
import CSRPartnerships from "./pages/CSRPartnerships";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Accessibility from "./pages/Accessibility";
import Sitemap from "./pages/Sitemap";
import Profile from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/find-blood" element={<FindBlood />} />
          <Route path="/FindBlood" element={<Navigate to="/find-blood" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/contectSupport" element={<Navigate to="/contact-support" replace />} />
          <Route path="/become-donor" element={<BecomeDonor />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/contact-hospital" element={<ContactHospital />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/proceed-pay" element={<ProceedToPay />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboards" element={<RoleDashboards />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/report-abuse" element={<ReportAbuse />} />
          <Route path="/emergency-guide" element={<EmergencyGuide />} />
          <Route path="/blood-banks" element={<BloodBanks />} />
          <Route path="/csr-partnerships" element={<CSRPartnerships />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Add future pages here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
