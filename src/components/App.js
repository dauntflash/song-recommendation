import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Settings from "./Settings";
import Home from "./Home";
import "./App.css";
import Header from "./Header";
import Files from "./Files";
import BarChart from "./Charts";
import Notfound from "./Notfound";

function App() {
  const location = useLocation();
  const isNotFound = !["/", "/settings", "/chart", "/upload"].includes(location.pathname);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyTheme(savedTheme === "dark");
    }
  }, []);

  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.style.setProperty("--bg-color", "#fff");
      document.documentElement.style.setProperty("--primary-color", "rgb(191, 117, 88)");
      document.documentElement.style.setProperty("--secondary-color", "rgb(101, 114, 114)");
      document.documentElement.style.setProperty("--border-color", "rgba(101, 114, 114, .2)");
      document.documentElement.style.setProperty("--accent-color", "#ff4d4d");
      document.documentElement.style.setProperty("--scroll-color", "rgb(158, 95, 70)");
    } else {
      document.documentElement.style.setProperty("--bg-color", "rgb(101, 114, 114)");
      document.documentElement.style.setProperty("--primary-color", "#fff");
      document.documentElement.style.setProperty("--secondary-color", "#fff");
      document.documentElement.style.setProperty("--border-color", "rgba(255, 255, 255, .2)");
      document.documentElement.style.setProperty("--accent-color", "#fff");
      document.documentElement.style.setProperty("--scroll-color", "#ff4d4d");
    }
  };

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="content">
          {!isNotFound && <SideBar />}
          <div className="main-div">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/chart" element={<BarChart />} />
              <Route path="/upload" element={<Files />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;