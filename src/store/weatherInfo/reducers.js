import { EXPAND_STATE } from "./actions";

const initialState = {
    expand: false
};

export const weatherInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXPAND_STATE: {
            return { ...state, expand: action.payload };
        }
        default:
            return state;
    }
};
