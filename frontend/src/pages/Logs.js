import React, { useEffect, useState } from "react";
import "./Logs.css";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/threats");
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error("🚨 Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="logs-container">
      <h1>📜 Threat Logs</h1>
      <table className="threat-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Severity</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.type}</td>
              <td>{log.severity}</td>
              <td>{new Date(log.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;
