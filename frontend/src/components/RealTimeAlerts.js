import React, { useEffect, useState } from "react";

function RealTimeAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://127.0.0.1:8000/threats")
        .then((res) => res.json())
        .then((data) => setAlerts(data.slice(-5)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>⚠️ Real-Time Security Alerts</h2>
      <ul>
        {alerts.map((alert, i) => (
          <li key={i}>
            🚨 {alert.type} - {alert.severity} ({alert.time})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeAlerts;