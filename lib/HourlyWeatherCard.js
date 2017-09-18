import React from 'react';

const HourlyWeatherCard = (props) => {

  return (
    // Use className={props.cardType} to have conditional rendering for each card
    <div className={props.className}>
      <h3 className="time">Time</h3>
      <img className="weatherIcon"></img>
      <p className="highTemp">High Temp</p>
    </div>
  );
};

export default HourlyWeatherCard;
