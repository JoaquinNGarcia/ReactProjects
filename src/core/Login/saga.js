import {
    LOGIN_VALIDATE,
    LOGOUT
} from '../types' //podria agregarlo al sagas.root.js al mismo nivel que types.js 
import {
    all,
    call,
    put,
    takeEvery
} from 'redux-saga/effects';
//import { push } from 'react-router-redux';
import { registerServ } from './service';
import {
    setCheckedLogin,
    setCheckingLogin,
    setResultLogin,
    setUser
} from './action';

/*export*/ function* loginValidate({ payload }) {
    try {
        yield put(setCheckingLogin(true));
        yield put(setResultLogin(true));
        yield put(setCheckedLogin(true));
        const { user } = yield call(registerServ, payload);
        yield put(setUser(user));
        yield call([localStorage, 'setItem'], 'login-data', JSON.stringify( user ));
        yield put(setCheckingLogin(false));
    } catch (e) {
        yield put(setCheckingLogin(false));
        yield put(setCheckedLogin(true));
        yield put(setResultLogin(false));
    } finally {
    }
}

/*export*/ function* logout() {
    try {
        yield put(setUser({}));
        yield call([localStorage, localStorage.clear]);
        yield put(setCheckedLogin(false));
    } catch(e) {
    }
}

//podria agregarlo al sagas.root.js al mismo nivel que types.js
function* rootSagas() {
    yield all ([
        takeEvery(LOGIN_VALIDATE, loginValidate),
        takeEvery(LOGOUT, logout)
    ]);
}

export default rootSagas;
