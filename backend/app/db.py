from __future__ import annotations

import os
import sqlite3
from pathlib import Path
from typing import Iterator


def _db_path() -> Path:
    return Path(os.environ.get("SQLITE_PATH", "./app.db")).expanduser().resolve()


def ensure_db() -> None:
    path = _db_path()
    path.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(path) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS notes (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              content TEXT NOT NULL,
              created_at TEXT NOT NULL DEFAULT (datetime('now'))
            );
            """
        )
        conn.commit()


def get_conn() -> sqlite3.Connection:
    conn = sqlite3.connect(_db_path(), check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn


def query(sql: str, params: tuple = ()) -> list[sqlite3.Row]:
    with get_conn() as conn:
        cur = conn.execute(sql, params)
        rows = cur.fetchall()
        return rows


def execute(sql: str, params: tuple = ()) -> int:
    with get_conn() as conn:
        cur = conn.execute(sql, params)
        conn.commit()
        return cur.lastrowid

