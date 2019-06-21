import { combineReducers } from 'redux';
import moviesReducer from './fetch';
import genreReducer from './genre';

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genreReducer,
});

export default rootReducer;
