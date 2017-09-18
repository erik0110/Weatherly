import React from 'react';
import TenDayWeatherCard from './TenDayWeatherCard';

const TenDay = () => {
  const children = [];

  for (let i = 0; i < 10; i++) {
    children.push(<TenDayWeatherCard className="tenDayCard"
                                     key={i}/>);
  }

  return (
    <div className="TenDay">
      {children}
    </div>
  );
};

export default TenDay;
