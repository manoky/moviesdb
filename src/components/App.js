/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchMovies, fetchMoviesWithParams } from '../actions/fetch';
import MovieHomeView from './movie-home-view/MovieHomeView';

class App extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const { getMovies } = this.props;
    console.log('Movies', getMovies.movies);
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MovieHomeView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(({ getMovies }) => ({ getMovies }),
  { fetchMovies, fetchMoviesWithParams })(App);
