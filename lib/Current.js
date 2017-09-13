import React, { Component } from 'react';
import forecastData from '../practice-data/completeForecast';

export default class Current extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="Current">
        <p className="currentCity">Current City: {this.props.locProp}</p>
        <p className="currentTemp">Current Temp: {this.props.tempProp}</p>
        <p className="currentDay">Current Day: {this.props.dayProp}</p>
        <p className="currentCondition">Current Condition: {this.props.conditionProp}</p>
        <p className="lowTemp">Low: {this.props.lowProp}</p>
        <p className="highTemp">High: {this.props.highProp}</p>
        <p className="description">Forecast description: {this.props.descriptionProp}</p>
      </div>
    )
  }
}
