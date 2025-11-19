from app.models.pydantic_models import Collision
from app.models.sqlalchemy_models import CollisionORM
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

class CollisionService:
    def __init__(self, engine):
        self.engine = engine  # SQLAlchemy engine

    def insert(self, collision: Collision):
        """Insert a single collision Pydantic object into the DB, skip duplicates."""
        db_collision_data = collision.model_dump()  # Convert Pydantic → dict
        db_collision_data.pop("id", None)  # Remove PK if present

        with Session(self.engine) as session:
            # Check if a collision already exists for same race, driver, and type
            existing = session.query(CollisionORM).filter_by(
                race_id=db_collision_data['race_id'],
                driver_id=db_collision_data['driver_id'],
                type=db_collision_data['type'],
                other_driver_id=db_collision_data.get('other_driver_id')
            ).first()

            if existing:
                print(f"Collision for race_id={db_collision_data['race_id']}, driver_id={db_collision_data['driver_id']}, type={db_collision_data['type']} already exists. Skipping insert.")
                return existing.id

            # If not exists, insert
            db_collision = CollisionORM(**db_collision_data)
            session.add(db_collision)
            try:
                session.commit()
                print(f"Inserted collision with id={db_collision.id}")
                return db_collision.id
            except IntegrityError as e:
                session.rollback()
                print(f"Failed to insert collision due to DB constraint: {e.orig}")