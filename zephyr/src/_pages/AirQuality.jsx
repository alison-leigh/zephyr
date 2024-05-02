import React, { useState, useEffect } from 'react';
import Navigation from "../_components/Navigation.jsx";
import Card_AirQuality from '../_components/Card_AirQuality.jsx';


function AirQuality(){
    // javascript used in page goes up here

    useEffect(() => {
            document.title = "Zephyr | Air Quality";
        }
    );

  return (
    <div className="contentContainer">
      <Navigation />
      <Card_AirQuality />
      </div>
  );
};

export default AirQuality;