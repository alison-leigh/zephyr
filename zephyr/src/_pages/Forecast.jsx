import React, { useState, useEffect } from 'react';
import Navigation from "../_components/Navigation.jsx";

function Forecast(){
    // javascript used in page goes up here
    useEffect(() => {
            document.title = "Zephyr | 10 Day Forecast";
        }
    );
    return(
        <Navigation />
        // jsx page structure stuff goes here
    );
}

export default Forecast;