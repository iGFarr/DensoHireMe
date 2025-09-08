import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDensoHistory from "./components/pages/MyDensoHistory";
import SkillsExperience from "./components/pages/SkillsExperience";
import Contact from "./components/pages/Contact";
import NavBar from "./components/NavBar";

export type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  // 1) manual choice wins
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored as Theme;
  // 2) else OS preference
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const App: React.FC = () => {
  // lazy initializer prevents first-render mismatch
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  // keep <html data-theme=""> in sync immediately after mount to avoid the “two clicks” issue
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []); // set once using initial state

  // when theme changes, persist + update attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // flip between light/dark
  const toggleTheme = useMemo(
    () => () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  // keep in sync if user changes OS theme while site open AND no manual choice stored
  useEffect(() => {
    if (localStorage.getItem("theme")) return; // manual choice—ignore OS changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(mq.matches ? "dark" : "light");
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return (
    <Router>
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<MyDensoHistory />} />
        <Route path="/skills" element={<SkillsExperience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
