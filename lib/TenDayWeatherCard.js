import React from 'react';

const TenDayWeatherCard = (props) => {

  return (
    <div className={props.className}>
      <h3 className="date">{props.month}/{props.date}</h3>
      <img className="weatherIcon"
        src={props.weatherIcon} alt={props.iconAlt}></img>
      <p className="dailyTemps">
        L <span className="lowTemp">{props.lowF}</span>
         H <span className="highTemp">{props.highF}</span>
      </p>
    </div>
  );
};

export default TenDayWeatherCard;
