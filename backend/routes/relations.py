from fastapi import APIRouter
from pydantic import BaseModel
from typing import Dict
from services.gpt import generate_relations_from_characters
import json
from pathlib import Path

router = APIRouter()

BASE_DIR = Path(__file__).resolve().parent.parent
RELATIONS_PATH = BASE_DIR / "data/relations.json"
CHARACTERS_PATH = BASE_DIR / "data/characters.json"


# Pydanticモデル定義
class Character(BaseModel):
    attribute: str
    image: str

class CharacterPayload(BaseModel):
    characters: Dict[str, Character]


@router.post("/relations/modify")
async def modify_relations(payload: CharacterPayload):
    # dictに変換（model_dumpでPydantic→dict）
    characters = {name: char.model_dump() for name, char in payload.characters.items()}

    if not characters:
        return {"status": "error", "message": "No characters provided."}

    # GPTで関係性を生成！
    relations = generate_relations_from_characters(characters)

    # 保存
    with open(CHARACTERS_PATH, "w", encoding="utf-8") as f:
        json.dump(characters, f, ensure_ascii=False, indent=2)

    with open(RELATIONS_PATH, "w", encoding="utf-8") as f:
        json.dump(relations, f, ensure_ascii=False, indent=2)

    return {"status": "ok", "relations": relations}
