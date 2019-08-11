import { actions } from "./Reducer";

export function thisWeek(data) {
    return { type: actions.THIS_WEEK, payload: data };
}

export function getCurrentWeather(data = null) {
    return { type: actions.GET_CURRENT_WEATHER, payload: data };
}

export function getCurrentWeatherSuccess(data) {
    return { type: actions.GET_CURRENT_WEATHER_SUCCESS, payload: data };
}

export function getCurrentWeatherFail() {
    return { type: actions.GET_CURRENT_WEATHER_FAIL };
}