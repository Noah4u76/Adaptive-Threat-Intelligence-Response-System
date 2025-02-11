import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// ✅ Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ThreatChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ label: "Threat Severity", data: [] }],
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/threats")
      .then((res) => res.json())
      .then((data) => {
        setChartData({
          labels: data.map((threat) => threat.type),
          datasets: [{ label: "Threat Severity", data: data.map((t) => t.severity.length) }],
        });
      })
      .catch((error) => console.error("Error loading chart:", error));
  }, []);

  return <Bar data={chartData} />;
}

export default ThreatChart;