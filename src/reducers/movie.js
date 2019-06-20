import { FETCH_MOVIE_SUCCESS } from '../actions/movie';

type State = {
  movie: {
    status: string,
    title: string,
    vote_average: number,
    release_date: string,
    budget: string,
    runtime: number,
    overview: string,
    genres: string,
    production_countries: Array<Object>,
    spoken_languages: Array<Object>,
    credits: Object,
    reviews: Object,
    backdrop_path: string,
    poster_path: string
  },
};
const initialState = null;

const movieReducer = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case FETCH_MOVIE_SUCCESS:
      return action.movie;
    default:
      return state;
  }
};


export default movieReducer;
