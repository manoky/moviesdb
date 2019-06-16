/* eslint-disable no-undef */
// @flow
import axios from 'axios';
import { moviesParamsURL, moviesURL } from './URL';

/* **************
  Action Types
*************** */

export const FETCH_MOVIES_SUCCESS : string = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE : string = 'FETCH_MOVIES_FAILURE';

type FetchMoviesSuccess = {
  type: string,
  movies: Array<Object>
}

type FetchMoviesFailure = {
  type: string,
  error: ?string,
}

type Action = FetchMoviesSuccess | FetchMoviesFailure;
type Dispatch = (action: Action) => any;
type ThunkAction = (dispatch: Dispatch) => any;


// Get initial movies on first load.
export const fetchMovies = (): ThunkAction => (dispatch) => {
  axios.get(moviesURL())
    .then(resp => resp.data.results)
    .then(movies => dispatch({
      type: FETCH_MOVIES_SUCCESS,
      movies,
    }))
    .catch(error => (
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        error: error.message,
      })
    ));
};

// Get movies with defined params.
export const fetchMoviesWithParams = (
  rMax: number,
  rMin: number,
  yrMax: number,
  yrMin: number,
  rtMax: number,
  rtMin: number,
  seletedGenre: string,

): ThunkAction => (dispatch) => {
  axios.get(moviesParamsURL(rMax, rMin, yrMax, yrMin, rtMax, rtMin, seletedGenre))
    .then(resp => resp.data.results)
    .then(movies => (
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        movies,
      })
    ))
    .catch(error => (
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        error: error.message,
      })
    ));
};
