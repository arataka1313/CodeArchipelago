from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import relations, graph

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 必要に応じて制限
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(relations.router)
app.include_router(graph.router)
