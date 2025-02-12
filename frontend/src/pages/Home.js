import React from "react";
import { Button } from "@mui/material";
import "./Home.css";

function Home({ setPage }) {
  return (
    <div className="home-container">
      <h1>🔒 Welcome to ATIRS</h1>
      <p>
        The Adaptive Threat Intelligence Response System (ATIRS) is a real-time security monitoring and threat analysis tool.
      </p>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={() => setPage("dashboard")}>
          Go to Dashboard
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => setPage("logs")}>
          View Threat Logs
        </Button>
      </div>
    </div>
  );
}

export default Home;
