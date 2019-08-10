export const actions = {
    GET_USER: "GET_USER",
    GET_USER_SUCCESS: "GET_USER_SUCCESS",
    GET_USER_FAIL: "GET_USER_FAIL",


    CLEAR_USERS_STORE: "CLEAR_USERS_STORE"
};

const defaultState = {
    thisWeek: null
  };

export default (state = defaultState, {type, payload}) => {
    switch (type) {
             case actions.GET_USER_SUCCESS:
            return {
                ...state,
                authFetching: false,
                user: payload,
            };
        default:
            return state;
    }
};
