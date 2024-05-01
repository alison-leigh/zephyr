import React, { useState, useEffect } from 'react';
import Navigation from "../_components/Navigation.jsx";
import Heading from '../_components/Heading.jsx';

function Forecast(){
    // javascript used in page goes up here
    useEffect(() => {
            document.title = "Zephyr | 10 Day Forecast";
        }
    );
    return(
        <>
            <Navigation />
            <div className='container bg-body-'>
                <Heading title='10 Day Weather'/>
            </div>
        </>
        // jsx page structure stuff goes here
        
    );
}

export default Forecast;