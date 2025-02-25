import { useState, useEffect } from "react";
import useValue from "./handleValue";

const Settings = () => {
  const { myValue, increaseValue, decreaseValue } = useValue();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
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

  const toggleDarkTheme = () => {
    setIsDarkTheme(true);
    localStorage.setItem("theme", "dark");
    applyTheme(true);
  };

  const toggleLightTheme = () => {
    setIsDarkTheme(false);
    localStorage.setItem("theme", "light");
    applyTheme(false);
  };

  return (
    <div className="setting">
      <h2>Settings</h2>
      <div className="reco">
        <h3>Max recommendations</h3>
        <div className="counter">
          <i className="fa-solid fa-circle-chevron-left fa-2x arrow" onClick={decreaseValue}></i>
          <input type="number" name="" id="" max={10} value={myValue} readOnly />
          <i className="fa-solid fa-circle-chevron-right fa-2x arrow" onClick={increaseValue}></i>
        </div>
      </div>
      <div className="themes">
        <h3>Themes</h3>
        <div className="toggle">
          <div className={`light ${isDarkTheme ? "" : "active"}`} onClick={toggleLightTheme}>
            Dark <i className="fa-solid fa-moon"></i>
          </div>
          <div className={`dark ${isDarkTheme ? "active" : ""}`} onClick={toggleDarkTheme}>
            Light <i className="fa-solid fa-sun"></i>
          </div>
        </div>
      </div>
      <div className="footer">
        <h4>
          Made with ❤️ by{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/dauntflash">
            Dauntflash
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Settings;