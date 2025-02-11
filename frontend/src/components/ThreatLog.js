import React, { useEffect, useState } from "react";

function ThreatLog() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/threats")
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, []);

  return (
    <div>
      <h2>📜 Threat Logs</h2>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>
            <strong>{log.type}</strong> - {log.severity} - {log.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThreatLog;