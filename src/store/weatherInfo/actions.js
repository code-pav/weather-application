export const EXPAND_STATE = "EXPAND_STATE";

export const setExpandTo = state => {
    return {
        type: EXPAND_STATE,
        payload: state
    };
};
