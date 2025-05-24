# CodeArchipelago API使用説明

## エンドポイント一覧

### POST `/relations/modify`

#### 📌 目的  
登場人物の情報を送信すると、AIが関係性を自動生成し、`characters.json` と `relations.json` を更新します。

#### 📥 リクエスト例
```json
{
  "characters": {
    "伊東沙耶香": {
      "attribute": "幼馴染",
      "image": "/portraits/伊東沙耶香.png"
    },
    "吹あゆみ": {
      "attribute": "女子大生",
      "image": "/portraits/吹あゆみ.png"
    },
    "杉下耕助": {
      "attribute": "スターワッチャー",
      "image": "/portraits/杉下耕助.png"
    }
  }
}
```

#### 📤 レスポンス例
```json
{
  "status": "ok",
  "relations": [
    { "from": "伊東沙耶香", "to": "吹あゆみ", "type": "幼なじみ" },
    { "from": "吹あゆみ", "to": "杉下耕助", "type": "スターワッチャー" },
    { "from": "杉下耕助", "to": "伊東沙耶香", "type": "知り合い" }
  ]
}
```

---

### GET `/graph`

#### 📌 目的  
`characters.json` と `relations.json` を元に、相関図用のノードとエッジデータを取得します。

#### 📤 レスポンス例
```json
{
  "nodes": [
    {
      "id": "伊東沙耶香",
      "label": "伊東沙耶香\n(幼馴染)",
      "image": "/portraits/伊東沙耶香.png"
    },
    {
      "id": "吹あゆみ",
      "label": "吹あゆみ\n(女子大生)",
      "image": "/portraits/吹あゆみ.png"
    },
    {
      "id": "杉下耕助",
      "label": "杉下耕助\n(スターワッチャー)",
      "image": "/portraits/杉下耕助.png"
    }
  ],
  "edges": [
    { "from": "伊東沙耶香", "to": "吹あゆみ", "label": "幼なじみ" },
    { "from": "吹あゆみ", "to": "杉下耕助", "label": "スターワッチャー" },
    { "from": "杉下耕助", "to": "伊東沙耶香", "label": "知り合い" }
  ]
}
```

---

## 📝 補足

- 関係性は GPT によって自動生成されます。
- `image` は `/portraits/xxx.png` 形式のパスです。
- `POST /relations/modify` 実行時に `characters.json` と `relations.json` が上書きされます。
