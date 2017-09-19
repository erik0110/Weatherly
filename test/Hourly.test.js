import React from 'react';
import Hourly from '../lib/Hourly';
import forecastData from '../data/completeForecast';
import cleanData from '../lib/CleanData';
import { shallow, mount } from 'enzyme';

describe('Hourly functionality', () => {
  const dummyData = cleanData(forecastData);
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Hourly
        hours={dummyData.hourly}
      />
    );
  });

  it('should render an Hourly component', () => {
    expect(wrapper.find('.Hourly').length).toEqual(1);
  });

  it('should render seven HourlyWeatherCard cards', () => {
    expect(wrapper.find('HourlyWeatherCard').length).toEqual(7);
  });

  it('should render cards with key index values, the first one being an index of zero', () => {
    expect(wrapper.find('HourlyWeatherCard').nodes[0].key).toEqual("0");
  });

  it('should render cards with weather information', () => {
    expect(wrapper.find('HourlyWeatherCard').nodes[1].props.temp).toEqual(dummyData.hourly[1].temp.english);
  });
});
