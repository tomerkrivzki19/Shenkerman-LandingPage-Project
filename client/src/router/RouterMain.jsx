import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function RouterMain() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />

          {/* <Route path="/*" element={<ErorPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default RouterMain;
