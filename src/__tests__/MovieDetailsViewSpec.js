import React from 'react';
import renderer from 'react-test-renderer';
import { Route, BrowserRouter } from 'react-router-dom';
import { MovieDetailsView } from '../components/movie-details-view/MovieDetailsView';


describe('<MovieDetailsView />', () => {
  test('Should not Break When Movie id is passed', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Route path="movie/:5332-testmovie" component={MovieDetailsView} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
