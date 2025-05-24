from services.gpt import generate_relations_from_characters

characters = {
    "伊東沙耶香": {"attribute": "幼馴染"},
    "吹あゆみ": {"attribute": "女子大生"},
    "杉下耕助": {"attribute": "スターワッチャー"}
}

relations = generate_relations_from_characters(characters)

for r in relations:
    print(r)
