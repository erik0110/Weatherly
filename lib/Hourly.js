import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

export default class Hourly extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="Hourly">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    )
  }
}
