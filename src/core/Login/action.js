import {
    LOGIN_VALIDATE,
    LOGOUT,
    SET_CHECKED_LOGIN,
    SET_CHECKING_LOGIN,
    SET_RESULT_LOGIN,
    SET_USER
} from '../types'

export const logout = () => ({
    type: LOGOUT
});

export const setCheckedLogin = payload => ({
    payload,
    type: SET_CHECKED_LOGIN
});

export const setCheckingLogin = payload => ({
    payload,
    type: SET_CHECKING_LOGIN
});

export const setLoginValidate = payload => ({
    payload,
    type: LOGIN_VALIDATE
});

export const setResultLogin = payload => ({
    payload,
    type: SET_RESULT_LOGIN
});

export const setUser = payload => ({
    payload,
    type: SET_USER
});
