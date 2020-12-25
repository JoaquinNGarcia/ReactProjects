// import * as serviceWorker from './serviceWorker';
//import GithubList from '../views/containers/GithubList/main';

import App from './app';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch
} from 'react-router-dom';

//test

// import reducer from '../core/GitHubInfo/reducer';
// import createSagaMiddleware from 'redux-saga';
// import reducer from '../core/GitHubInfo/reducer';
// import rootSaga from '../core/GitHubInfo/saga';

import { createStore, applyMiddleware } from 'redux'; //applyMiddleware: conecta el middleware al store.
import rootReducer from './core/reducer.root';
import createSagaMiddleware from 'redux-saga'; //creo un middleware
import rootSaga from './core/sagas.root';

//import Error404 from './views/containers/Error404';
//import { ReduxSaga } from './ReduxSaga'; //Dudoso, borrar
//import { store } from './core/store.config';
//import './index.css';
//import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//const action = (type, payload) => store.dispatch({ type, payload })
sagaMiddleware.run(rootSaga); //Comienza el saga.

function render() {
	ReactDOM.render(
		<Provider store={ store }>
			<App/>
		</Provider>,
		document.getElementById('root')
	);
}

render()
store.subscribe(render)
// registerServiceWorker();
