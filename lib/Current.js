
import React from 'react';
import forecastData from '../practice-data/completeForecast';


const Current = ({ currentCity, currentTemp, currentDay, currentCondition, lowTemp, highTemp, description }) => {

  return (
    <div className="Current">
      <p className="currentCity">{currentCity}</p>
      <p className="currentTemp">{currentTemp}</p>
      <p className="currentDay">{currentDay}</p>
      <p className="currentCondition">{currentCondition}</p>
      <div className="lowHighContainer">
        <p className="lowTemp">{lowTemp}</p>
        <p className="highTemp">{highTemp}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default Current;
