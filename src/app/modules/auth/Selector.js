import {createSelector} from "reselect";

const authStoreSelector = (state) => state.Auth;

export const userSelector = createSelector(
    authStoreSelector, (Auth) => Auth.user
);

export default state => {
    return {
        user: userSelector(state),
    };
};
