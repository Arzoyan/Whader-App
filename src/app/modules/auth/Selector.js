import { createSelector } from "reselect";

const authStoreSelector = (state) => state.Auth;

export const thisWeekSelector = createSelector(
    authStoreSelector, (Auth) => Auth.thisWeek
);

export const showDataSelector = createSelector(
    authStoreSelector, (Auth) => Auth.showData
);

export default state => {
    return {
        thisWeek: thisWeekSelector(state),
        showData: showDataSelector(state),
    };
};
