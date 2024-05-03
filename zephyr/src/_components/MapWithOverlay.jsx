import React from "react";
import GoogleMap from "./GoogleMap.jsx";
import MapOverlay from "./MapOverlay.jsx";

const MapWithOverlay = ()=>{

    return(
        <div className="container-fluid d-flex" style={{ height: "80svh" }}>
        <div className="flex-grow-1">
          <GoogleMap />
          <MapOverlay/>
        </div>
      </div>
    )
};

export default MapWithOverlay