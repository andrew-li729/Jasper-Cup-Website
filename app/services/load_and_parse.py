from json_loader import load_json

def load_and_parse_json(file_path: str):
    
    data = load_json(file_path)
    
    print(data)
    
    return data

load_and_parse_json("test.json")