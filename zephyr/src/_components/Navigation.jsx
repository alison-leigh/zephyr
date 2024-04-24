import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return (
        <nav id="navBar">
            <span className="logo">
                <Link to="/">
                    <span>zephyr logo here</span>
                </Link>
            </span>
            <span className="menu">
                <Link to="/forecast">
                    <span>about</span>
                </Link>
            </span>
            <span className="menu">
                <Link to="/tech">
                <span>tech</span>
                </Link>
            </span>
            <span className="menu">
                <Link to="/resources">
                <span>resources</span>
                </Link>
            </span>
            <span className="menu">
                <Link to="/courses">
                <span>courses</span>
                </Link>
            </span>
            <span className="menu">
                <Link to="/projects">
                <span>projects</span>
                </Link>
            </span>
            <span className="menu">
                <Link to="/contact">
                <span>contact</span>
                </Link>
            </span>
        </nav>
    );
}

export default Navigation;