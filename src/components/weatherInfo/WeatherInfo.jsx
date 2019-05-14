import React from "react";
import { expandElement, collapseElement } from "../../api/elementExpander";

// move to const version?
class WeatherInfo extends React.Component {
    render() {
        const {
            city = "Unknown",
            temp = "0",
            rain = { description: "No info" },
            wind = { speed: 0 }
        } = this.props.weather;

        this.props.expand
            ? expandElement(document.querySelector(".info"))
            : collapseElement(document.querySelector(".info"));

        return (
            <div className="info">
                <div className="location">
                    <span aria-label="loc" role="img">
                        🌎
                    </span>
                    <p>Location:</p> <span>{city}</span>
                </div>
                <div className="temperature">
                    <span aria-label="temp" role="img">
                        🌡️ &nbsp;
                    </span>
                    <p>Temperature :</p> <span>{Math.round(temp)}°С</span>
                </div>
                <div className="rain">
                    <span aria-label="rain" role="img">
                        ☁️
                    </span>
                    <p>Rain:</p>{" "}
                    <span>
                        {rain.description &&
                            rain.description[0].toUpperCase() +
                                rain.description.slice(1)}
                    </span>
                </div>
                <div className="wind">
                    <span aria-label="wind" role="img">
                        🌬️
                    </span>
                    <p>Wind:</p> <span>{wind.speed} m/s</span>
                </div>
            </div>
        );
    }
}
export default WeatherInfo;
