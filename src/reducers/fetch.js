// @flow
import { FETCH_MOVIES_SUCCESS } from '../actions/fetch';

type State = Array<Object>;


const moviesReducer = (state: State = [], action: Object): State => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.movies;

    default:
      return state;
  }
};

export default moviesReducer;
