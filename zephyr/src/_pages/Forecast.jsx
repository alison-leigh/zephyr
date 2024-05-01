import React, { useState, useEffect } from 'react';
import Navigation from "../_components/Navigation.jsx";
import Heading from '../_components/Heading.jsx';
import ForecastList from '../_components/ForecastList.jsx';
import ForecastListItem from '../_components/ForecastListItem.jsx';




function Forecast(){

    const [forecastData, setForecastData] = useState([]);
    useEffect(() => {
            document.title = "Zephyr | 10 Day Forecast";

            const fetchData = async () => {
                const response = await fetch(`https://api.weather.gov/points/39.7456,-97.0892`);
                const data = await response.json();
                setForecastData(data);
              };
          
              fetchData();

        }, []);
    return(
        <>
            <Navigation />
            <div className='container my-5 p-5 bg-body'>
                <Heading title='10 Day Weather'/>
                <div className=''>
                    <div>
                        <span>Day 8</span> <span>|</span> <span>Evening</span>
                    </div>
                    <div >
                        <div className='col-6'>75</div>
                        <div className='col-6'>Illustration</div>
                    </div>
                    <div>
                        <div>Partly cloudly</div>
                        <div className='row row-cols-1 row-cols-sm-2 m-3 p-3 border'>
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='d-flex row row-cols-auto justify-content-between p-4 border-bottom'>
                        <div className='flex-shrink-0 d-flex'>
                            <div className='flex-shrink-0 p-1'>Day 1</div>
                            <div className='flex-shrink-0 p-1'><span>High/Low</span></div>
                            <div className='flex-shrink-0 p-1'>Illustration <span>label</span></div>
                        </div>
                        <div className='flex-shrink-0 d-flex'>
                            <div className='flex-shrink-0 p-1'>20%</div>
                            <div className='flex-shrink-0 p-1'>W 100 mph</div>
                        </div>
                    </div>
                </div>
            {/* <ForecastList forecastData={forecastData} /> */}
            </div>
        </>
        // jsx page structure stuff goes here
        
    );
}

export default Forecast;