import React from "react";
import "../styles/App.css";
import FindFormContainer from "./findForm/FindFormContainer";
import WeatherInfoContainer from "./weatherInfo/WeatherInfoContainer";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>Weather Forecast Worldwide!</h1>
                <FindFormContainer />
                <WeatherInfoContainer />
            </div>
        );
    }
}

export default App;
