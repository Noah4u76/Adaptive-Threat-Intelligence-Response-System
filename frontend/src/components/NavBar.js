import React from "react";

function NavBar({ setPage }) {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("logs")}>Threat Logs</button>
    </nav>
  );
}

export default NavBar;
