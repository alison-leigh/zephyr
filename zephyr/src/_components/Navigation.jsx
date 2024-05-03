import React from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
  return (
    <nav id="navBar" className="navbar container bg-body rounded">
    {/* site id */}
      <div className="navbar-brand mx-2">
        <span className="logo">
          <Link to="/">
            <img src="zephyr.svg" id="logoImg" />
          </Link>
        </span>
      </div>
    {/* links */}
      <div className="d-flex ">
        <span className="">
          <Link className="text-decoration-none p-3 m-1 text-black fw-semibold" to="/daily">
            <span >Daily Forecast</span>
          </Link>
        </span>
        <span className="">
          <Link className="text-decoration-none p-3 m-1 text-black fw-semibold" to="/weekly-forecast">
            <span>Weekly Forecast</span>
          </Link>
        </span>
        <span className="">
          <Link className="text-decoration-none p-3 m-1 text-black fw-semibold" to="/aq">
            <span>Air Quality</span>
          </Link>
        </span>
        <span className="">
          <Link className="text-decoration-none p-3 m-1 text-black fw-semibold" to="/map">
            <span>Map</span>
          </Link>
        </span>
        <span className="">
          <Link className="text-decoration-none p-3 m-1 text-black fw-semibold" to="/phases">
            <span>Sun/Moon Phases</span>
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Navigation;
