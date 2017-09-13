import React from 'react';
import Current from '../lib/Current.js';
import forecastData from '../practice-data/forecastData.js';
import { shallow, mount } from 'enzyme';

describe('Current functionality', () => {
  const dummyData = forecastData
  const location = shallow(
    <Current
      locProp={dummyData.current_observation.display_location.full}
      tempProp={dummyData.current_observation.temp_f}
      dayProp={dummyData.forecast.simpleforecast.forecastday[1].date.pretty}
      conditionProp={dummyData.forecast.simpleforecast.forecastday[1].conditions}
      lowProp={dummyData.forecast.simpleforecast.forecastday[1].low.fahrenheit}
      highProp={dummyData.forecast.simpleforecast.forecastday[1].high.fahrenheit}
      descriptionProp={dummyData.forecast.txt_forecast.forecastday[1].fcttext}
    />
  );


  it('should identify the current city, temp, day, and condition', () => {
    let city = location.find('.currentCity');
    let temp = location.find('.currentTemp');
    let day = location.find('.currentDay');
    let condition = location.find('.currentCondition');

    expect(city.text()).toEqual("Current City: " + dummyData.current_observation.display_location.full);
    expect(temp.text()).toEqual("Current Temp: " + dummyData.current_observation.temp_f);
    expect(day.text()).toEqual("Current Day: " + dummyData.forecast.simpleforecast.forecastday[1].date.pretty);
    expect(condition.text()).toEqual("Current Condition: " + dummyData.forecast.simpleforecast.forecastday[1].conditions);
  });

  it('should be able to identify the high and low for the day', () => {
    let low = location.find('.lowTemp');
    let high = location.find('.highTemp');

    expect(low.text()).toEqual("Low: " + dummyData.forecast.simpleforecast.forecastday[1].low.fahrenheit);
    expect(high.text()).toEqual("High: " + dummyData.forecast.simpleforecast.forecastday[1].high.fahrenheit);
  });

  it('should be able to describe the overall daily conditions', () => {
    let description = location.find('.description');


    expect(description.text()).toEqual("Forecast description: " + dummyData.forecast.txt_forecast.forecastday[1].fcttext);
  });
});
