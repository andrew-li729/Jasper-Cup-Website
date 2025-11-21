from app.models.pydantic_models import Race
from app.models.sqlalchemy_models import RaceORM
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

class RaceService:
    def __init__(self, engine):
        self.engine = engine  # SQLAlchemy engine

    def insert(self, race: Race):
        """Insert a single Race Pydantic object into the DB, skip duplicates."""
        db_race_data = race.model_dump()  # Convert Pydantic → dict
        
        db_race_data["track_name"] = db_race_data["track_name"].strip().lower()
        db_race_data["race_date"] = db_race_data["race_date"].replace(tzinfo=None)
        db_race_data.pop("id", None)   # <-- correct key to remove


        
        
        with Session(self.engine) as session:
            # Check if race with exact date exists
                        
            existing = session.query(RaceORM).filter_by(
                race_date=db_race_data['race_date'],
                track_name=db_race_data['track_name']
            ).first()
            
            if existing:
                print(f"Race at {db_race_data['race_date']} already exists. Skipping insert.")
                return existing.id

            # If not exists, insert
            
            db_race = RaceORM(**db_race_data)
            
            session.add(db_race)
            try:
                session.commit()
                print(f"Inserted race at {db_race_data['race_date']} successfully.")
                print(f"Assigned race_id: {db_race.id}")  # <-- now you have the DB-generated PK
                return db_race.id
            except IntegrityError as e:
                session.rollback()
                print(f"Failed to insert {db_race_data['race_date']} due to DB constraint.")
                print(e.orig)  # SQL Server message shows PK or unique constraint name
                
