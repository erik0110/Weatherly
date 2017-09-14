import React from 'react';
import WeatherCard from './WeatherCard';

const TenDay = () => {

  return (
    <div className="TenDay">
      <WeatherCard cardType="tenDayCard"/>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};

export default TenDay;
