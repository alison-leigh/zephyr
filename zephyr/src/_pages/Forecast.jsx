import React, { useState, useEffect } from 'react';
import Navigation from "../_components/Navigation.jsx";
import Heading from '../_components/Heading.jsx';
import ForecastList from '../_components/ForecastList.jsx';
import ForecastLarge from '../_components/ForecastLarge.jsx';


// import ForecastListItem from '../_components/ForecastListItem.jsx';


function Forecast(){


    useEffect(() => {
            document.title = "Zephyr | 10 Day Forecast";            
        });
    return(
        <>
            <Navigation />
            <div className='container my-1 p-5 bg-body rounded'>
                <Heading title='Weekly Forecast'/>
                <ForecastLarge/>

                  <ForecastList/>
            </div>
            
        </>

        
    );
}

export default Forecast;