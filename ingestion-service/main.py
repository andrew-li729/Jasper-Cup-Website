from pprint import pprint
from app.parsers.driver_parser import DriverParser
from app.utils.json_loader import JSONLoader
from app.parsers.collision_parser import CollisionParser
from app.database.connection import conn

from app.parsers.race_parser import RaceParser
"""from app.parsers.result_parser import ResultParser
from app.parsers.lap_parser import LapParser
from app.parsers.collision_parser import CollisionParser

from app.services.driver_service import DriverService
from app.services.race_service import RaceService
from app.services.result_service import ResultService
from app.services.lap_service import LapService
from app.services.collision_service import CollisionService
from app.services.standing_service import StandingService """

class ImporterService:
    def __init__(self, conn):
        self.conn = conn
        self.current_race_id: int = None
        self.file_created_date: datetime = None
        
        self.json_loader = JSONLoader()
        #self.driver_parser = DriverParser()
        #self.collision_parser = CollisionParser()
        self.race_parser = RaceParser()
        """ self.result_parser = ResultParser()
        self.lap_parser = LapParser()
        self.collision_parser = CollisionParser() """
        
        # Initialize services
        """ self.driver_service = DriverService(conn)
        self.race_service = RaceService(conn)
        self.result_service = ResultService(conn)
        self.lap_service = LapService(conn)
        self.collision_service = CollisionService(conn)
        self.standing_service = StandingService(conn) """

# Example usage:
importerService = ImporterService(conn)
#data = load_json("test.json")

data = (importerService.json_loader.load_json("test.json"))
importerService.race_parser.parse(data)