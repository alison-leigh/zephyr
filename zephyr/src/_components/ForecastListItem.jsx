import React from 'react';

const ForecastListItem = ({ day, temp, description }) => (
  <li>
    <h3>{day}</h3>
    <p>Temperature: {temp}°C</p>
    <p>Description: {description}</p>
  </li>
);

export default ForecastListItem;