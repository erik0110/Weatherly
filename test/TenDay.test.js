import React from 'react';
import TenDay from '../lib/TenDay';
import forecastData from '../data/completeForecast';
import cleanData from '../lib/CleanData';
import { shallow, mount } from 'enzyme';

describe('TenDay functionality', () => {
  const dummyData = cleanData(forecastData);
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <TenDay
        days={dummyData.tenDay}
      />
    );
  });

  it('should render a TenDay component', () => {
    expect(wrapper.find('.TenDay').length).toEqual(1);
  });

  it('should render ten TenDayWeatherCard cards', () => {
    expect(wrapper.find('TenDayWeatherCard').length).toEqual(10);
  });

  it('should render cards with key index values, the first one being an index of zero', () => {
    expect(wrapper.find('TenDayWeatherCard').nodes[0].key).toEqual('0');
  });

  it('should render cards with weather information', () => {
    expect(wrapper.find('TenDayWeatherCard').nodes[1].props.highF).toEqual(dummyData.tenDay[1].high.fahrenheit);
  });
});
