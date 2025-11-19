from app.models.pydantic_models import Race
from typing import List, Any
from pprint import pprint
from collections import Counter
from dotenv import load_dotenv
import os

load_dotenv()

currentseason = os.getenv("CURRENT_SEASON")

class RaceParser():
    """_summary_

    Returns:
        _type_: _description_
    """
    @staticmethod 
    def parse(data: dict[str, Any], json_date) -> Race:
        #check if race is valid
        print(data.get("Type", ""))
        
        
        
        #track most used car
        cars = []
        for car in data.get("Cars", []):
                currentmodel = car["Model"]
                cars.append(currentmodel)
        car_counts = Counter(cars)
        most_common_car = car_counts.most_common(1)[0]
        
        current_race = Race(
            season_id = currentseason,
            track_name=data.get("TrackName", ""),
            trackConfig=data.get("TrackConfig", ""),
            race_type = data.get("Type", ""),
            planned_duration = int(data.get("DurationSecs", 0)),
            total_laps=int(data.get("RaceLaps", 0)),\
            car = most_common_car[0],
            race_date = json_date
            
        )
        
        pprint(current_race)
        return current_race