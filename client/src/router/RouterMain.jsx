import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import Projects from "../components/Projects";

function RouterMain() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Projects" element={<Projects />} />

          {/* <Route path="/*" element={<ErorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default RouterMain;
