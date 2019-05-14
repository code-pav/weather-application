export const GET_WEATER_FROM_API = "GET_WEATER_FROM_API";
export const CHANGE_CITY_NAME = "CHANGE_CITY_NAME";
export const WRONG_REQUEST_ACTION = "WRONG_REQUEST_ACTION";

export const setWeater = weatherObject => {
    return {
        type: GET_WEATER_FROM_API,
        payload: weatherObject
    };
};
export const setCityName = name => {
    return {
        type: CHANGE_CITY_NAME,
        payload: name
    };
};
export const wrongRequestAction = res => {
    return {
        type: WRONG_REQUEST_ACTION,
        payload: res
    };
};
