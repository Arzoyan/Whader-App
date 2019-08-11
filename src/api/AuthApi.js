import axios from "axios";
import { API_URL, API_KEY } from "../configs/constants";

export default class AuthApi {
    static getCurrentWeatherData(data) {
        return axios.request({
            url: `${API_URL.CURRENT}?q=${data}&APPID=${API_KEY}`,
            method: "GET",
        });
    }

    static getWeekWeatherData(data) {
        return axios.request({
            url: `${API_URL.WEEK}?q=${data}&APPID=${API_KEY}`,
            method: "GET",
        });
    }


}
