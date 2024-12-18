from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User, SearchHistory
from app.services import fetch_movies, recommend_movies

router = APIRouter()

@router.get("/movies/search")
def search_movies(query: str, db: Session = Depends(get_db)):
    results = fetch_movies(query)
    return {"query": query, "results": results}

@router.post("/users/preferences")
def update_preferences(user_id: int, preferences: dict, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if user:
        user.preferences = preferences
    else:
        user = User(id=user_id, preferences=preferences)
        db.add(user)
    db.commit()
    return {"message": "Preferences updated", "preferences": preferences}

@router.get("/recommendations")
def get_recommendations(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user or not user.preferences:
        return {"message": "No preferences found"}
    return recommend_movies(user.preferences)
 
