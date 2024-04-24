import React, { useState, useEffect } from 'react';
import Navigation from "../_components/Navigation.jsx";

function AirQuality(){
    // javascript used in page goes up here

    useEffect(() => {
            document.title = "Zephyr | Air Quality";
        }
    );

    return(
        <Navigation />
        // jsx page structure stuff goes here
    );
}

export default AirQuality;