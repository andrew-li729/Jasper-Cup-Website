from app.models.pydantic_models import Lap
from typing import List, Any

tireMap = {
    'S':'soft',
    'M':'medium',
    'H':'hard'
}

class LapParser():
    """_summary_

    Returns:
        _type_: _description_
    """
    @staticmethod 
    def parse(data: dict[str, Any],race_id:int) -> List[Lap]:
        laps = []
        
        for lap in data.get('Laps', []):
            #print(lap)
            
            
            
            currentlap = Lap(
                
                race_id = race_id,
                driver_id = lap['DriverGuid'],
                time_stamp = lap['Timestamp'],
                
                lap_time = lap['LapTime'],
                sector_1_time_ms = lap['Sectors'][0],
                sector_2_time_ms = lap['Sectors'][1],
                sector_3_time_ms = lap['Sectors'][2],
                tire = tireMap[lap['Tyre']]
            )
            
            laps.append(currentlap)
        return laps