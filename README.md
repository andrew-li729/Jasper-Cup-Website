# Jasper Cup ETL Pipeline  
*A real-time ETL system for ingesting Assetto Corsa race telemetry into SQL Server*


## Overview

The **Jasper Cup ETL Pipeline** is a real-time ingestion system that automatically extracts, transforms, and loads Assetto Corsa race telemetry into a SQL Server database within seconds of file creation.

The system includes:

- Automated file detection using **Watchdog**
- **SHA-256 hash–based deduplication** to guarantee exactly-once ingestion
- A structured **SQLAlchemy 2.0 service-layer architecture**
- Full parsing + insertion of drivers, laps, collisions, results, and race metadata
- A modular, production-style ETL design

---

## Data Flow

1. Watchdog detects a new JSON file  
2. `ImporterService` computes SHA-256  
3. `ProcessedFileService` checks SQL Server for file hash  
4. If new:
   - Load + validate JSON  
   - Parse → ORM models  
   - Insert into database  
   - Store hash  
5. If duplicate:
   - Skip immediately  

---

## 🛠️ Tech Stack

- **Python**
- **SQL Server**
- **SQLAlchemy 2.0**
- **Watchdog**
- **pyodbc**
- **dotenv**

---

### 1. Clone the Repo
```bash
git clone https://github.com/andrew-li729/Jasper-Cup-ETL-Microservice.git
cd data
```

### 2. Install Dependencies
```bash
(optional: create virtual environment) python -m venv C:\path\to\new\virtual\environment
pip install -r requirements.txt
```

### 3. Environment Variables
Create a .env file:
```bash
DB_DRIVER=ODBC Driver 18 for SQL Server
DB_SERVER=
DB_NAME = 
DB_USER = 
DB_PASSWORD = 
CURRENT_SEASON = 
RACE_OUTPUT_DIRECTORY = 
```

### 4. Run the Watcher
```bash
python -m app.main
```
---
