import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
import urllib

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
LoginTimeout=3;
Timeout=3;
"""

params = urllib.parse.quote_plus(conn_str)

conn_str = f"mssql+pyodbc:///?odbc_connect={params}"

engine = create_engine(conn_str)