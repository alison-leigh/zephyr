import React, { useState, useEffect } from 'react';
import Navigation from "../_components/Navigation.jsx";

function Phases(){
    // javascript used in page goes up here
    useEffect(() => {
            document.title = "Zephyr | Sun & Moon Phases";
        }
    );

    return(
        <Navigation />
        // jsx page structure stuff goes here
    );
}

export default Phases;