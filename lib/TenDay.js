import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

export default class TenDay extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="TenDay">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
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
