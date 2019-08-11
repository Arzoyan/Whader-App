import { call, put, takeLatest } from "redux-saga/effects";
import * as Actions from "./Actions";
import { actions } from "./Reducer";
import AuthApi from "../../../api/AuthApi";

export function* getCurrentWeatherData({ payload }) {
    try {
        const response = yield call(AuthApi.getCurrentWeatherData, payload);
        yield put(Actions.CurrentWeatherDataSucceed(response));
    } catch (error) {
        yield put(Actions.CurrentWeatherDataFail());
    }
}

export function* getWeekWeatherData({ payload }) {
    try {
        const response = yield call(AuthApi.getWeekWeatherData, payload);
        yield put(Actions.weekWeatherSuccess(response));
    } catch (error) {
        yield put(Actions.weekWeatherFail());
    }
}

function* Saga() {
    yield takeLatest(actions.GET_CURRENT_EATHER_DATA, getCurrentWeatherData);
    yield takeLatest(actions.GET_WEEK_EATHER_DATA, getWeekWeatherData);
}

export default Saga;
