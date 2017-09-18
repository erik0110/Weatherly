const cleanData = (weatherData) => {
  const currentDay = weatherData.forecast.simpleforecast.forecastday[0];

  return {
    currentCity: weatherData.current_observation.display_location.full,
    currentTemp: weatherData.current_observation.temp_f,
    currentDay: currentDay.date.pretty,
    currentCondition: currentDay.conditions,
    lowTemp: currentDay.low.fahrenheit,
    highTemp: currentDay.high.fahrenheit,
    description: weatherData.forecast.txt_forecast.forecastday[0].fcttext,
    hourly: weatherData.hourly_forecast.splice(0, 7),
    tenDay: weatherData.forecast.simpleforecast.forecastday,
  };
};


export default cleanData;
