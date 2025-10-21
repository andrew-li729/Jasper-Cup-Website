from pydantic import BaseModel
from typing import List, Optional, Literal
from datetime import datetime

class Race(BaseModel):
    #race_id is PK autoincremented in DB
    season_id: int
    track_name: str
    #trackConfig: str, currently not using
    type: Literal["race", "qualifier", "practice"]
    date: datetime
    planned_duration: int  # in milliseconds
    car: str
    total_laps: Optional[int]

class Result(BaseModel):
    race_id: int #composite PK
    driver_id: int #composite PK
    
    position: Optional[int] #None if DNF
    points: float
    total_race_time: Optional[int]  # in milliseconds, None if DNF
    best_lap_time: Optional[int]  # in milliseconds, None if DNF
    driver_name_snapshot: Optional[str]
    country_snapshot: Optional[str]

class ScoringSystem(BaseModel):
    #scoring_id: PK autoincremented in DB
    season_id: int
    position: int
    points: float

class Standing(BaseModel):
    season_id: int #composite PK
    driver_id: int #composite PK
    total_points: float
    
class Season(BaseModel):
    #season_id: int autoincremented in DB
    season_name: str
    
class Collision(BaseModel):
    #collision_id: PK autoincremented in DB
    race_id: int
    driver_id: int
    type: Literal["car", "environment"]
    other_driver_id: Optional[int]  # None if type is "environment"
    impact_speed: float  # in mph(?)

class Driver(BaseModel):
    driver_id: int #taken from json
    driver_name: str
    last_race_id: Optional[int]
        
class Lap(BaseModel):
    race_id: int #composite PK
    driver_id: int #composite PK
    lap_number: int #composite PK
    
    lap_time: int  # in milliseconds
    sector_1_time: int  # in milliseconds
    sector_2_time: int  # in milliseconds
    sector_3_time: int  # in milliseconds
    tire: Literal["soft", "medium", "hard"]
    
    