/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesWithParams } from './actions/fetch';

class App extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const { getMovies } = this.props;
    console.log(getMovies.movies);
    return (
      <div>
        <h1>Hello from React</h1>
      </div>
    );
  }
}

export default connect(({ getMovies }) => ({ getMovies }),
  { fetchMovies, fetchMoviesWithParams })(App);
