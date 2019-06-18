import { FETCH_MOVIE_SUCCESS } from '../actions/movie';

type State = Object;
const initialState = {};

const movieReducer = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case FETCH_MOVIE_SUCCESS:
      return action.movie;
    default:
      return state;
  }
};


export default movieReducer;
