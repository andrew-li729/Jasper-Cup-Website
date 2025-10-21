import json
from pathlib import Path
from typing import Any

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
