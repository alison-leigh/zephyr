import React from "react";

const MapOverlay = ()=> {

    return (
        <div className="position-absolute bottom-0 start-0 m-3 p-3 bg-body-tertiary shadow rounded">
              <div className="text-wrapper-2">Regional Map</div>
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="frame-3">
                    <div className="text-wrapper-3">Day 08 |</div>
                    <div className="display-1 fw-bold">Evening</div>
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-5">75°</div>
                  </div>
                  <div className="text-wrapper-6">Partly cloudy</div>
                </div>
              </div>
            </div>
    )
};

export default MapOverlay