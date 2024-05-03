import React, { useState, useEffect } from "react";
import CurrentDateData from "../_components/CurrentDate.jsx";
import TimeDisplay from "./TimeDisplay.jsx";

const DailyForecastTop = () => {
    const [locationforecastData, setLocationForecastData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const currentLocation = "Kennesaw, GA";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationResponse = await fetch(
                    "https://api.weather.gov/gridpoints/FFC/43,99"
                );
                const forecastResponse = await fetch(
                    "https://api.weather.gov/gridpoints/FFC/43,99/forecast"
                );

                if (!locationResponse.ok || !forecastResponse.ok) {
                    throw new Error("Network response was not ok");
                }

                const locationData = await locationResponse.json();
                const forecastData = await forecastResponse.json();

                setLocationForecastData(locationData);
                setForecastData(forecastData);
            } catch (error) {
                console.error(
                    "There has been a problem with your fetch operation:",
                    error
                );
            }
        };

        fetchData();
    }, []);


    if (!locationforecastData || !forecastData) {
        return <p>Loading...</p>;
    }

    return(
        <>
        <div className="container d-flex justify-content-between align-items-center rounded-top mt-1 homeLocationBar"><span>{currentLocation}</span> <span> <TimeDisplay /> </span></div>
        <div className="container p-5 bg-body rounded-bottom">
            <div className="row">
                <div className="col-8 d-flex flex-column">
                    <span className="bigTemp">{forecastData.properties.periods[0].temperature}&deg;F</span>
                    <span className="bigWeatherDesc">Partly Cloudy</span>
                    <div className="bigHiLo"><span>High {forecastData.properties.periods[0].temperature}&deg;F</span><span>Low 57&deg;F</span></div>
                </div>
                <div className="col-4">
                    <img className="bigWeather" src="cloudy.png"/>
                </div>
            </div>
        </div>
        </>
    )
};

export default DailyForecastTop;