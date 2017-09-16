import React, { Component } from 'react';
import Welcome from './Welcome';
import Search from './Search';
import Current from './Current';
import Hourly from './Hourly';
import TenDay from './TenDay';
import $ from 'jquery';
import api from '../api-keys.js'
import weatherData from '../data/forecastData';


export default class App extends Component {
  constructor() {
    super();
    this.url = ''
    this.state = {
      recentGet: {},
      currentCity: '',
      currentTemp: '',
      currentDay: '',
      currentCondition: '',
      lowTemp: '',
      highTemp: '',
      description: '',
      hourOneTemp: '',
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

  defineHourly(weatherData) {
    this.setState({
      hourOneTime: weatherData.hourly_forecast[0].FCTTIME.civil,
      hourOneTemp: weatherData.hourly_forecast[0].temp.english,
      hourOneIcon: weatherData.hourly_forecast[0].icon_url,
      hourOneIconAlt: weatherData.hourly_forecast[0].icon,

      hourTwoTemp: weatherData.hourly_forecast[1].temp.english,
      hourThreeTemp: weatherData.hourly_forecast[2].temp.english,
      hourFourTemp: weatherData.hourly_forecast[3].temp.english,
      hourFiveTemp: weatherData.hourly_forecast[4].temp.english,
      hourSixTemp: weatherData.hourly_forecast[5].temp.english,
      hourSevenTemp: weatherData.hourly_forecast[6].temp.english,
    });
  }

  searchWeather(searchInput) {
    this.getWeatherData();
  }

  // setURL(searchData) {
  //   const apiCall = `http://api.wunderground.com/api/${api.lukeAPI}/conditions/hourly/forecast10day/q/${searchData}.json`;
  //   this.url = apiCall;
  // }

  getWeatherData() {
    fetch(this.url)
      .then((response) => response.json())
      .then((weatherData) => {
        this.defineCurrent(weatherData);
        this.setLocalStorage(this.url);
        this.defineHourly(weatherData);
      })
      .catch((error) => console.log('Error: ', error));
  }

  render() {
    let { currentCity, currentTemp, currentDay, currentCondition, lowTemp, highTemp, description, hourOneTime, hourOneTemp, hourOneIcon, hourOneIconAlt } = this.state;
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
          <Hourly hourOneTime={hourOneTime}
                  hourOneTemp={hourOneTemp}
                  hourOneIcon={hourOneIcon}
                  hourOneIconAlt={hourOneIconAlt}
                  // hourTwoTemp={hourTwoTemp}
                  // hourThreeTemp={hourThreeTemp}
                  // hourFourTemp={hourFourTemp}
                  // hourFiveTemp={hourFiveTemp}
                  // hourSixTemp={hourSixTemp}
                  // hourSevenTemp={hourSevenTemp}
                  />
        </div>
        <div className="tenDayContainer">
          <TenDay />
        </div>
      </div>
    );
  }
}
