import React, { Component } from 'react';
import Welcome from './Welcome';
import Search from './Search';
import Current from './Current';
import Hourly from './Hourly';
import TenDay from './TenDay';
import cleanData from './CleanData';
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


  setURL(searchData) {
    const apiCall = `http://api.wunderground.com/api/${api.lukeAPI}/conditions/hourly/forecast10day/q/${searchData}.json`;
    this.url = apiCall;
  }

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
      })
      //alert could be a div element that is controlled with setState() and creates a div to display the reasoning - possibly default to NoName, CO
      .catch((error) => alert('Location does not exist in this reality'));
  }

  render() {
    const { current, hourly, tenDay } = this.state.recentGet

    if (this.state.storedData !== null) {
      return (
        <div className="App">
          <div className="mainContent">
            <div className="mainSearch">
              <Search searchWeather={this.searchWeather.bind(this)}/>
            </div>
            <div className="dailyContainer">
              <Current current={current}/>
              <div className="hourlyContainer">
                <h2 className="hourlyHeading">7-Hour Forecast</h2>
                <Hourly hours={hourly}/>
              </div>
            </div>
            <div className="tenDayContainer">
              <h2 className="tenDayHeading">10-Day Forecast</h2>
              <TenDay days={tenDay}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="welcomeScreen">
            <Welcome />
            <div className="welcomeSearch">
              <Search searchWeather={this.searchWeather.bind(this)} />
            </div>
          </div>
        </div>
      );
    }
  }
}
