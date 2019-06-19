/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import localStorage from 'redux-localstorage';
import rootReducer from '../reducers';


const middleware = [thunk];

if (process.env !== 'production') {
  const { createLogger } = require('redux-logger');
  middleware.push(createLogger({ collapsed: true, diff: true }));
}

const enhancer = compose(
  applyMiddleware(...middleware),
  localStorage(['getMovies', 'genres', 'movie']),
);

const store = createStore(rootReducer, enhancer);

export default store;
