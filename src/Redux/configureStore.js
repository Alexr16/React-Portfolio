import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Projects from './Projects/Projects';

const rootReducer = combineReducers({
  Projects,
});

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

export default store;
