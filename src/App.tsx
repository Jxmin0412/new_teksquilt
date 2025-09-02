import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import JobsPage from "./pages/JobsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
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
