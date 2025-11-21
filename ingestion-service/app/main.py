from pprint import pprint
from app.parsers.driver_parser import DriverParser
from app.utils.json_loader import JSONLoader
from app.parsers.collision_parser import CollisionParser
from app.database.connection import engine
from app.parsers.race_parser import RaceParser
from app.services.driver_service import DriverService
from app.services.race_service import RaceService
from app.services.result_service import ResultService
from app.services.collision_service import CollisionService
from app.services.lap_service import LapService
from sqlalchemy.orm import Session
from app.models.sqlalchemy_models import RaceORM
import os
from dotenv import load_dotenv

from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError, OperationalError
import pyodbc

load_dotenv()
directory = os.getenv("RACE_OUTPUT_DIRECTORY")

from app.parsers.result_parser import ResultParser
from app.parsers.lap_parser import LapParser


"""from app.services.race_service import RaceService



from app.services.standing_service import StandingService """



class ImporterService:
    def __init__(self,engine):
        self.engine = engine
        
        def test_connection(engine):
            try:
                with Session(engine) as session:
                    # simple query to test that DB is reachable
                    session.query(RaceORM).limit(1).all()

                print("✅ Database connection OK")
                return True

            except (OperationalError, SQLAlchemyError, pyodbc.Error) as e:
                print("❌ Database connection FAILED")
                print(e)
                return False
        
        if not test_connection(self.engine):
            raise RuntimeError("Cannot connect to the database — importer aborted")
            
        self.json_loader = JSONLoader()
        self.driver_parser = DriverParser()
        self.collision_parser = CollisionParser()
        self.race_parser = RaceParser()
        self.result_parser = ResultParser()
        self.lap_parser = LapParser()
        self.collision_parser = CollisionParser()
        
        # Initialize services
        self.driver_service = DriverService(self.engine)
        self.race_service = RaceService(self.engine)
        self.result_service = ResultService(engine)
        self.collision_service = CollisionService(engine)
        self.lap_service = LapService(engine)
        """
        
        self.standing_service = StandingService(conn) """

    
    
    
    def parse_and_insert(self, file_path: str):
        
        data = self.json_loader.load_json(file_path)
        file_created_date = self.json_loader.get_file_date(file_path)
        
        drivers = self.driver_parser.parse(data)
        for driver in drivers:
            self.driver_service.insert(driver)
        
        race = self.race_parser.parse(data,file_created_date)
        race_id = self.race_service.insert(race)
        
        results = self.result_parser.parse(data,race_id)
        
        for result in results:
            self.result_service.insert(result)
            
        collisions = self.collision_parser.parse(data,race_id)
        for collision in collisions:
            self.collision_service.insert(collision)
            
        laps = self.lap_parser.parse(data,race_id)
        
        for lap in laps:
            self.lap_service.insert(lap)
        return data
        

# Example usage:

importerService = ImporterService(engine)

importerService.parse_and_insert(directory)