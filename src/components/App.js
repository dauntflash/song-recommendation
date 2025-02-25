import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
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

  return (
    <div className="app">
      <Header />
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