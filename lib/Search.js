import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      weatherSearchInput: '',
    };
  }

  getSearchInput(event) {
    this.setState({
      weatherSearchInput: event.target.value,
    });
  }

  handleSearchClick() {
    this.props.searchWeather(this.state.weatherSearchInput)
    this.setState({
      weatherSearchInput: '',
    });
  }

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          placeholder="Enter a city & state or zip code to find the weather."
          value={this.state.weatherSearchInput}
          onChange={this.getSearchInput.bind(this)}/>

        <button onClick={this.handleSearchClick.bind(this)}>Search</button>
      </div>
    );
  }
}
