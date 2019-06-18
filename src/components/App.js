/* eslint-disable react/prefer-stateless-function */
// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieHomeView from './movie-home-view/MovieHomeView';
import MovieDetailsView from './movie-details-view/MovieDetailsView';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MovieHomeView} />
            <Route exact path="/movie/:title" component={MovieDetailsView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
