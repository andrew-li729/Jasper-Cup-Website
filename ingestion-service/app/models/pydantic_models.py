from pydantic import BaseModel
from typing import List, Optional, Literal
from datetime import datetime

class Race(BaseModel):
    id: Optional[int] = None
    season_id: Optional[int] = None
    track_name: str
    #trackConfig: str, currently not using
    race_type: str
    race_date: datetime
    planned_duration: int  # in milliseconds
    car: str
    total_laps: Optional[int]

class Result(BaseModel):
    race_id: int #composite PK
    driver_id: int
    
    position: Optional[int] #None if DNF
    points: float
    total_race_time_ms: Optional[int]  # in milliseconds, None if DNF
    best_lap_time_ms: Optional[int]  # in milliseconds, None if DNF
    driver_name_snapshot: Optional[str]
    country_snapshot: Optional[str]

class ScoringSystem(BaseModel):
    id: Optional[int] = None  # Auto-incremented PK
    season_id: Optional[int] = None  # Foreign key to Season
    position: int
    points: float

class Standing(BaseModel):
    id: Optional[int] = None  # Auto-incremented PK
    driver_id: int
    season_id: Optional[int] = None  # Foreign key to Season
    total_points: float
    
class Season(BaseModel):
    id: Optional[int] = None
    season_name: str
    
class Collision(BaseModel):
    id: Optional[int] = None
    race_id: int
    driver_id: int
    type: str
    other_driver_id: Optional[int]  # None if type is "environment"
    impact_speed: float  # in mph(?)

class Driver(BaseModel):
    id: int #taken from json
    driver_name: str
    last_race_id: Optional[int]
        
class Lap(BaseModel):
    race_id: int #composite PK
    driver_id: int #composite PK
    time_stamp: int #composite pk
    
    lap_time: int  # in milliseconds
    
    sector_1_time_ms: int  # in milliseconds
    sector_2_time_ms: int  # in milliseconds
    sector_3_time_ms: int  # in milliseconds
    tire: Literal["soft", "medium", "hard"]
    
