import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
    reducers,
    {},
    applyMiddleware(epicMiddleware)
);


export default store;