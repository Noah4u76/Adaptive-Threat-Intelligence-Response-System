import React from "react";
import ThreatChart from "../components/ThreatChart";
import RealTimeAlerts from "../components/RealTimeAlerts";

function Dashboard() {
  return (
    <div className="container">
      <h1>🔒 Security Dashboard</h1>
      <div className="grid-container">
        <div className="grid-item">
          <ThreatChart />
        </div>
        <div className="grid-item">
          <RealTimeAlerts />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
