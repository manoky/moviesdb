import React from 'react';
import { shallow } from 'enzyme';
import { Route, BrowserRouter } from 'react-router-dom';
import { MovieDetailsView } from '../components/movie-details-view/MovieDetailsView';


describe('<MovieDetailsView />', () => {
  it('Should not Break When Movie id is passed', () => {
    const component = shallow(
      <BrowserRouter>
        <Route path="movie/:5332-testmovie" component={MovieDetailsView} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
