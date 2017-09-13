import React from 'react';
import WeatherCard from './WeatherCard';

const Hourly = () => {

  return (
    <div className="Hourly">
      <WeatherCard className="hourOne"/>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};

export default Hourly;
