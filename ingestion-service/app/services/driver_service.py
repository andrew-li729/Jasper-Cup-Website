from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import declarative_base, Session
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
    id = Column(Integer, primary_key=True,autoincrement=False)
    driver_name = Column(String, nullable=False)
    last_race_id = Column(Integer, ForeignKey("races.race_id"), nullable=True)

class DriverService:
    def __init__(self, engine):
        self.engine = engine  # SQLAlchemy engine

    def insert(self, driver: Driver):
        """Insert a single Driver Pydantic object into the DB."""
        with Session(self.engine) as session:
            db_driver = DriverORM(**driver.model_dump())
            session.add(db_driver)
            session.commit()