// src/components/MovieList.jsx
import React from 'react';

const MovieList = ({ movies }) => {
    console.log(movies); // Log the movies array to see if it's being passed correctly

    // Ensure that movies is always an array
    if (!Array.isArray(movies)) {
        return <p>No movies found or an error occurred.</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
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
                    <p>No movies found.</p>
                )}
            </div>
        </div>
    );
};

export default MovieList;

