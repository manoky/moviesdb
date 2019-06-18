import React from 'react';
import { connect } from 'react-redux';
import { imageURL } from '../../actions/URL';
import './MovieDetailsView.scss';

type Props = {
  movie: Object,
}

const MovieDetailsView = (props: Props) => {
  const { movie } = props;
  return (
    <div className="MovieDetailsView">
      <h1>{movie.title}</h1>
      <img src={imageURL(movie.poster_path)} alt="" />
    </div>

  );
};

export default connect(({ movie }) => ({ movie }))(MovieDetailsView);
