/*import {
    all,
    takeEvery,
    takeLatest,
    select
} from 'redux-saga/effects';

function* rootSagas () {
    yield all ([
		//takeEvery(ADD, addToList),
		//takeEvery(DELETE, deleteToList)
    ]);
}
//Las sagas se implementan como funciones generadoras que generan objetos para el middleware redux-saga.

export default rootSagas;*/

import { put, takeEvery, all, select} from 'redux-saga/effects'
// import {
// 	setList,
// 	deleteList
// } from '../app/action';
import {
	ADD,
	DELETE,
	DELETELIST,
	SETLIST
} from './types'

function* addToList(action) {
	const { list } = yield select();
	yield put({ payload: [...list, action.payload] , type: SETLIST });
	//yield put(setList([...list, action.payload]));
}

function* deleteToList() {
	const { list } = yield select();
	const newList = list.filter((e, index) => index !== list.length-1);
	yield put({ payload: newList, type: DELETELIST })
	//yield put(deleteList(newList));
}

//Ahora solo exporto el punto de entrada rootSaga para iniciar todos los sagas a la vez.
export default function* rootSaga() {
	yield all([
		takeEvery(ADD, addToList),
		takeEvery(DELETE, deleteToList)
	]);
}
//Las sagas se implementan como funciones generadoras que generan objetos para el middleware redux-saga.
