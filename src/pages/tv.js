import React, { useState, useEffect } from "react";
import './css/tv.css'

const Series = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetch('https://framemedia-backend.onrender.com/series')
            .then(response => response.json())
            .then(data => {
                setSeries(data);
            })
            .catch(error => console.error('Error fetching series:', error));
    }, []);

    const splitSeries = (series) => {
        const dividedSeries = [];

        for (let i = 0; i < series.length; i += 4) {
            dividedSeries.push(series.slice(i, i + 4));
        }

        return dividedSeries;
    };

    const dividedSeries = splitSeries(series);

    return (
        <div className="series">
            {dividedSeries.map((seriesGroup, index) => (
                <div key={index} className="serie-row">
                    {seriesGroup.map(series => (
                        <div key={series.id} className="serie-div">
                            <a href={`/series/${series.id}`} key={series.id} className="serie-link">
                                <button className="serie-button">
                                    <img src={series.image} alt={series.title} />
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};


export default Series;