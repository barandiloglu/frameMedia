import React, { useState, useEffect } from "react";
import './css/homePage.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Banner from '../components/banner1.png';
import Banner2 from '../components/banner2.png';


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    const [current, setCurrent] = useState(0);

    const [heroSection, setHeroSection] = useState([]);

    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [featuredSeries, setFeaturedSeries] = useState([]);


    useEffect(() => {
        fetch('https://framemedia-backend.onrender.com/movies')
            .then(response => response.json())
            .then(data => {
                setHeroSection(data.slice(0, 5)); 
                setMovies(data);
                const randomFeaturedMovies = getRandomMovies(data, 7);
                setFeaturedMovies(randomFeaturedMovies);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    useEffect(() => {
        fetch('https://framemedia-backend.onrender.com/series')
            .then(response => response.json())
            .then(data => {
                setSeries(data);
                const randomFeaturedSeries = getRandomSeries(data, 7);
                setFeaturedSeries(randomFeaturedSeries);
            })
            .catch(error => console.error('Error fetching series:', error));
    }, []);

    const getRandomMovies = (movies, count) => {
        const shuffled = movies.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const getRandomSeries = (series, count) => {
        const shuffled = series.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const nextSlide = () => {
        setCurrent(current === heroSection.length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? heroSection.length - 1 : current - 1);
    };
    
    if (!Array.isArray(movies) || heroSection.length <= 0) {
        return null;
    }

    const handleDotClick = (index) => {
        setCurrent(index);
    };

    return (
        <div className="home-page-wrapper">
            <div className="home-page">
                <FaArrowLeft className='left-arrow' onClick={prevSlide} />
                    <div className="slider">
                        {heroSection.map((movie, index) => (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={movie.id}
                            >
                                {index === current && (
                                    <img src={movie.image} alt={movie.title} className='image' />
                                )}
                            </div>
                        ))}

                        <div className="movies">
                            {heroSection.slice(0, 5).map(movie => (
                                <div className={`new ${current === heroSection.indexOf(movie) ? 'active' : ''}`} key={movie.id}>
                                    <img src={movie.image} alt={movie.title} />
                                </div>
                            ))}
                        </div>
                        <div className="dots">
                            {heroSection.slice(0, 5).map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === current ? 'active' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="currentMovies">
                        <div className="movie-info">
                            {heroSection[current] && (
                                <>
                                    <h1>{heroSection[current].title}</h1>
                                    <h3>Genre: {heroSection[current].genre}</h3>
                                    <p>{heroSection[current].description}</p>
                                </>
                            )}
                        </div>
                    </div>
                <FaArrowRight className='right-arrow' onClick={nextSlide} />
            </div>

            <div className="featured-films">
                <div className="featured-films-buttons">
                    <h2>Featured Films</h2>
                    <Link to="/movies" className="view-all-button">View All</Link>
                </div>
                <div className="featured-films-list">
                    {featuredMovies.map(movie => (
                        <img
                            key={movie.id}
                            src={movie.image}
                            alt={movie.title}
                        />
                    ))}
                </div>
            </div>

            <div className="banner-1">
                <a href="#" className="banner-button">
                    <img src={Banner} alt="Button" />
                </a>
            </div>


            <div className="featured-series">
                <div className="featured-series-buttons">
                    <h2>Featured Series</h2>
                    <Link to="/series" className="view-all-button">View All</Link>
                </div>
                <div className="featured-series-list">
                    {featuredSeries.map(series => (
                        <img
                            key={series.id}
                            src={series.image}
                            alt={series.title}
                        />
                    ))}
                </div>
            </div>

            <div className="banner-2">
                <a href="#" className="banner-button">
                    <img src={Banner2} alt="Button" />
                </a>
            </div>
        </div>
    );
};

export default HomePage;
