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
  getMovies: Object,
}

class MovieHomeView extends Component<Props> {
  componentDidMount() {
    const { fetchMovies, fetchGenre } = this.props;
    fetchMovies();
    fetchGenre();
  }

  render() {
    const { getMovies } = this.props;
    const { movies } = getMovies;
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

export default connect(({ getMovies }) => ({ getMovies }),
  { fetchMovies, fetchGenre })(MovieHomeView);
