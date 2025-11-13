from app.models.pydantic_models import Driver
from typing import List, Any

class DriverParser():
    """_summary_

    Returns:
        _type_: _description_
    """
    @staticmethod 
    def parse(data: dict[str, Any]) -> List[Driver]:
        drivers = []
        for result in data.get('Result', []):
            if result["DriverGuid"] in ['',"",None,'']:
                continue
            
            current_driver = Driver(
                id = int(result["DriverGuid"]),
                driver_name = result["DriverName"],
                last_race_id= None  # Placeholder, to be updated later if needed
            )
            
            drivers.append(current_driver)
        return drivers