/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import SelectInput from '../select/SelectInput';
import { fetchMoviesWithParams } from '../../../actions/fetch';
import 'react-input-range/lib/css/index.css';
import './SideBar.scss';

type State = {
  year: { min:number, max: number },
  rating: { min:number, max: number },
  runtime: { min:number, max: number },
  genre: number,
}

class SideBar extends Component<State> {
  state = {
    year: { min: 1990, max: 2019 },
    rating: { min: 0, max: 10 },
    runtime: { min: 0, max: 300 },
    genre: 0,
  };

  setGenre = (value: number) => (
    this.setState({ genre: value })
  );

  fetchParams = (e) => {
    e.preventDefault();
    const { fetchMoviesWithParams } = this.props;

    const {
      runtime,
      year,
      rating,
      genre,
    } = this.state;

    const rMax = runtime.max, rMin = runtime.min;
    const rtMax = rating.max, rtMin = rating.min;
    const yrMax = year.max, yrMin = year.min;
    const seletedGenre = genre !== 0 ? `&with_genres=${genre}` : '/';
    fetchMoviesWithParams(rMax, rMin, yrMax, yrMin, rtMax, rtMin, seletedGenre);
  }

  render() {
    const { year, rating, runtime } = this.state;

    return (
      <div className="SideBar">
        <form onSubmit={this.fetchParams} className="FormInput">
          <SelectInput
            setGenre={this.setGenre}
          />
          <div className="InputRange">
            <h2>Year</h2>
            <InputRange
              maxValue={2019}
              minValue={1990}
              value={year}
              onChange={year => this.setState({ year })}
            />
          </div>
          <div className="InputRange">
            <h2>Rating</h2>
            <InputRange
              maxValue={10}
              minValue={0}
              value={rating}
              onChange={rating => this.setState({ rating })}
            />
          </div>
          <div className="InputRange">
            <h2>Runtime</h2>
            <InputRange
              maxValue={300}
              minValue={0}
              value={runtime}
              onChange={runtime => this.setState({ runtime })}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchMoviesWithParams })(SideBar);
