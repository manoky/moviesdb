/* eslint-disable react/prefer-stateless-function */
// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieHomeView from './movie-home-view/MovieHomeView';

class App extends Component {
  render() {
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

export default App;
