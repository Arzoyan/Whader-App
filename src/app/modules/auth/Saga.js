import { call, put, takeLatest } from "redux-saga/effects";
import * as Actions from "./Actions";
import { actions } from "./Reducer";
import AuthApi from "../../../api/AuthApi";

export function* getCurrentWeather({ payload }) {
    try {
        const response = yield call(AuthApi.getCurrentWeather, payload);
        yield put(Actions.getCurrentWeatherSuccess(response));
    } catch (error) {
        yield put(Actions.getCurrentWeatherFail());
    }
}

function* Saga() {
    yield takeLatest(actions.GET_CURRENT_WEATHER, getCurrentWeather);
}

export default Saga;
