import axios from "axios";
import { API_URL } from "../configs/constants";

export default class AuthApi {
    static getUser() {

        console.log("hamballllllllllllllllll")
        return axios.request({
            url: `${API_URL}/api/users/me`,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            withToken: true,
        });
    }
}
