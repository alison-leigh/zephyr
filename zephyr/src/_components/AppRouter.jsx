import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "../_pages/Home.jsx";
import AirQuality from "../_pages/AirQuality.jsx";
import Forecast from "../_pages/Forecast.jsx";
import Map from "../_pages/Map.jsx";
import Phases from "../_pages/Phases.jsx";


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"             element={<Home />} />
                <Route path="/daily"             element={<Home />} />
                <Route path="/10day"         element={<Forecast />} />
                <Route path="/aq"        element={<AirQuality />} />
                <Route path="/map"        element={<Map />} />
                <Route path="/phases"        element={<Phases />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;