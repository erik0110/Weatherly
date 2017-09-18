import React, { Component } from 'react';
import Welcome from './Welcome';
import Search from './Search';
import Current from './Current';
import Hourly from './Hourly';
import TenDay from './TenDay';
import cleanData from './WeatherData';
import $ from 'jquery';
import api from '../api-keys.js'
import staticData from '../data/forecastData';


export default class App extends Component {
  constructor() {
    super();
    this.url = '';
    this.state = {
      recentGet: {},
      storedData: null,
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
    const retreivedURL = localStorage.getItem('storedData');

    this.url = retreivedURL;
    this.getWeatherData();
  }

  searchWeather(searchInput) {
    this.setURL(searchInput);
    this.getWeatherData();
  }

  // setURL(searchData) {
  //   const apiCall = `http://api.wunderground.com/api/${api.lukeAPI}/conditions/hourly/forecast10day/q/${searchData}.json`;
  //   this.url = apiCall;
  // }

  getWeatherData() {
    fetch(this.url)
      .then((response) => response.json())
      .then((weatherData) => cleanData(weatherData))
      .then((freshData) => {
        this.setState({
          recentGet: freshData,
          storedData: this.url,
        });
        this.setLocalStorage(this.url);
        console.log(this.state.recentGet);
      })
      .catch((error) => console.log('Error: ', error));
  }

  render() {
    const { currentCity, currentCondition, currentDay, currentTemp, description, highTemp, lowTemp, hourly, tenDay } = this.state.recentGet

    if (this.state.storedData !== null) {
      return (
        <div className="App">
          <div className="mainContent">
            <div className="dailyContainer">
              <Search searchWeather={this.searchWeather.bind(this)}/>
              <Current currentCity={currentCity}
                     currentTemp={currentTemp}
                     currentDay={currentDay}
                     currentCondition={currentCondition}
                     lowTemp={lowTemp}
                     highTemp={highTemp}
                     description={description}
                    />
              <Hourly hours={hourly}/>
            </div>
            <div className="tenDayContainer">
              <TenDay days={tenDay}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="searchContainer">
            <Welcome />
            <Search searchWeather={this.searchWeather.bind(this)}/>
          </div>
        </div>
      );
    }
  }
}
