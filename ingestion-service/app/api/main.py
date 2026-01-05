from fastapi import FastAPI, UploadFile, File, HTTPException
import shutil
import uuid
from app.services.importer_service import ImporterService
from app.database.connection import engine

UPLOAD_DIR = "uploads"

app = FastAPI()
importer = ImporterService(engine)

@app.post("/upload-race")
async def upload_race(file: UploadFile = File(...)):
    if not file.filename.endswith(".json"):
        raise HTTPException(400, "Only JSON files allowed")

    filename = f"{uuid.uuid4()}.json"
    filepath = f"{UPLOAD_DIR}/{filename}"

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    importer.parse_and_insert(filepath)

    return {"status": "success"}
