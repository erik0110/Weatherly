import React from 'react';
import HourlyWeatherCard from './HourlyWeatherCard';

const Hourly = ({hourOneTime, hourOneTemp, hourOneIcon, hourOneIconAlt}) => {

  const children = []

  // use map() to pull from the hour array of objects and print onto each card
  for (var i = 0; i < 7; i++) {
    children.push( <HourlyWeatherCard className="hourlyCard"
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
