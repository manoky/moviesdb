import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { MovieItem } from '../components/movie-home-view/movie-item/MovieItem';

describe('<MovieItem />', () => {
  it('Should not Break When no Movie is passed', () => {
    const component = renderer.create(<BrowserRouter><MovieItem /></BrowserRouter>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should Correctly Render When Movie is passed', () => {
    const movie = {
      id: 1,
      title: 'test movie',
      release_date: '2019-10-10',
      vote_averge: 9.4,
      poster_path: null,
    };

    const component = renderer.create(<BrowserRouter><MovieItem movie={movie} /></BrowserRouter>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
