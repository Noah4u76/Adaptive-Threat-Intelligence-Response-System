import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./ThreatChart.css";

Chart.register(...registerables);

function ThreatChart() {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    const fetchThreats = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/threats");
        const data = await response.json();
        setThreats(data); // Store ALL threats, not just real-time alerts
      } catch (error) {
        console.error("🚨 Error fetching threats:", error);
      }
    };

    fetchThreats();
    const interval = setInterval(fetchThreats, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Count all threats by severity
  const severityCount = { Low: 0, Medium: 0, High: 0 };
  threats.forEach((threat) => {
    severityCount[threat.severity] = (severityCount[threat.severity] || 0) + 1;
  });

  const chartData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        label: "Threat Severity Levels",
        data: [severityCount.Low, severityCount.Medium, severityCount.High],
        backgroundColor: ["#2ecc71", "#f1c40f", "#e74c3c"], // Green, Yellow, Red
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Threat Severity Overview</h2>
      {threats.length > 0 ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              title: {
                display: true,
                text: "Threat Severity Levels",
                font: { size: 18 },
              },
            },
            scales: {
              y: { beginAtZero: true },
            },
          }}
        />
      ) : (
        <p>No threat data available</p>
      )}
    </div>
  );
}

export default ThreatChart;
