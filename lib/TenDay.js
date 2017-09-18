import React from 'react';
import TenDayWeatherCard from './TenDayWeatherCard';

const TenDay = ({ days }) => {
  const children = days.map((day, index) => {
    return (
      <TenDayWeatherCard
        className="tenDayCard"
        key={index}
        month={day.date.month}
        date={day.date.day}
        weatherIcon={day.icon_url}
        iconAlt={day.icon}
        lowF={day.low.fahrenheit}
        highF={day.high.fahrenheit}
      />
    );
  });

  return (
    <div className="TenDay">
      {children}
    </div>
  );
};

export default TenDay;
