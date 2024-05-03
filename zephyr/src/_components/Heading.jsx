import React, { useState, useEffect } from "react";
import UserLocation from "./UserLocation";
import TimeDisplay from "./TimeDisplay";


const Heading = ({ title }) => {
  if (!title) {
    return <h1>Title Placeholder</h1>;
  }

  return (
    <div className="container py-4 bg-body">
      <h1 className="d-inline-block fw-bold fs-1">{title}</h1>
      <div className="d-inline mx-1 fs-4 text-secondary"> • Kennesaw, Georgia
      <UserLocation/>
      
      </div>
      <span className="text-secondary"><TimeDisplay/></span>
    </div>
  );
};

export default Heading;
