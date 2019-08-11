export const actions = {

    THIS_WEEK: "THIS_WEEK",

    GET_CURRENT_WEATHER: "GET_CURRENT_WEATHER",
    GET_CURRENT_WEATHER_SUCCESS: "GET_CURRENT_WEATHER_SUCCESS",
    GET_CURRENT_WEATHER_FAIL: "GET_CURRENT_WEATHER_FAIL",


    CLEAR_USERS_STORE: "CLEAR_USERS_STORE"
};

const defaultState = {
    thisWeek: [],
    showData: [],
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {

        case actions.THIS_WEEK:
            return {
                ...state,
                thisWeek: payload,
            };

        case actions.GET_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                showData: payload.data,
            };
        default:
            return state;
    }
};
