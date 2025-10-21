import pyodbc
import os
from dotenv import load_dotenv
load_dotenv()

print(pyodbc.drivers())


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
PWD={password}
"""

# Connect
conn = pyodbc.connect(conn_str)
cursor = conn.cursor()
cursor.execute("SELECT 1")
print(cursor.fetchone())