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
            
            currentcollision = Collision(
                race_id=raceid,
                driver_id=int(event["Driver"]["Guid"]),
                type=event["Type"],
                other_driver_id=event['OtherDriver']['Guid'] or None,
                impact_speed=float(event["ImpactSpeed"])
            )
            collisions.append(currentcollision)
            
        return collisions