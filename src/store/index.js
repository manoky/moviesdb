/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import localStorage from 'redux-localstorage';
import rootReducer from '../reducers';


const middleware = [thunk];

// eslint-disable-next-line no-undef
if (!production) {
  const { createLogger } = require('redux-logger');
  middleware.push(createLogger({ collapsed: true, diff: true }));
}

const enhancer = compose(
  applyMiddleware(...middleware),
  localStorage(['movies', 'genres']),
);

const store = createStore(rootReducer, enhancer);

export default store;
