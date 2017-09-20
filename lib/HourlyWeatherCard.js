import React from 'react';

const HourlyWeatherCard = (props) => {

  return (
    <div className={props.className}>
      <h3 className="time">{props.time}</h3>
      <p className="temp hourlyFlex">
        <img className="weatherIcon"
          src={props.weatherIcon} alt={props.iconAlt}></img>
        {props.temp}&deg;F
      </p>
    </div>
  );
};

export default HourlyWeatherCard;
