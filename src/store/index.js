import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import photoApp from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(photoApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
