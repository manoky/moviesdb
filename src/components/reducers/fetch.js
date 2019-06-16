// @flow
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../actions/fetch';

type State = {
  movies: Array<Object>,
  error: string,
}

const initialState = {
  movies: [],
  error: '',
};

const moviesReducer = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default moviesReducer;
