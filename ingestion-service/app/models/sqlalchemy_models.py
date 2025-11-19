from sqlalchemy import Column, Integer, String, ForeignKey, UniqueConstraint
from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, Integer, String, BigInteger, Float, DateTime
from sqlalchemy.orm import declarative_base, Session, relationship
from sqlalchemy.exc import IntegrityError

Base = declarative_base()
class RaceORM(Base):
    __tablename__ = "races"

    id = Column("id", Integer, primary_key=True, autoincrement=True)
    season_id = Column("season_id", Integer, nullable=False, default=0)
    track_name = Column("track_name", String, nullable=False)
    race_type = Column("race_type", String, nullable=False)       # Python: race_type, DB: type
    race_date = Column("race_date", DateTime, nullable=False)     # Python: race_date, DB: date
    planned_duration = Column("planned_duration", Integer, nullable=False, default=0)
    car = Column("car", String, nullable=False)
    total_laps = Column("total_laps", Integer, nullable=False, default=0)

    
    results = relationship("ResultORM", back_populates="race", cascade="all, delete-orphan")


    __table_args__ = (
        UniqueConstraint("race_date", "track_name", name="uq_race_date_track"),
    )
    
class ResultORM(Base):
    __tablename__ = "results"

    # Composite primary key
    race_id = Column(Integer, ForeignKey("races.id"), primary_key=True)
    driver_id = Column(BigInteger, ForeignKey("drivers.id"), primary_key=True)

    position = Column(Integer, nullable=True)
    points = Column(Float, nullable=False, default=0.0)

    total_race_time_ms = Column(Integer, nullable=True)   # ms
    best_lap_time_ms = Column(Integer, nullable=True)     # ms

    driver_name_snapshot = Column(String(255), nullable=True)
    country_snapshot = Column(String(128), nullable=True)

    # Relationships
    race = relationship("RaceORM", back_populates="results")
    driver = relationship("DriverORM", back_populates="results")

    def __repr__(self):
        return (
            f"Result(race_id={self.race_id}, driver_id={self.driver_id}, "
            f"position={self.position}, points={self.points}, "
            f"total_race_time={self.total_race_time_ms}, best_lap_time={self.best_lap_time_ms}, "
            f"driver_name_snapshot={self.driver_name_snapshot!r}, "
            f"country_snapshot={self.country_snapshot!r})"
        )

class DriverORM(Base):
    __tablename__ = "drivers"
    id = Column(BigInteger, primary_key=True,autoincrement=False)
    driver_name = Column(String, nullable=False)
    last_race_id = Column(Integer, ForeignKey("races.race_id"), nullable=True)

    
    results = relationship("ResultORM", back_populates="driver", cascade="all, delete-orphan")

    
    __table_args__ = (
        UniqueConstraint('id', name='uq_driver_id'),
        UniqueConstraint('driver_name', name='uq_driver_name'),
    )