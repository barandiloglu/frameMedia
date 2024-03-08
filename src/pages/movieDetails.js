import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './css/movieDetails.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        fetch(`https://framemedia-backend.onrender.com/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }, [id]);


    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details">
            <div className="movie-poster">
                <img src={movieDetails.image} alt={movieDetails.title} />
            </div>

            <div className="movie-synopsis">
                <h1>{movieDetails.title}</h1>
                <p>{movieDetails.genre} | {movieDetails.year}</p>

                <div className="movie-buttons">
                    <button>Trailer</button>
                    <button>Add List</button>
                    <button>Redeem</button>
                </div>

                <p>{movieDetails.description}</p>

                <div className="movie-purchase">
                    <button>Rent {movieDetails.price_rent}</button>
                    <button>Buy {movieDetails.price_sale}</button>
                </div>
            </div>

            <div className={`animation-poster`}>
                <img src={movieDetails.image} alt={movieDetails.title} />
            </div>

        </div>
    );
};

export default MovieDetails;
