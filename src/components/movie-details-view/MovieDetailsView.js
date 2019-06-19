/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow
import React from 'react';
import { connect } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { imageURL } from '../../actions/URL';
import List from './list/List';
import Crew from './crew/Crew';
import Cast from './cast/Cast';
import Comment from './comment/Comment';
import Loading from '../helpers/Loading';
import './MovieDetailsView.scss';


type Props = {
  movie: {
    status: string,
    title: string,
    vote_average: number,
    release_date: string,
    budget: string,
    runtime: number,
    overview: string,
    genres: string,
    production_countries: Array<Object>,
    spoken_languages: Array<Object>,
    credits: Object,
    reviews: Object,
    backdrop_path: string,
    poster_path: string
  },
}


export const MovieDetailsView = (props: Props) => {
  const { movie } = props;
  let percentage;
  let date;
  let bgImg;

  if (movie === undefined) {
    return Loading();
  }


  if (movie !== undefined) {
    percentage = (parseFloat(movie.vote_average) / 10) * 100;
    date = movie.release_date.split('-');
    bgImg = movie.backdrop_path;
  }

  const backgroundStyle = {
    background: `radial-gradient(circle at bottom left, #ffa949, firebrick, transparent 95%),
     url(${imageURL(bgImg)}) no-repeat`,
  };

  return (
    <div className="MovieDetailsView">
      <section>
        <div className="DetailHeadFullWidth" style={backgroundStyle}>
          <div className="DetailHead">
            <div className="MovieImg">
              <img src={imageURL(movie.poster_path)} alt={movie.title} />
            </div>
            <div className="MovieInfo">
              <h1>
                <span>{movie.title}</span>
                {date[0]}
              </h1>
              <div className="RatingRow">
                <CircularProgressbar
                  value={percentage}
                  text={`${Math.round(percentage)}%`}
                  className="RatingCircularBar"
                  strokeWidth={12}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    textSize: '26px',
                    backgroundColor: '#3e98c7',
                    textColor: '#fff',
                    pathColor: '#fff',
                    trailColor: 'transparent',

                  })}
                />
                <p>Status: {movie.status}</p>
                <p>Budget: {movie.budget}</p>
                <p>Runtime: {movie.runtime}</p>
              </div>
              <div className="OverviewRow">
                <h3>Overview</h3>
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
        <div className="CreditsRow">
          <Crew crew credits={movie.credits.crew} />
          <Cast credits={movie.credits.cast} />
        </div>
        <div>
          <Comment comments={movie.reviews.results} />
        </div>
      </section>
    </div>

  );
};

MovieDetailsView.defaultProps = {
  movie: {
    status: '',
    title: '',
    vote_average: null,
    release_date: '',
    budget: '',
    runtime: null,
    overview: '',
    genres: '',
    production_countries: [],
    spoken_languages: [],
    credits: null,
    reviews: null,
    backdrop_path: '',
    poster_path: '',
  },
};

export default connect(({ movie }) => ({ movie }))(MovieDetailsView);
