import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import JobsPage from "./pages/JobsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import EmployerForm from "./pages/EmployerForm";
import IndustryReports from "./pages/IndustryReports";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/employer-form" element={<EmployerForm />} />
          <Route path="/industry-reports" element={<IndustryReports />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>

        <Route
          path="*"
          element={
            <h1 className="text-3xl font-bold underline">404 Not Found</h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
