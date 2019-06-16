/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { imageURL } from '../../../actions/URL';
import './MovieItem.scss';

type Movie = {
  movie: {
    title: string,
    release_date: string,
    vote_average: number,
    poster_path: string,
  }
}

const MovieItem = (props: Movie) => {
  const {
    title,
    release_date,
    vote_average,
    poster_path,
  } = props.movie;

  const date = release_date.split('-');

  return (
    <div className="MovieItem">
      <div className="MovieImg">
        <img src={imageURL(poster_path)} alt={title} />
      </div>
      <div className="Title">
        <h2>{title}</h2>
      </div>
      <div className="MovieInfo">
        <div className="YearCol">
          <span>Year</span>
          <h3>{date[0]}</h3>
        </div>
        <div className="RatingCol">
          <span>Rating</span>
          <h3>{vote_average}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
