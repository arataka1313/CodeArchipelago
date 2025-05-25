import os
from openai import OpenAI
import re

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_relations_from_characters(characters: dict):
    names = list(characters.keys())
    attrs = [f"{name}（{characters[name]['attribute']}）" for name in names]
    prompt = "以下の登場人物同士の関係性を3組生成してください:\n"
    prompt += "\n".join(attrs) + "\n"
    prompt += "形式：A,B,関係性 で返してください。"

    res = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )

    text = res.choices[0].message.content.strip()
    relations = []
    for line in text.split("\n"):
        line = re.sub(r"^\d+\.\s*", "", line)
        try:
            a, b, rel = map(str.strip, line.split(","))
            relations.append({"from": a, "to": b, "type": rel})
        except:
            continue

    return relations
