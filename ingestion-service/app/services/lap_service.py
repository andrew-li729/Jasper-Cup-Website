from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.models.pydantic_models import Lap
from app.models.sqlalchemy_models import LapORM


class LapService:
    def __init__(self, engine):
        self.engine = engine  # SQLAlchemy engine

    def insert(self, lap: Lap):
        """Insert a lap into the DB, skipping duplicates based on composite PK."""
        db_lap_data = lap.model_dump()

        with Session(self.engine) as session:

            # Check using composite primary key
            existing = session.get(
                LapORM,
                (
                    db_lap_data["race_id"],
                    db_lap_data["driver_id"],
                    db_lap_data["time_stamp"]
                )
            )

            if existing:
                print(
                    f"Lap already exists: "
                    f"(race_id={db_lap_data['race_id']}, "
                    f"driver_id={db_lap_data['driver_id']}, "
                    f"time_stamp={db_lap_data['time_stamp']}). Skipping."
                )
                return

            # Insert new lap
            db_lap = LapORM(**db_lap_data)
            session.add(db_lap)

            try:
                session.commit()
                print(
                    f"Inserted lap: "
                    f"(race_id={db_lap.race_id}, driver_id={db_lap.driver_id}, time_stamp={db_lap.time_stamp})"
                )
            except IntegrityError as e:
                session.rollback()
                print(f"Failed to insert lap due to DB constraint: {e.orig}")
