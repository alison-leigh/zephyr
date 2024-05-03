import React, { useState, useEffect } from "react";
import Navigation from "../_components/Navigation.jsx";


function Map() {
    
    useEffect(() => {
        document.title = "Zephyr | Regional Map";
    }, []); 

    return (
        <div className="map">
            <div className="container-wrapper">
                <div className="container">
                    <div className="frame">
                        <Navbar className="navbar-instance" icon={<Mark className="mark-instance" />} />
                        <div className="div">
                            <div className="text-wrapper-2">Regional Map</div>
                            <div className="frame-wrapper">
                                <div className="frame-2">
                                    <div className="frame-3">
                                        <div className="text-wrapper-3">Day 08 |</div>
                                        <div className="text-wrapper-4">Evening</div>
                                    </div>
                                    <div className="frame-4">
                                        <div className="text-wrapper-5">75°</div>
                                        <Sunny className="icon-sunny" />
                                    </div>
                                    <div className="text-wrapper-6">Partly cloudy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map; 
