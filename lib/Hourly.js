import React from 'react';
import HourlyWeatherCard from './HourlyWeatherCard';

const Hourly = ({ hours }) => {
  const children = hours.map((hour, index) => {
    return (
      <HourlyWeatherCard
        className="hourlyCard"
        key={index}
        time={hour.FCTTIME.civil}
        weatherIcon={hour.icon_url}
        iconAlt={hour.icon}
        temp={hour.temp.english}
      />
    );
  });


  return (
    <div className="Hourly">
      {children}
    </div>
  );
};

export default Hourly;
