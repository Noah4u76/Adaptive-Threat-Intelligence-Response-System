import React, { useEffect, useState } from "react";
import RealTimeAlerts from "../components/RealTimeAlerts";
import ThreatChart from "../components/ThreatChart";
import "./Dashboard.css";

function Dashboard() {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    const fetchThreats = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/threats");
        const data = await response.json();
        setThreats(data);
      } catch (error) {
        console.error("🚨 Error fetching threats:", error);
      }
    };

    fetchThreats();
    const interval = setInterval(fetchThreats, 5000); // Auto-refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>🔒 ATIRS Security Dashboard</h1>

      <div className="dashboard-grid">
        {/* Threat Severity Chart */}
        <div className="dashboard-left">
          <ThreatChart threats={threats} />
        </div>

        {/* Real-Time Alerts (Only Show the Most Recent 5) */}
        <div className="dashboard-right">
          <h2>Real-Time Security Alerts</h2>
          {threats.length > 0 ? (
            <ul className="real-time-alerts">
              {threats.slice(0, 5).map((threat, index) => (
                <li key={index} className={`alert-${threat.severity.toLowerCase()}`}>
                  <span>⚠️ <strong>{threat.type}</strong> detected with <strong>{threat.severity}</strong> severity at {new Date(threat.time).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recent alerts</p>
          )}
        </div>
      </div>

      {/* Recent Threat Logs (Bottom, Only Show 5) */}
      <div className="recent-logs">
        <h2>Recent Threat Logs</h2>
        <table className="threat-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Severity</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {threats.slice(0, 5).map((threat, index) => (
              <tr key={index}>
                <td>{threat.type}</td>
                <td className={`severity-${threat.severity.toLowerCase()}`}>
                  {threat.severity}
                </td>
                <td>{new Date(threat.time).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
