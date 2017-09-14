import React, { Component } from 'react';
import Welcome from './Welcome';
import Search from './Search';
import Current from './Current';
import Hourly from './Hourly';
import TenDay from './TenDay';
import $ from 'jquery';
import api from '../api-keys.js'



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      recentGet: {},
    }
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData() {
    fetch(`http://api.wunderground.com/api/${api.lukeAPI}/conditions/hourly/forecast10day/q/CO/Denver.json`)
      .then((response) => response.json())
      .then((weatherdata) => {
        this.setState({ recentGet: weatherdata.value })
      })
      .catch((error) => console.log('Error: ', error));
  }

  render() {
    return (
      <div className="App">
        <div className="searchContainer">
          <Welcome />
          <Search />
        </div>
        <div className="dailyContainer">
          <Current />
          <Hourly />
        </div>
        <div className="tenDayContainer">
          <TenDay />
        </div>
      </div>
    );
  }
}
