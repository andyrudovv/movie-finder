import requests
from app.config import TMDB_API_KEY

def fetch_movies(query: str):
    url = f"https://api.themoviedb.org/3/search/movie?query={query}&api_key={TMDB_API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json().get("results", [])
    return []

def recommend_movies(preferences: dict):
    # Example logic: Use genres to fetch recommendations
    genres = preferences.get("genres", [])
    return fetch_movies(" ".join(genres))

