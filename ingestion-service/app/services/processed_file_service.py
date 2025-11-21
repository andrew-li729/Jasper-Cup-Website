from sqlalchemy.orm import Session
from app.models.sqlalchemy_models import ProcessedFileORM

class ProcessedFileService:
    def __init__(self, engine):
        self.engine = engine

    def has_hash(self, file_hash: str) -> bool:
        with Session(self.engine) as session:
            return session.get(ProcessedFileORM, file_hash) is not None

    def insert_hash(self, file_hash: str):
        with Session(self.engine) as session:
            session.add(ProcessedFileORM(file_hash=file_hash))
            session.commit()
