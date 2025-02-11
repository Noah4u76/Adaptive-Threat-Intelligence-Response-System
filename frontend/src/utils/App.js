import React, { useState } from "react";
import Dashboard from "../pages/Dashboard";
import ThreatLog from "../components/ThreatLog";
import NavBar from "../components/NavBar";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div>
      <NavBar setPage={setPage} />
      <h1>🔒 ATIRS Security Dashboard</h1>
      {page === "dashboard" ? <Dashboard /> : <ThreatLog />}
    </div>
  );
}

export default App;
