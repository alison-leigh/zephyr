import React from "react";
import { Link } from "react-router-dom";
import '../styles/AirQuality.css';
import { Textarea } from "@lemonsqueezy/wedges";


function Card_AirQuality(){
    return (
        <div className="div-2">
            <div className="left">
                <div className="text-wrapper-3">Air Quality Score</div>
                <div className="air-quality-card">
                    <div className="text-wrapper-4">69</div>
                    <div className="text-wrapper-5">Good</div>
            </div>
        </div>
            <div className="right">
                <Textarea />

                <div className="text-wrapper-5">Marietta, GA</div>
                <div className="text-wrapper-6">Atlanta Reporting Area</div>
            </div>
        </div>
    );
}

export default Card_AirQuality;