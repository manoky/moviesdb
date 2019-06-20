/* eslint-disable react/prefer-stateless-function */
// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/fetch';
import { fetchGenre } from '../../actions/genre';
import MovieItem from './movie-item/MovieItem';
import './MovieHomeView.scss';
import SideBar from '../UI/sidebar/SideBar';

type Props = {
  fetchMovies:() => void,
  fetchGenre: () => void,
  movies: Array<Object>,
}

class MovieHomeView extends Component<Props> {
  componentDidMount() {
    const { fetchMovies, fetchGenre } = this.props;
    fetchMovies();
    fetchGenre();
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="MovieHomeView">
        <SideBar />
        <div className="MovieGrid">
          {
            movies.map(movie => (
              <MovieItem key={movie.id} movie={movie} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default connect(({ movies }) => ({ movies }),
  { fetchMovies, fetchGenre })(MovieHomeView);
