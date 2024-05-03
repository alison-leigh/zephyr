import React, { useState, useEffect } from "react";
import Navigation from "../_components/Navigation.jsx";
import DailyForecastTop from "../_components/DailyForecastTop.jsx";
import DailyForecastBottom from "../_components/DailyForecastBottom";

function Home() {
  // javascript used in page goes up here
  useEffect(() => {
    document.title = "Zephyr | Daily Forecast";
  });

  return (
    // jsx page structure stuff goes here
    <>
      <Navigation />
      <DailyForecastTop/>
        <DailyForecastBottom/>
    </>
  );
}

export default Home;
