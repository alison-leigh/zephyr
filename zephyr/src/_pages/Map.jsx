import React, { useState, useEffect } from "react";
import Navigation from "../_components/Navigation.jsx";
import MapWithOverlay from "../_components/MapWithOverlay.jsx";

function Map() {
  useEffect(() => {
    document.title = "Zephyr | Regional Map";
  }, []);

  return (
    <div className="">
      <Navigation className="navbar-instance" />

      <div className="bg-body container rounded pb-4">
        <h1 className="container mt-1">Regional Map</h1>
        <MapWithOverlay/>
      </div>
    </div>
  );
}

export default Map;
