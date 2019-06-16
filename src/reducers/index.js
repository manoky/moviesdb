import { combineReducers } from 'redux';
import moviesReducer from './fetch';

const rootReducer = combineReducers({
  getMovies: moviesReducer,
});

export default rootReducer;
