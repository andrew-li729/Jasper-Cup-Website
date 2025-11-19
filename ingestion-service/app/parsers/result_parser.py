from app.models.pydantic_models import Result
from typing import List, Any
from pprint import pprint
from collections import Counter
from dotenv import load_dotenv
import os
from dotenv import load_dotenv

load_dotenv()

currentseason = os.getenv("CURRENT_SEASON")



class ResultParser():
    """_summary_

    Returns:
        _type_: _description_
    """
    @staticmethod 
    def parse(data: dict[str, Any], raceid) -> Result:
        results = []
        #pprint(data['Result'])
        for result in data['Result']:
            
            if result['DriverGuid'] == '':
                continue

            current_result = Result(
                race_id = raceid,
                driver_id = result['DriverGuid'],
                
                position = None,
                points = 0,
                total_race_time_ms = result['TotalTime'],
                best_lap_time_ms = result['BestLap'],
                driver_name_snapshot = result['DriverName'],
                country_snapshot = None
            )
            
            
            results.append(current_result)

        return results