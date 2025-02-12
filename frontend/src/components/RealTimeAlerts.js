import React from "react";
import "./RealTimeAlerts.css";

function RealTimeAlerts({ threats }) {
  return (
    <div className="real-time-alerts">
      <h2>🔔 Real-Time Security Alerts</h2>
      {threats.length === 0 ? (
        <p>No threats detected.</p>
      ) : (
        threats.map((threat, index) => (
          <div key={index} className="alert-box">
            <p>
              🚨 <b>{threat.type}</b> detected with <b>{threat.severity}</b> severity at {threat.time}.
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default RealTimeAlerts;
