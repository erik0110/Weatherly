
import React from 'react';
import forecastData from '../practice-data/completeForecast';


const Current = ({ currentCity, currentTemp, currentDay, currentCondition, lowTemp, highTemp, description }) => {

  return (
    <div className="Current">
      <p className="currentCity">Current City: {currentCity}</p>
      <p className="currentTemp">Current Temp: {currentTemp}</p>
      <p className="currentDay">Current Day: {currentDay}</p>
      <p className="currentCondition">Current Condition: {currentCondition}</p>
      <p className="lowTemp">Low: {lowTemp}</p>
      <p className="highTemp">High: {highTemp}</p>
      <p className="description">Forecast description: {description}</p>
    </div>
  );
};

export default Current;
