import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import React from "react";
import SideBar from "./SideBar";
import Settings from "./Settings"
import Home from "./Home"
import "./App.css"
import Header from "./Header";
import Files from "./Files";
import BarChart from "./Charts";

function App() {
  return(
    <div className="app">
      <div className="header">
        <Header/>
      </div>
      <div className="content">
        <Router>
          < SideBar /> 
          <div className="main-div">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={< Settings />} />
              <Route path="/chart" element={<BarChart />} />
              <Route path="/upload" element={<Files/>} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
  
}

export default App;
