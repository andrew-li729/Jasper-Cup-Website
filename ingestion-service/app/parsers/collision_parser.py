from app.models.pydantic_models import Collision
from typing import List, Any
from pprint import pprint

class CollisionParser():
    """_summary_

    Returns:
        _type_: _description_
    """
    @staticmethod 
    def parse(data: dict[str, Any],raceid) -> List[Collision]:
        collisions = []
        for event in data.get('Events', []):
            
            #pprint(event)
            
            other_driver_id = event.get("OtherDriverGuid")
            if other_driver_id in [None, '', ""]:
                other_driver_id = None

            currentcollision = Collision(
                race_id=raceid,
                driver_id=int(event["Driver"]["Guid"]),
                type=event["Type"],
                other_driver_id=other_driver_id,
                impact_speed=float(event["ImpactSpeed"])
            )
            collisions.append(currentcollision)
            
        return collisions