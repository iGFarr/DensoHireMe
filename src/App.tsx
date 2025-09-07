import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

// Pages
import MyDensoHistory from "./components/pages/MyDensoHistory";
import SkillsExperience from "./components/pages/SkillsExperience";
import Contact from "./components/pages/Contact";
import DownloadResume from "./components/pages/DownloadResume";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MyDensoHistory />} />
        <Route path="/skills" element={<SkillsExperience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<DownloadResume />} />
      </Routes>
    </Router>
  );
};

export default App;
