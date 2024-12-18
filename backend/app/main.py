from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for specific origins (e.g., React frontend)
origins = [
    "http://localhost:5173",  # Replace with the URL of your frontend if needed
]

# Add CORSMiddleware to the FastAPI app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows requests from the specified frontend
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # You can adjust allowed HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/movies/search")
def search_movies(query: str):
    # Your movie search logic
    return {"message": f"Searching for {query}"}

