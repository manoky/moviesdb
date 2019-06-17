import axios from 'axios';
import { genreURL } from './URL';

export const FETCH_GENRE_SUCCESS: string = 'FETCH_GENRE_SUCCESS';
export const FETCH_GENRE_FAILURE: string = 'FETCH_GENRE_FAILURE';


type GenreSuccess = {
  type: string,
  genre: ?Object,
};

type GenreFailure = {
  type: string,
  error: ?string,
};

type Action = GenreSuccess | GenreFailure;
type Dispatch = (action: Action) => any;
type ThunkAction = (dispatch: Dispatch) => any;

export const fetchGenre = ():ThunkAction => (dispatch) => {
  axios.get(genreURL())
    .then(resp => dispatch({
      type: FETCH_GENRE_SUCCESS,
      genre: resp.data.genres,
    }))
    .catch(error => dispatch({
      type: FETCH_GENRE_FAILURE,
      error: error.message,
    }));
};
