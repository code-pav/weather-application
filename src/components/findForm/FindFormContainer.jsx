import React from "react";
import FindForm from "./FindForm";
import { connect } from "react-redux";

import {
    setCityName,
    setWeater,
    wrongRequestAction
} from "../../store/findForm/actions";
import { setExpandTo } from "../../store/weatherInfo/actions";

class FindFormContainer extends React.Component {
    render() {
        return (
            <FindForm
                city={this.props.city}
                previousCity={this.props.previousCity}
                wrongRequest={this.props.wrongRequest}
                expand={this.props.expand}
                setCityName={this.props.setCityName}
                setWeater={this.props.setWeater}
                setExpandTo={this.props.setExpandTo}
                setWrongRequest={this.props.wrongRequestAction}
            />
        );
    }
}
const putStateToProps = state => {
    return {
        city: state.findForm.city,
        wrongRequest: state.findForm.wrongRequest,
        expand: state.weatherInfo.expand,
        previousCity: state.findForm.weather.city
    };
};

const putActionToProps = {
    setCityName,
    setWeater,
    wrongRequestAction,
    setExpandTo
};

export default connect(
    putStateToProps,
    putActionToProps
)(FindFormContainer);
