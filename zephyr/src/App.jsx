import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/forecast" component={ForecastPage} />
                    <Route path="/air-quality" component={AirQualityPage} />
                    <Route path="/map" component={MapPage} />
                    <Route path="/moon-cycle" component={MoonCyclePage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
