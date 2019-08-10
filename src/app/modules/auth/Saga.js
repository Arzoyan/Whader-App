import { call, put, takeLatest } from "redux-saga/effects";
import * as Actions from "./Actions";
import { actions } from "./Reducer";
import AuthApi from "../../../api/AuthApi";

export function* getUser({ payload }) {
    console.log("gagoooo")
    try {
        const response = yield call(AuthApi.getUser, payload);
        // yield put(Actions.getUserSuccess(response.data));
        console.log("gagoooo666699")

    } catch (error) {
        // yield put(Actions.getUserFail());
        console.log("magoooo")
    }
}

function* Saga() {
    yield takeLatest(actions.GET_USER, getUser);
}

export default Saga;
