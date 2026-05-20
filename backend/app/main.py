from __future__ import annotations

from typing import Any

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from .db import ensure_db, execute, query

app = FastAPI(title="HelloJocelyn API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def _startup() -> None:
    ensure_db()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


class NoteIn(BaseModel):
    content: str = Field(min_length=1, max_length=2000)


class NoteOut(BaseModel):
    id: int
    content: str
    created_at: str


@app.get("/api/notes", response_model=list[NoteOut])
def list_notes() -> list[dict[str, Any]]:
    rows = query(
        "SELECT id, content, created_at FROM notes ORDER BY id DESC LIMIT 100;",
    )
    return [dict(r) for r in rows]


@app.post("/api/notes", response_model=NoteOut)
def create_note(payload: NoteIn) -> dict[str, Any]:
    note_id = execute("INSERT INTO notes (content) VALUES (?);", (payload.content,))
    row = query(
        "SELECT id, content, created_at FROM notes WHERE id = ?;",
        (note_id,),
    )[0]
    return dict(row)

