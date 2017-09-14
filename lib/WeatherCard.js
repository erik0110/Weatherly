import React from 'react';

const WeatherCard = () => {

  return (
    // Use className={props.cardType} to have conditional rendering for each card
    <div className="WeatherCard">
      <h3>Time</h3>
      <p>picture</p>
      <p>High</p>
      <p>Low</p>
    </div>
  );
};

export default WeatherCard;
