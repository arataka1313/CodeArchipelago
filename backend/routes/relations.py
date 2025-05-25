import json
from pathlib import Path
from fastapi import APIRouter
from pydantic import BaseModel
from services.gpt import generate_relations_from_characters

BASE_DIR = Path(__file__).resolve().parent.parent
CHARACTERS_PATH = BASE_DIR / "data/characters.json"
RELATIONS_PATH = BASE_DIR / "data/relations.json"

class CharacterInput(BaseModel):
    name: str
    attribute: str

router = APIRouter()

@router.post("/characters/add")
async def add_character(payload: CharacterInput):
    name = payload.name
    attribute = payload.attribute

    image_path = f"/portraits/{name}.png"

    if CHARACTERS_PATH.exists():
        with open(CHARACTERS_PATH, "r", encoding="utf-8") as f:
            characters = json.load(f)
    else:
        characters = {}

    characters[name] = {
        "attribute": attribute,
        "image": image_path
    }

    with open(CHARACTERS_PATH, "w", encoding="utf-8") as f:
        json.dump(characters, f, ensure_ascii=False, indent=2)

    # ここで関係性を再生成！
    relations = generate_relations_from_characters(characters)
    with open(RELATIONS_PATH, "w", encoding="utf-8") as f:
        json.dump(relations, f, ensure_ascii=False, indent=2)

    return {
        "status": "ok",
        "added": {
            name: {
                "attribute": attribute,
                "image": image_path
            }
        },
        "relations": relations
    }
