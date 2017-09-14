import React from 'react';

const WeatherCard = () => {

  return (
    // Use className={props.cardType} to have conditional rendering for each card
    <div className="hourlyCard tenDayCard">
      <h3>Time</h3>
      <p>picture</p>
      <p>Low Temp</p>
    </div>
  );
};

export default WeatherCard;
