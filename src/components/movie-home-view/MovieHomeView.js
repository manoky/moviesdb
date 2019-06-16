/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/fetch';
import MovieItem from './movie-item/MovieItem';
import './MovieHomeView.scss';

class MovieHomeView extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const { getMovies } = this.props;
    const { movies } = getMovies;
    return (
      <div className="MovieHomeView">
        {
          movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        }
      </div>
    );
  }
}

export default connect(({ getMovies }) => ({ getMovies }),
  { fetchMovies })(MovieHomeView);
