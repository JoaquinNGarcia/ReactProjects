import {
    SET_CHECKED_LOGIN,
    SET_CHECKING_LOGIN,
    SET_RESULT_LOGIN,
    SET_USER
} from '../types'

const loginDefault = () => ({
    checkedLogin: false,
    checkingLogin: false,
    result: false,
    user: JSON.parse(localStorage.getItem('login-data')) ? JSON.parse(localStorage.getItem('login-data')) : {}
});

export default function loginReducer(state = loginDefault(), {type, payload}) {
    switch(type) {
        case SET_CHECKED_LOGIN: return { ...state, checkedLogin: payload };
        case SET_CHECKING_LOGIN: return { ...state, checkingLogin: payload };
        case SET_RESULT_LOGIN: return { ...state, result: payload };
        case SET_USER: return { ...state, user: payload };
        default: return state;
    }
}
