import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './css/serieDetails.css';

const SerieDetails = () => { 
    const { id } = useParams();
    const [serieDetails, setSerieDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/series/${id}`)
            .then(response => response.json())
            .then(data => {
                setSerieDetails(data);
            })
            .catch(error => console.error('Error fetching serie details:', error));
    }, [id]);


    if (!serieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="serie-details">
            <div className="serie-poster">
                <img src={serieDetails.image} alt={serieDetails.title} />
            </div>

            <div className="serie-synopsis">
                <h1>{serieDetails.title}</h1>
                <p>{serieDetails.genre} | {serieDetails.year}</p>

                <div className="serie-buttons">
                    <button>Trailer</button>
                    <button>Add List</button>
                    <button>Redeem</button>
                </div>

                <p>{serieDetails.description}</p>

                <div className="serie-purchase">
                    <button>Rent {serieDetails.price_rent}</button>
                    <button>Buy {serieDetails.price_sale}</button>
                </div>
            </div>

            <div className={`animation-poster`}>
                <img src={serieDetails.image} alt={serieDetails.title} />
            </div>

        </div>
    );
};

export default SerieDetails; 
