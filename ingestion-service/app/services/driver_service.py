from app.models.pydantic_models import Driver
from app.models.sqlalchemy_models import DriverORM
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
    
class DriverService:
    def __init__(self, engine):
        self.engine = engine  # SQLAlchemy engine

    def insert(self, driver: Driver):
        """Insert a single Driver Pydantic object into the DB, skip duplicates."""
        db_driver_data = driver.model_dump()  # Convert Pydantic → dict
        
        with Session(self.engine) as session:
            # Check if driver with same ID already exists
            existing = session.get(DriverORM, db_driver_data['id'])
            if existing:
                print(f"Driver with id {db_driver_data['id']} already exists. Skipping insert.")
                return  # Skip duplicate

            # If not exists, insert
            db_driver = DriverORM(**db_driver_data)
            session.add(db_driver)
            try:
                session.commit()
                print(f"Inserted driver {db_driver.driver_name} successfully.")
            except IntegrityError:
                session.rollback()
                print(f"Failed to insert driver {db_driver.driver_name} due to DB constraint.")