import React from 'react';
import WeatherCard from './WeatherCard';

const TenDay = () => {
  const children = []

  for (let i = 0; i < 10; i++) {
    children.push(<WeatherCard className="tenDayCard"
                               key={i}/>)
  }

  return (
    <div className="TenDay">
      {children}
    </div>
  );
};

export default TenDay;
