import {
    setGitHubInfo
} from './action';
import {
    call,
    put,
    takeEvery,
    all,
    select
} from 'redux-saga/effects';
import {
    infoGitHub
} from './services';
import {
    SET_GITHUB_INFO
} from '../types';

function* gitHubInfo (action) {
    // Hacer el loading
    // yield put(setGitHubInfoLoading(true));
    const { list } = yield select();
    yield put({ payload :[...list, action.payload], type: SET_GITHUB_INFO});
    // const info = yield call(infoGitHub);
    // console.log('info: ', info);
    // yield put(setGitHubInfo(info));
    // try {
    // } catch (e) {

    // } finally {
    //     // pongo fin al loading
        // yield put(setGitHubInfoLoading(false));
    }
}

export default function* rootSaga() {
	yield all([
		takeEvery(SET_GITHUB_INFO, gitHubInfo)
	]);
}
