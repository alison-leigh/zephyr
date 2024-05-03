import React, { useState, useEffect } from "react";
import Navigation from "../_components/Navigation.jsx";

function Home() {
  // javascript used in page goes up here

  useEffect(() => {
    document.title = "Zephyr | Daily Forecast";
  });

  return (
    // jsx page structure stuff goes here
    <>
      <Navigation />
      <div className="contentContainer"></div>
    </>
  );
}

export default Home;
