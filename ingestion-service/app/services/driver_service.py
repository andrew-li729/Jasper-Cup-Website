from sqlalchemy import Column, Integer, String, BigInteger, UniqueConstraint
from sqlalchemy.orm import declarative_base, Session
from sqlalchemy.exc import IntegrityError
from app.models.pydantic_models import Driver, Race
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class RaceORM(Base):
    __tablename__ = "races"
    race_id = Column(Integer, primary_key=True)
    race_name = Column(String, nullable=False)


class DriverORM(Base):
    __tablename__ = "drivers"
    id = Column(BigInteger, primary_key=True,autoincrement=False)
    driver_name = Column(String, nullable=False)
    last_race_id = Column(Integer, ForeignKey("races.race_id"), nullable=True)

    __table_args__ = (
        UniqueConstraint('id', name='uq_driver_id'),
        UniqueConstraint('driver_name', name='uq_driver_name'),
    )
    
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