import os

TMDB_API_KEY = os.getenv("TMDB_API_KEY", "50cdc0c219848d043300ca1825361b6a")
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./movies.db")
