// src/components/Recommendation.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Recommendation = ({ userId }) => {
    const [movies, setMovies] = useState([]);

    const fetchRecommendations = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/recommendations?user_id=${userId}`);
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    return (
        <div className="p-4">
            <button
                onClick={fetchRecommendations}
                className="mb-4 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
                Get Recommendations
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                className="w-full h-64 object-cover"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{movie.title}</h3>
                                <p className="text-gray-600 text-sm">{movie.overview}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No recommendations available.</p>
                )}
            </div>
        </div>
    );
};

export default Recommendation;

