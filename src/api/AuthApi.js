import axios from "axios";
import { API_URL, API_KEY } from "../configs/constants";

export default class AuthApi {
    static getCurrentWeather(data) {
        return axios.request({
            url: `${API_URL}?q=London,uk&APPID=${API_KEY}`,
            method: "GET",
        });
    }
}
