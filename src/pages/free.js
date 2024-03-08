import React, { useState, useEffect } from "react";
import './css/free.css';
import Banner from '../components/banner2.png';

const Free = () => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);


    useEffect(() => {
        fetch('https://framemedia-backend.onrender.com/movies')
            .then(response => response.json())
            .then(data => {
                const filteredMovies = data.filter(movie => movie.price_rent === 0 && movie.price_sale === 0);
                setMovies(filteredMovies);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    useEffect(() => {
        fetch('https://framemedia-backend.onrender.com/series')
            .then(response => response.json())
            .then(data => {
                const filteredSeries = data.filter(serie => serie.price_rent === 0 && serie.price_sale === 0);
                setSeries(filteredSeries);
            })
            .catch(error => console.error('Error fetching series:', error));
    }, []);

    return (
        <div className="free">
            <h2>Free Series</h2>
            <div className="serie-row">
                {series.map(serie => (
                    <div key={serie.id} className="serie-div">
                        <a href={`/series/${serie.id}`} key={serie.id} className="movie-link">
                            <button className="serie-button">
                                <img src={serie.image} alt={serie.title} />
                            </button>
                        </a>
                    </div>
                ))}
            </div>


            <div className="banner-1">
                <a href="#" className="banner-button">
                    <img src={Banner} alt="Button" />
                </a>
            </div>

            <h2>Free Films</h2>
            <div className="movie-row">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-div">
                        <a href={`/movies/${movie.id}`} key={movie.id} className="movie-link">
                            <button className="movie-button">
                                <img src={movie.image} alt={movie.title} />
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Free;
