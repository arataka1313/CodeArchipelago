from fastapi import APIRouter
from pathlib import Path
import json

router = APIRouter()

BASE_DIR = Path(__file__).resolve().parent.parent
CHAR_PATH = BASE_DIR / "data/characters.json"
REL_PATH = BASE_DIR / "data/relations.json"

def safe_load_json(path):
    if not path.exists() or path.stat().st_size == 0:
        return {}
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

@router.get("/graph")
def get_graph():
    characters = safe_load_json(CHAR_PATH)
    relations = safe_load_json(REL_PATH)

    nodes = []
    edges = []

    for name, info in characters.items():
        nodes.append({
            "id": name,
            "label": f"{name}\n({info['attribute']})",
            "image": info.get("image", "")
        })

    for rel in relations:
        edges.append({
            "from": rel["from"],
            "to": rel["to"],
            "label": rel["type"]
        })

    return {"nodes": nodes, "edges": edges}
