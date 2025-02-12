import React, { useState, useEffect } from "react";
import Home from "../pages/Home"; 
import Dashboard from "../pages/Dashboard";
import Logs from "../pages/Logs";
import NavBar from "../components/NavBar";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <NavBar setPage={setPage} darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="page-content">
        {page === "home" && <Home setPage={setPage} />}
        {page === "dashboard" && <Dashboard />}
        {page === "logs" && <Logs />}
      </div>
    </div>
  );
}

export default App;

