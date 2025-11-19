from pprint import pprint
from app.parsers.driver_parser import DriverParser
from app.utils.json_loader import JSONLoader
from app.parsers.collision_parser import CollisionParser
from app.database.connection import engine
from datetime import datetime
from app.parsers.race_parser import RaceParser
from app.services.driver_service import DriverService
from app.services.race_service import RaceService
import os
from dotenv import load_dotenv

load_dotenv()
directory = os.getenv("RACE_OUTPUT_DIRECTORY")

"""from app.parsers.result_parser import ResultParser
from app.parsers.lap_parser import LapParser
from app.parsers.collision_parser import CollisionParser


from app.services.race_service import RaceService
from app.services.result_service import ResultService
from app.services.lap_service import LapService
from app.services.collision_service import CollisionService
from app.services.standing_service import StandingService """



class ImporterService:
    def __init__(self,engine):
        self.engine = engine
        
        self.json_loader = JSONLoader()
        self.driver_parser = DriverParser()
        self.collision_parser = CollisionParser()
        self.race_parser = RaceParser()
        """ self.result_parser = ResultParser()
        self.lap_parser = LapParser()
        """
        self.collision_parser = CollisionParser()
        
        # Initialize services
        self.driver_service = DriverService(self.engine)
        self.race_service = RaceService(self.engine)
        """self.result_service = ResultService(conn)
        self.lap_service = LapService(conn)
        self.collision_service = CollisionService(conn)
        self.standing_service = StandingService(conn) """
    
    def parse_and_insert(self, file_path: str):
        
        data = self.json_loader.load_json(file_path)
        
        file_created_date = self.json_loader.get_file_date(file_path)

        
        
        self.current_race_id = self.race_parser.parse(data, file_created_date)
        
        
        
        drivers = self.driver_parser.parse(data)
        for driver in drivers:
            self.driver_service.insert(driver)
        
        race = self.race_parser.parse(data,file_created_date)
        race_id = self.race_service.insert(race)
        
        
        return data
        

# Example usage:

importerService = ImporterService(engine)

importerService.parse_and_insert(directory)