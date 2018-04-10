import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
// **STORE** //
const store = createStore(
    combineReducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;