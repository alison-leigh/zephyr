import React, { useState, useEffect } from "react";
import CurrentDateData from "../_components/CurrentDate.jsx";
import TimeDisplay from "./TimeDisplay.jsx";

const DailyForecastBottom = () => {
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

            <div className="container p-3 mt-4 bg-body rounded">
               <h2 className="h5">Today's Forecast for {currentLocation}</h2>
                <div className="dailyForecastList">
                    <div className="row dailyForecastGridItem"><span className="col dailyForecastTime">Morning</span><span className="col dailyForecastTemp">57&deg;F</span><span className="col"><img className="smallWeather" src="cloudy.png"/> </span><span className="col">--</span></div>
                    <div className="row dailyForecastGridItem"><span className="col dailyForecastTime">Afternoon</span><span className="col dailyForecastTemp">{forecastData.properties.periods[0].temperature}&deg;F</span><span className="col"><img className="smallWeather" src="cloudy.png"/></span><span className="col">--</span></div>
                    <div className="row dailyForecastGridItem"><span className="col fw-bold dailyForecastTime">Evening</span><span className="col dailyForecastTemp">{forecastData.properties.periods[0].temperature}&deg;F</span><span className="col"><img className="smallWeather" src="cloudy.png"/></span><span className="col">15%</span></div>
                    <div className="row dailyForecastGridItem"><span className="col dailyForecastTime">Overnight</span><span className="col dailyForecastTemp">57&deg;F</span><span className="col"><img className="smallWeather" src="cloudy.png"/></span><span className="col">--</span></div>
                </div>
            </div>
        </>
    )
};

export default DailyForecastBottom;