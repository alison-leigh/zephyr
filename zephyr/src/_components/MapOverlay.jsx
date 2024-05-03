import React from "react";

const MapOverlay = ()=> {

    return (
        <div className="position-absolute bottom-0 start-20 m-3 p-3 bg-body-tertiary shadow rounded">
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="frame-3">
                    <div className="text-wrapper-1"><span className="fw-bold">Day 08</span> | Evening</div>
                  </div>
                  <div className="frame-4">
                    <span className="text-wrapper-5">75° <img src="cloudy.png" alt="" style={{width: "40px"}}/></span>
                  </div>
                  <div className="text-wrapper-6">Partly cloudy</div>
                </div>
              </div>
            </div>
    )
};

export default MapOverlay