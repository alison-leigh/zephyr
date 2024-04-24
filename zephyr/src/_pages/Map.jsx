import React, { useState, useEffect } from 'react';
import Navigation from "../_components/Navigation.jsx";

function Map(){
    // javascript used in page goes up here
    useEffect(() => {
            document.title = "Zephyr | Map";
        }
    );

    return(
        <Navigation />
        // jsx page structure stuff goes here
    );
}

export default Map;