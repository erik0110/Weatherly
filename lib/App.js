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
    this.url = ''
    this.state = {
      recentGet: {},
      currentCity: 'Where the fuck am I?',
      currentTemp: 'Hot. Dam Hot.',
      currentDay: 'Someday...when my life has passed me by',
      currentCondition: 'Needs TLC',
      lowTemp: 'From the window...',
      highTemp: 'Ill be up up and away',
      description: 'yes.',
    };
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
    this.setLocalStorage();
  }

  setLocalStorage(apiCall) {
    localStorage.setItem('storedData', apiCall);
  }

  getLocalStorage() {
    let retreivedURL = localStorage.getItem('storedData')

    this.url = retreivedURL;
    this.getWeatherData();
  }

  defineCurrent(weatherData) {
    this.setState({
      currentCity: weatherData.current_observation.display_location.full,
      currentTemp: weatherData.current_observation.temp_f,
      currentDay: weatherData.forecast.simpleforecast.forecastday[0].date.pretty,
      currentCondition: weatherData.forecast.simpleforecast.forecastday[0].conditions,
      lowTemp: weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      highTemp: weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      description: weatherData.forecast.txt_forecast.forecastday[0].fcttext,
    });
  }

  searchWeather(searchInput) {
    this.setURL(searchInput);
    this.getWeatherData();
  }

  setURL(searchData) {
    const apiCall = `http://api.wunderground.com/api/${api.lukeAPI}/conditions/hourly/forecast10day/q/${searchData}.json`;
    this.url = apiCall;
  }

  getWeatherData() {
    fetch(this.url)
      .then((response) => response.json())
      .then((weatherData) => {
        this.defineCurrent(weatherData);
        this.setLocalStorage(this.url);
        this.componentWillMount(weatherData);
        // this.defineHourly(weatherData);
      })
      .catch((error) => console.log('Error: ', error));
  }

  render() {
    let { currentCity, currentTemp, currentDay, currentCondition, lowTemp, highTemp, description } = this.state;
    return (
      <div className="App">
        <div className="searchContainer">
          <Welcome />
          <Search searchWeather={this.searchWeather.bind(this)}/>
        </div>
        <div className="dailyContainer">
          <Current currentCity={currentCity}
                 currentTemp={currentTemp}
                 currentDay={currentDay}
                 currentCondition={currentCondition}
                 lowTemp={lowTemp}
                 highTemp={highTemp}
                 description={description}
                />
          <Hourly />
        </div>
        <div className="tenDayContainer">
          <TenDay />
        </div>
      </div>
    );
  }
}
