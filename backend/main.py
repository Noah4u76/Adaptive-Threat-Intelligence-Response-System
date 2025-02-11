from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from datetime import datetime
from ml_model import detect_anomaly
from network_scanner import scan_network

# Database Setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./threats.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Threat Model
class Threat(Base):
    __tablename__ = "threats"
    id = Column(Integer, primary_key=True, index=True)
    type = Column(String, index=True)
    severity = Column(String)
    time = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(bind=engine)

# FastAPI App
app = FastAPI()

# CORS Middleware (Frontend Access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to Get Database Session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ✅ Root Route
@app.get("/")
def read_root():
    return {"message": "ATIRS Security API is running"}

# ✅ Log Threats to Database
@app.post("/log_threat")
def log_threat(type: str, severity: str, db: Session = Depends(get_db)):
    threat = Threat(type=type, severity=severity)
    db.add(threat)
    db.commit()
    db.refresh(threat)
    return {"message": "Threat logged", "data": threat}

# ✅ Retrieve All Threat Logs
@app.get("/threats")
def get_threats(db: Session = Depends(get_db)):
    return db.query(Threat).all()

# ✅ Detect Suspicious Activity
@app.post("/detect_threats")
def detect_threats(login_attempts: list[int]):
    result = detect_anomaly(login_attempts)
    return {"analysis": result}

# ✅ Scan Network for Open Ports
@app.post("/scan_network")
def scan_network_route(target_ip: str):
    try:
        result = scan_network(target_ip)
        return {"message": "Scan complete", "result": result}
    except Exception as e:
        return {"error": str(e)}