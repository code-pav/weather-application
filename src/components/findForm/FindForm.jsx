import React from "react";
import { getWeatherFromApi } from "../../api/weaterGetter";
class FindForm extends React.Component {
    constructor(props) {
        super(props);

        this.setCity = this.setCity.bind(this);
        this.setWeater = this.setWeater.bind(this);
    }
    setWeater() {
        getWeatherFromApi(this.props.city).then(response => {
            if (!this.props.expand) {
                this.props.setExpandTo(true);
            } else {
                if (this.props.city === this.props.previousCity) {
                    this.props.setExpandTo(false);
                }
            }

            if (response.wrongRequest) {
                this.props.setExpandTo(false);
            }

            if (!response.wrongRequest) {
                this.props.setWeater(response);
                this.props.setWrongRequest({ wrongRequest: false });
            } else {
                this.props.setWrongRequest(response);
            }
        });
    }

    setCity(event) {
        this.props.setCityName(event.target.value);
    }

    hadleButtonText() {
        return this.props.expand ? "Hide weather" : "Get weather";
    }

    handleTextFieldOnError() {
        return this.props.wrongRequest ? "invalid" : "valid";
    }
    render() {
        return (
            <div className="find">
                <form onSubmit={event => event.preventDefault()}>
                    <input
                        type="text"
                        value={this.props.city}
                        onChange={this.setCity}
                        className={this.handleTextFieldOnError()}
                    />
                    <button onClick={this.setWeater}>
                        {this.hadleButtonText()}
                    </button>
                </form>
            </div>
        );
    }
}

export default FindForm;
