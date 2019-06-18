/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import  { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { imageURL } from '../../actions/URL';
import './MovieDetailsView.scss';
import List from './list/List';

type Props = {
  movie: Object,
}

const MovieDetailsView = (props: Props) => {
  const { movie } = props;
  const percentage = (parseFloat(movie.vote_average) / 10) * 100;
  console.log(movie);
  return (
    <div className="MovieDetailsView">
      <div className="DetailHead">
        <div className="MovieImg">
          <img src={imageURL(movie.poster_path)} alt={movie.title} />
        </div>
        <div className="MovieInfo">
          <h1>
            {movie.title}
            {movie.release_date}
          </h1>
          <div className="RatingRow">
            <CircularProgressbar
              value={percentage}
              text={`${Math.round(percentage)}%`}
              className="RatingCircularBar"
            />
            <p>Status: {movie.status}</p>
            <p>Budget: {movie.budget}</p>
            <p>Runtime: {movie.runtime}</p>
          </div>
          <div className="OverviewRow">
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="GenreLangCountryRow">
            <List
              item={movie.genres}
              ItemClass="Genres"
              title="Genres"
            />
            <List
              item={movie.production_countries}
              ItemClass="Country"
              title="Country"
            />
            <List
              item={movie.spoken_languages}
              ItemClass="Languages"
              title="Languages"
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default connect(({ movie }) => ({ movie }))(MovieDetailsView);
