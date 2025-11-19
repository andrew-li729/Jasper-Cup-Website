from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base, Session
from sqlalchemy.exc import IntegrityError
from app.models.pydantic_models import Driver, Race
from sqlalchemy import Column, Integer, String, UniqueConstraint
from sqlalchemy.orm import declarative_base
import datetime

def round_to_ms(dt: datetime.datetime):
    return dt.replace(microsecond=(dt.microsecond // 1000) * 1000)

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

    __table_args__ = (
        UniqueConstraint("race_date", "track_name", name="uq_race_date_track"),
    )
    
class RaceService:
    def __init__(self, engine):
        self.engine = engine  # SQLAlchemy engine

    def insert(self, race: Race):
        """Insert a single Race Pydantic object into the DB, skip duplicates."""
        db_race_data = race.model_dump()  # Convert Pydantic → dict
        db_race_data.pop("race_id", None)  # make sure PK isn’t included

        
        
        with Session(self.engine) as session:
            # Check if race with exact date exists
                        
            existing = session.query(RaceORM).filter_by(
                race_date=db_race_data['race_date'],
                track_name=db_race_data['track_name']
            ).first()
            
            if existing:
                print(f"Race with date {db_race_data['race_date']} already exists. Skipping insert.")
                return  # Skip duplicate

            # If not exists, insert
            
            db_race = RaceORM(**db_race_data)
            
            session.add(db_race)
            try:
                session.commit()
                print(f"Inserted race at {db_race_data['race_date']} successfully.")
                print(f"Assigned race_id: {db_race.id}")  # <-- now you have the DB-generated PK
            except IntegrityError as e:
                session.rollback()
                print(f"Failed to insert {db_race_data['race_date']} due to DB constraint.")
                print(e.orig)  # SQL Server message shows PK or unique constraint name
