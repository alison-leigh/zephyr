import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric');
                setWeather(response.data);
                setLoading(false);
            } catch (error) {
                setError('Unable to fetch weather data');
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Current Weather</h1>
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].main}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default HomePage;
