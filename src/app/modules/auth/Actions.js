import { actions } from "./Reducer";

export function getUser(data = null) {
    console.log(data)
    return { type: actions.GET_USER, payload: data };
}