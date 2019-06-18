import { combineReducers } from 'redux';
import moviesReducer from './fetch';
import genreReducer from './genre';
import movieReducer from './movie';

const rootReducer = combineReducers({
  getMovies: moviesReducer,
  movie: movieReducer,
  genres: genreReducer,
});

export default rootReducer;
