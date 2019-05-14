import {
    GET_WEATER_FROM_API,
    CHANGE_CITY_NAME,
    WRONG_REQUEST_ACTION
} from "./actions";
const initialState = {
    city: "Kiev",
    wrongRequest: false,
    weather: {}
};

export const findFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY_NAME: {
            return { ...state, city: action.payload };
        }
        case GET_WEATER_FROM_API: {
            return {
                ...state,
                weather: action.payload.weather
            };
        }
        case WRONG_REQUEST_ACTION: {
            return {
                ...state,
                wrongRequest: action.payload.wrongRequest
            };
        }
        default:
            return state;
    }
};
