// @flow
import axios from 'axios';
import { movieURL } from '../components/helpers/URL';


export const FETCH_MOVIE_SUCCESS: string = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE: string = 'FETCH_MOVIE_FAILURE';

type MovieSuccess = {
  type: string,
  movie: Object,
}

type MovieFailure = {
  type: string,
  error: string,
}

type Action = MovieSuccess | MovieFailure;
type Dispatch = (action: Action) => any;
type ThunkAction = (dispatch: Dispatch) => any;

export const fetchMovie = (id: number):ThunkAction => (dispatch) => {
  axios.get(movieURL(id))
    .then(resp => resp.data)
    .then(movie => dispatch({
      type: FETCH_MOVIE_SUCCESS,
      movie,
    }))
    .catch(error => dispatch({
      type: FETCH_MOVIE_FAILURE,
      error: error.message,
    }));
};
