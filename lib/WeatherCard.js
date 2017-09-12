import React, { Component } from 'react';

export default class WeatherCard extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="WeatherCard">
        <h3>Time</h3>
        <p>picture</p>
        <p>High/Low</p>
      </div>
    )
  }
}
