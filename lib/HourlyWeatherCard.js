import React from 'react';

const HourlyWeatherCard = (props) => {

  return (
    <div className={props.className}>
      <h3 className="time">{props.time}</h3>
      <img className="weatherIcon"
        src={props.weatherIcon} alt={props.iconAlt}></img>
      <p className="temp">{props.temp}</p>
    </div>
  );
};

export default HourlyWeatherCard;
