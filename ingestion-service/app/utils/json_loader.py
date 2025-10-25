import json
from pathlib import Path
from typing import Any
from datetime import datetime
from typing import Any
import os

class JSONLoader:
    """_summary_

    Returns:
        _type_: _description_
    """
    @staticmethod
    def load_json(file_path: str) -> Any:
        """
        Parse a JSON file and returns the data.
        
        accepts both absolute and relative file paths. r"absolute" or "relative"
        """
        
        path = Path(file_path).expanduser().resolve()  # handle ~ and relative paths
        if not path.is_file():
            raise FileNotFoundError(f"No file found at {path}")
        
        with open(path, "r", encoding="utf-8") as f:
            raw_data = json.load(f)
            
        return raw_data
    
    @staticmethod
    def get_file_date(file_path: str) -> dict[str, datetime]:
        path = Path(file_path).expanduser().resolve()
        if not path.is_file():
            raise FileNotFoundError(f"No file found at {path}")
        
        file_stats = os.stat(path)
        
        return datetime.fromtimestamp(file_stats.st_birthtime)