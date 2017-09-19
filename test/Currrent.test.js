import React from 'react';
import Current from '../lib/Current';
import forecastData from '../data/completeForecast';
import cleanData from '../lib/CleanData';
import { shallow, mount } from 'enzyme';

describe('Current functionality', () => {
  const dummyData = cleanData(forecastData);
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Current
        current={dummyData.current}
      />
    );
  });

  it('should render a Current component', () => {
    expect(wrapper.find('.Current').length).toEqual(1);
  });

  it('should identify the current city, temp, day, and condition', () => {
    expect(wrapper.find('.currentCity').text()).toEqual(dummyData.current.currentCity);
    expect(wrapper.find('.currentTemp').text()).toEqual(dummyData.current.currentTemp + '°F & ' + dummyData.current.currentCondition);
    expect(wrapper.find('.currentDay').text()).toEqual('It is ' + dummyData.current.currentDay + ' in');
  });

  it('should be able to identify the high and low for the day', () => {
    expect(wrapper.find('.lowTemp').text()).toEqual(dummyData.current.lowTemp);
    expect(wrapper.find('.highTemp').text()).toEqual(dummyData.current.highTemp);
  });

  it('should be able to describe the overall daily conditions', () => {
    expect(wrapper.find('.description').text()).toEqual(dummyData.current.description);
  });
});
