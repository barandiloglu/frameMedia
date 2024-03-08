import React, { useState, useEffect } from "react";
import './css/movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://framemedia-backend.onrender.com/movies')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const splitMovies = (movies) => {
        const dividedMovies = [];

        for (let i = 0; i < movies.length; i += 4) {
            dividedMovies.push(movies.slice(i, i + 4)); 
        }

        return dividedMovies;
    };

    const dividedMovies = splitMovies(movies);

    return (
        <div className="movies">
            {dividedMovies.map((moviesGroup, index) => (
                <div key={index} className="movie-row">
                    {moviesGroup.map(movies => (
                        <div key={movies.id} className="movie-div">
                            <a href={`/movies/${movies.id}`} key={movies.id} className="movie-link">
                                <button className="movie-button">
                                    <img src={movies.image} alt={movies.title} />
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            ))}
        </div>    
    );
};

export default Movies;