import { USER_LOGIN, USER_LOGOUT } from "./logintype";

const initialState = {
    loginuser: {}
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loginuser: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                loginuser: action.payload
            }
        default: return state;
    }
}

export default loginReducer;