import pyodbc
import os
from dotenv import load_dotenv
load_dotenv()

driver = os.getenv("DB_DRIVER")
server = os.getenv("DB_SERVER")
database = os.getenv("DB_NAME")
username = os.getenv("DB_USER")
password = os.getenv("DB_PASSWORD")

conn_str = f"""
DRIVER={{{driver}}};
SERVER={server};
DATABASE={database};
UID={username};
PWD={password};
TrustServerCertificate=yes;
"""

# Connect
conn = pyodbc.connect(conn_str)
cursor = conn.cursor()

cursor.execute("SELECT * FROM dbo.drivers")
rows = cursor.fetchall()
for row in rows:
    print(row)