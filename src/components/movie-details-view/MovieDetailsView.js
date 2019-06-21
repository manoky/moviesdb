/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow
import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { imageURL, movieURL } from '../helpers/URL';
import List from './list/List';
import Crew from './crew/Crew';
import Cast from './cast/Cast';
import Comment from './comment/Comment';
import Loading from '../helpers/Loading';
import './MovieDetailsView.scss';


type State = {
  movie: {
    status: string,
    title: string,
    vote_average: number,
    release_date: string,
    budget: number,
    runtime: number,
    overview: string,
    genres: Array<Object>,
    production_countries: Array<Object>,
    spoken_languages: Array<Object>,
    credits: Object,
    reviews: Object,
    backdrop_path: string,
    poster_path: string
  },
}

type Props = {
  match: Object,
}


export class MovieDetailsView extends Component <Props, State> {
  state = {
    movie: {},
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.fetchMovie(id);
  }

  fetchMovie = (id: number) => {
    axios.get(movieURL(id))
      .then(resp => resp.data)
      .then(movie => this.setState({ movie }))
      .catch(error => console.log(error));
  }

  render() {
    const { movie } = this.state;

    if (movie.vote_average === undefined) {
      return (
        <div className="Loader">
          <p>{Loading()}</p>
        </div>
      );
    }

    const percentage = (parseFloat(movie.vote_average) / 10) * 100;
    const date = movie.release_date.split('-');
    const bgImg = movie.backdrop_path;
    const budget = (movie.budget).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    const minutes = movie.runtime % 60;
    const hours = (movie.runtime - minutes) / 60;


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
                  <p>Budget: ${budget}</p>
                  <p>Runtime: {`${hours}h ${minutes}m`}</p>
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
            <Comment comments={movie.reviews.results} />
          </div>
        </section>
      </div>
    );
  }
}

// MovieDetailsView.defaultProps = {
//   movie: {
//     status: '',
//     title: '',
//     vote_average: null,
//     release_date: '',
//     budget: '',
//     runtime: null,
//     overview: '',
//     genres: '',
//     production_countries: [],
//     spoken_languages: [],
//     credits: null,
//     reviews: null,
//     backdrop_path: '',
//     poster_path: '',
//   },
// };

export default MovieDetailsView;
