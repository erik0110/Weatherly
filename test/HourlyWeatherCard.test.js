import React from 'react';
import HourlyWeatherCard from '../lib/HourlyWeatherCard';
import forecastData from '../data/completeForecast';
import cleanData from '../lib/CleanData';
import { shallow, mount } from 'enzyme';

describe('HourlyWeatherCard functionality', () => {
  const dummyData = cleanData(forecastData);
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <HourlyWeatherCard
        className="hourlyCard"
        time={dummyData.hourly[0].FCTTIME.civil}
        weatherIcon={dummyData.hourly[0].icon_url}
        iconAlt={dummyData.hourly[0].icon}
        temp={dummyData.hourly[0].temp.english}
      />
    );
  });

  it('should render a HourlyWeatherCard component', () => {
    expect(wrapper.find('.hourlyCard').length).toEqual(1);
  });

  it('should have weather information on weather cards', () => {
    let icon = wrapper.find('.weatherIcon')
    expect(icon.prop('src')).toEqual(dummyData.hourly[0].icon_url);
  });
});
