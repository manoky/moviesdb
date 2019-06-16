/* eslint-disable react/prefer-stateless-function */
// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/fetch';
import MovieItem from './movie-item/MovieItem';
import './MovieHomeView.scss';
import SideBar from '../UI/sidebar/SideBar';

type Props = {
  fetchMovies:() => void,
  getMovies: Object,
}

class MovieHomeView extends Component<Props> {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
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
  { fetchMovies })(MovieHomeView);
