import React, { useState, useEffect } from 'react';
import Navigation from "../_components/Navigation.jsx";
import MoonPhase from "../_components/MoonPhase.jsx";

function Phases(){
    // javascript used in page goes up here
    useEffect(() => {
            document.title = "Zephyr | Sun & Moon Phases";
        }
    );

    return(
        <>
            <Navigation />
            <MoonPhase />
        </>
    );
}

export default Phases;