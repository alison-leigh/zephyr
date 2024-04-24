import React from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css';

function Navigation(){
    return (
        <nav id="navBar">
            <span className="logo">
                <Link to="/">
                    <img src="zephyr.svg" id="logoImg" />
                </Link>
            </span>
            <span className="navRight">
            <span className="navItem">
                <Link to="/daily">
                    <span>Daily Forecast</span>
                </Link>
            </span>
            <span className="navItem">
                <Link to="/10day">
                <span>10-day</span>
                </Link>
            </span>
            <span className="navItem">
                <Link to="/aq">
                <span>Air Quality</span>
                </Link>
            </span>
            <span className="navItem">
                <Link to="/map">
                <span>Map</span>
                </Link>
            </span>
            <span className="navItem">
                <Link to="/phases">
                <span>Sun/Moon Phases</span>
                </Link>
            </span>
            </span>
        </nav>
    );
}

export default Navigation;