import numpy as np
from sklearn.ensemble import IsolationForest

# Initialize Anomaly Detection Model
model = IsolationForest(contamination=0.1)  # Detects 10% anomalies

# Simulated Data: Normal & Suspicious Login Attempts
training_data = np.array([[1], [2], [3], [5], [8], [50], [100]])  # Normal and extreme values
model.fit(training_data)

# Function to Detect Anomalies
def detect_anomaly(logins):
    logins = np.array(logins).reshape(-1, 1)
    predictions = model.predict(logins)
    return ["Suspicious" if p == -1 else "Normal" for p in predictions]
