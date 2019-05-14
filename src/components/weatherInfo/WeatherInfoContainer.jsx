import React from "react";
import WeatherInfo from "./WeatherInfo";
import { connect } from "react-redux";

class WeatherInfoContainer extends React.Component {
    render() {
        return (
            <WeatherInfo
                weather={this.props.weather}
                expand={this.props.expand}
            />
        );
    }
}

const putStateToProps = state => {
    return {
        weather: state.findForm.weather,
        expand: state.weatherInfo.expand
    };
};

const putActionToProps = {};

export default connect(
    putStateToProps,
    putActionToProps
)(WeatherInfoContainer);
