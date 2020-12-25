import createSagaMiddleware from 'redux-saga';
import {
    applyMiddleware,
    createStore
} from 'redux'; //applyMiddleware: conecta el middleware al store.
import rootReducer from './reducer.root';
import rootSagas from './sagas.root';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer(), applyMiddleware(sagaMiddleware));

store.run(rootSagas); //Comienza el saga.
