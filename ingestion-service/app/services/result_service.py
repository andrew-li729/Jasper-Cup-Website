from sqlalchemy.orm import Session
from app.models.pydantic_models import Result
from app.models.sqlalchemy_models import ResultORM
from sqlalchemy.exc import IntegrityError


class ResultService:
    def __init__(self, engine):
        self.engine = engine  # SQLAlchemy engine

    def insert(self, result: Result):
        """Insert a single result Pydantic object into the DB, skip duplicates."""
        db_result_data = result.model_dump()  # Convert Pydantic → dict
        
        with Session(self.engine) as session:
            #check composite ID
            existing = session.get(
                ResultORM,
                (db_result_data['race_id'], db_result_data['driver_id'])
            )
            
            if existing:
                print(f"Result with race id {db_result_data['race_id']} and driver id {db_result_data['driver_id']} already exists. Skipping insert.")
                return  # Skip duplicate

            # If not exists, insert
            db_result = ResultORM(**db_result_data)
            session.add(db_result)
            try:
                session.commit()
                print(f"Inserted result {db_result.race_id,db_result.driver_id} successfully.")
            except IntegrityError:
                session.rollback()
                print(f"Failed to insert result {db_result.race_id,db_result.driver_id} due to DB constraint.")