/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { imageURL } from '../../../actions/URL';
import { fetchMovie } from '../../../actions/movie';
import './MovieItem.scss';

type Props = {
  movie: {
    id: number,
    title: string,
    release_date: string,
    vote_average: number,
    poster_path: string,
  },
  fetchMovie:(id: number) => void;
}

export const MovieItem = (props: Props) => {
  const {
    id,
    title,
    release_date,
    vote_average,
    poster_path,
  } = props.movie;

  let date;
  if (release_date !== undefined) {
    date = release_date.split('-');
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className="MovieItem"
      onClick={() => props.fetchMovie(id)}
    >
      <div className="MovieImg">
        <Link to={`/movie/${id}-${title}`}>
          <img src={imageURL(poster_path)} alt={title} />
        </Link>
      </div>
      <div className="Title">
        <Link to={`/movie/${title}`}>
          <h2>{title}</h2>
        </Link>
      </div>
      <div className="MovieInfo">
        <div className="YearCol">
          <span>Year</span>
          {
            date !== null && <h3>{date[0]}</h3>
          }
        </div>
        <div className="RatingCol">
          <span>Rating</span>
          <h3>{vote_average}</h3>
        </div>
      </div>
    </div>
  );
};

const MapDispatchToProp = {
  fetchMovie,
};

MovieItem.defaultProps = {
  movie: {
    id: null,
    title: '',
    release_date: '',
    vote_average: null,
    poster_path: null,
  },
};

export default connect(null, MapDispatchToProp)(MovieItem);
