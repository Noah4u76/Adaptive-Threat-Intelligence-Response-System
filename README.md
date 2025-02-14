# 🔒 Adaptive Threat Intelligence Response System (ATIRS)
> **Real-time threat detection & security monitoring system**

ATIRS is a **real-time security monitoring system** that logs threats, provides alerts, and offers **data visualization** for better security insights.

---

## 📌 Features
- 📊 **Threat Severity Chart** – Displays detected threats categorized by severity.
- 📢 **Real-Time Alerts** – Live notifications of security threats.
- 📜 **Recent Threat Logs** – Displays latest security logs.
- 🌙 **Dark Mode** – Toggle between light and dark themes.
- 🛡️ **AI-Powered Anomaly Detection** – Uses machine learning to detect threats.
- 🖥️ **Interactive Dashboard** – A modern UI for security monitoring.
- 🔍 **Network Scanning** – Scan for open ports and vulnerabilities.

---

## 🛠️ Setup & Installation

### 📂 **Clone the Repository**
```bash
git clone https://github.com/your-username/ATIRS.git
cd ATIRS
```

---

## 🚀 Frontend (React)
```bash
cd frontend
npm install  # Install dependencies
npm start    # Start the frontend (Runs on http://localhost:3000)
```
## 🔧 Backend (FastAPI)
```bash
cd ../backend
python -m venv venv  # Create virtual environment (optional)
source venv/bin/activate  # Activate (Windows: venv\Scripts\activate)
pip install -r requirements.txt  # Install dependencies
uvicorn main:app --host 127.0.0.1 --port 8000 --reload  # Start API
```
- API Base URL: http://127.0.0.1:8000
- API Docs: http://127.0.0.1:8000/docs

---

## 📡 API Endpoints
```bash
# Get all logged threats
GET /threats

# Log a new threat
POST /log_threat
{
  "type": "Brute Force",
  "severity": "High"
}

# Run AI-based threat detection
POST /detect_threats
{
  "login_attempts": [5, 10, 50, 100]
}

# Scan a network for open ports
POST /scan_network
{
  "target_ip": "192.168.1.1"
}
```

## 🛠️ Technologies Used

### Frontend:
- ⚛️ React.js – UI framework
- 📊 Chart.js – Graphs & data visualization
- 🎨 Material-UI (MUI) – Modern UI components
### Backend:
- 🚀 FastAPI – High-performance API framework
- 🐍 Python – Backend logic
- 🛢️ SQLAlchemy – Database ORM
- 🔍 Scapy / Nmap – Network scanning tools

---

## 🚀 Future Enhancements
- 🔴 Live WebSockets – Real-time data streaming for alerts
- 🔮 AI-Based Threat Prediction – Future attack forecasting
- 📧 Email/SMS Alerts – Get notified about threats
- 📊 More Advanced Visualizations – New security insights

---
