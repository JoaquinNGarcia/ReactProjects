/*import { combineReducers } from 'redux';
//import { dashboardReducer } from './Dashboard/reducer';
import { routerReducer } from 'react-router-redux';


export  default function rootReducer () {
    return combineReducers({
        //dashboard: dashboardReducer,
    });
}*/

import {
	DELETELIST,
	SETLIST
} from './types'

const defaultState = () => ({
	list: ['Hola 1', 'Test']
});

export default function rootReducer(state = defaultState(), { type, payload }) {
	switch(type) {
		case SETLIST: return { ...state, list: payload };
		case DELETELIST: return { ...state, list: payload };
		default: return state
	}
}
