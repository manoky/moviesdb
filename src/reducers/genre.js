// @flow
import { FETCH_GENRE_SUCCESS } from '../actions/genre';

type State = Array<{
  name: string,
  id: number,
}>;

const initialState = [];

const genreReducer = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case FETCH_GENRE_SUCCESS:
      return action.genre;

    default:
      return state;
  }
};

export default genreReducer;
