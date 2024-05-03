import React, { useState, useEffect } from "react";
import CurrentDateData from "../_components/CurrentDate.jsx";

const ForecastLarge = () => {
  const [locationforecastData, setLocationForecastData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

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

  return (
    <div>
      <div className="p-5 row row row-cols-2">
        <div className="flex-shrink-0 p-1">
          <span className="text-body-tertiary">
            {locationforecastData.properties.updateTime}
          </span>
          <CurrentDateData />
          {forecastData.properties.periods[0].name}
          <h3 className="text-primary pt-5">
            <span className="fs-1 fw-bold">
              {forecastData.properties.periods[0].temperature}°
            </span>
            <sup className="fs-4">
              {forecastData.properties.periods[0].temperatureUnit}
            </sup>
          </h3>
          <h3>
            <sup className="fs-5 text-secondary-emphasis">
              {forecastData.properties.periods[0].shortForecast}
            </sup>
          </h3>
        </div>
      </div>
      <div className="container">
        <h2 className="h5 text-body-tertiary mx-4">Details</h2>
        <div className="row row-cols-1 row-cols-sm-2 p-3 border rounded">
          <div className="col">
            <div className="p-3">
              <h3 className="d-inline h6 text-secondary">
                Humidity{" "}
                {forecastData.properties.periods[0].relativeHumidity.value}%
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h3 className="d-inline h6 text-secondary">
                Wind {forecastData.properties.periods[0].windSpeed}{" "}
                {forecastData.properties.periods[0].windDirection}
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h3 className="d-inline h6 text-secondary">
                Heat Index{" "}
                {locationforecastData.properties.heatIndex.values[0].value}{" "}
                {"°"}C
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h3 className="d-inline h6 text-secondary">
                Dewpoint{" "}
                {locationforecastData.properties.dewpoint.values[0].value}{" "}
                {"°"}C
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastLarge;
