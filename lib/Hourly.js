import React from 'react';
import WeatherCard from './WeatherCard';

const Hourly = ({hourOneTime, hourOneTemp, hourOneIcon, hourOneIconAlt}) => {

  return (
    <div className="Hourly">
      <WeatherCard className="hourlyCard"
      className="hourOne"/>
      {hourOneTime}
      {hourOneTemp}
      <img src={hourOneIcon} alt={hourOneIconAlt}></img>
    </div>
  );
};

export default Hourly;
