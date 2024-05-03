import React from "react";
import { Link } from "react-router-dom";
import "../styles/AirQuality.css";
import Heading from "./Heading";
import { Input } from "@lemonsqueezy/wedges";

function Card_AirQuality() {
  return (
    <>
      <Heading title={"Air Quality Score"}/>
      <div className="row row-cols-1 d-flex align-items-center">
          <Input label="Location" placeholder="Zip Code, City, or State" helperText="Find the AQ of any region" />
        <div className="col-2 mx-auto ">
          <div className="rounded p-4 bg-success text-center">
            <div className="display-1 fw-bold text-white">79</div>
            <div className="display-5 fw-semibold text-white">Good</div>
          </div>
          <div className="my-2">
              <h3 className="h5">Kennsaw, GA</h3>
              
              <div className="">Atlanta Reporting Area</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card_AirQuality;
