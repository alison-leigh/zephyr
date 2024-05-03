import React, { useState, useEffect } from "react";
import ForecastListItem from "./ForecastListItem";

const ForecastList = () => {
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

  const dayIndex = 2;

  return (
    <div>
      {forecastData ? (
        <ForecastListItem/>
        // <div className="d-flex row row-cols-auto justify-content-between p-4 border-bottom">
        //   <div className="flex-shrink-0 d-flex align-items-baseline">
        //     <div className="flex-shrink-0 p-1">
        //       {forecastData.properties.periods[dayIndex].name}
        //     </div>
        //     <div className="flex-shrink-0 p-1">
        //       <span className="fs-3 fw-bold">
        //         {forecastData.properties.periods[dayIndex].temperature}°
        //       </span>
        //       <sup className="fs-6">
        //         {forecastData.properties.periods[dayIndex].temperatureUnit}
        //       </sup>
        //     </div>
        //     <div className="flex-shrink-0 p-1">
        //       {" "}
        //       <span>
        //         {forecastData.properties.periods[dayIndex].shortForecast}
        //       </span>
        //     </div>
        //   </div>
        //   <div className="flex-shrink-0 d-flex align-items-baseline">
        //     <div className="flex-shrink-0 p-1 h4">
        //       <h3 className="d-inline h6 text-secondary">Humidity</h3>{" "}
        //       {forecastData.properties.periods[dayIndex].relativeHumidity.value}
        //       %
        //     </div>
        //     <div className="flex-shrink-0 p-1">
        //       {forecastData.properties.periods[dayIndex].windSpeed}{" "}
        //       {forecastData.properties.periods[dayIndex].windDirection}
        //     </div>
        //   </div>
        // </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ForecastList;
