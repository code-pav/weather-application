import { combineReducers } from "redux";
import { findFormReducer } from "./findForm/reducers";
import { weatherInfoReducer } from "./weatherInfo/reducers";
export default combineReducers({
    findForm: findFormReducer,
    weatherInfo: weatherInfoReducer
});
