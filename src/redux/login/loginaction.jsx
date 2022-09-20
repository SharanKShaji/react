import { USER_LOGIN, USER_LOGOUT } from "./logintype"


export const userLogin = (user) => {
    return {
        type: USER_LOGIN,
        payload: user
    }
}
export const userLogout = () => {
    return {
        type: USER_LOGOUT,
        payload: {}
    }
}