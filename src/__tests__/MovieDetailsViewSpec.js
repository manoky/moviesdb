import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { MovieDetailsView } from '../components/movie-details-view/MovieDetailsView';


describe('<MovieDetailsView />', () => {
  it('Should not Break When no Movie is passed', () => {
    const component = renderer.create(<BrowserRouter><MovieDetailsView /></BrowserRouter>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should Correctly Render When Movie is passed', () => {

  });
});
