import React from 'react';
import WeatherCard from './WeatherCard';

const Hourly = ({hourOneTime, hourOneTemp, hourOneIcon, hourOneIconAlt}) => {

  const children = []

  for (var i = 0; i < 7; i++) {
    children.push( <WeatherCard className="hourlyCard"
                                key={i}/> )
  }

  return (
    <div className="Hourly">
      {children}
      {/* <h3>{hourOneTime}</h3>
      <img src={hourOneIcon} alt={hourOneIconAlt}></img>
      <h2>{hourOneTemp}</h2> */}
    </div>
  );
};

export default Hourly;
