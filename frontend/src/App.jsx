// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Recommendation from './components/Recommendations';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [userId, setUserId] = useState(1);  // Dummy user ID for now

    const searchMovies = async (query) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/movies/search?query=${query}`);
            console.log(response.data); // Log the response data to check the structure
            // Check if results exist and set movies, otherwise set an empty array
            setMovies(response.data.results || []);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]); // Fallback to an empty array in case of error
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-8">Movie Finder</h1>
                <SearchBar onSearch={searchMovies} />
                <MovieList movies={movies} />
                <Recommendation userId={userId} />
            </div>
        </div>
    );
};

export default App;

