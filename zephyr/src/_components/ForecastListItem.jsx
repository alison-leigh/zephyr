import React, { useState, useEffect } from "react";

const ForecastListItem = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.weather.gov/gridpoints/FFC/43,99/forecast"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Assuming the data structure is correct and contains 'high' and 'low' fields
        setForecastData(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchData();
  }, []);

  if (!forecastData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* take the data's array and remove today's date, then map over the array */}
      {forecastData.properties.periods.slice(1).map((period, index) => (
        <div
          key={index}
          className="d-flex row row-cols-auto justify-content-between p-4 border-bottom"
        >
          <div className="flex-shrink-0 d-flex-wrap align-items-baseline">
            <div className="flex-shrink-0 p-1">{period.name}</div>
            <div className="flex-shrink-0 p-1">
              <span className="fs-3 fw-bold">{period.temperature}°</span>
              <sup className="fs-6">{period.temperatureUnit}</sup>
            </div>
            <div className="flex-shrink-0 p-1">
              <h3 className="h5 text-secondary">{period.shortForecast}</h3>
            </div>
          </div>
          <div className="flex-shrink-0 d-flex align-self-end align-items-baseline">
            <div className="flex-shrink-0 p-1 h4">
              <h3 className="d-inline h6 text-secondary">Humidity</h3>{" "}
              {period.relativeHumidity.value}%
            </div>
            <div className="flex-shrink-0 p-1">
              {period.windSpeed} {period.windDirection}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastListItem;
