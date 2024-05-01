import React from 'react';
import ForecastListItem from '../_components/ForecastListItem';

const ForecastList = ({ forecastData }) => (
  <ul>
    {forecastData.map((item, index) => (
      <ForecastListItem key={index} {...{item}} />
    ))}
  </ul>
);

export default ForecastList;