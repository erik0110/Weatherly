import React from 'react';
import TenDayWeatherCard from '../lib/TenDayWeatherCard';
import forecastData from '../data/completeForecast';
import cleanData from '../lib/CleanData';
import { shallow, mount } from 'enzyme';

describe('TenDayWeatherCard functionality', () => {
  const dummyData = cleanData(forecastData);
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <TenDayWeatherCard
        className="tenDayCard"
        month={dummyData.tenDay[0].date.month}
        date={dummyData.tenDay[0].date.day}
        weatherIcon={dummyData.tenDay[0].icon_url}
        iconAlt={dummyData.tenDay[0].icon}
        lowF={dummyData.tenDay[0].low.fahrenheit}
        highF={dummyData.tenDay[0].high.fahrenheit}
      />
    );
  });

  it('should render a TenDayWeatherCard component', () => {
    expect(wrapper.find('.tenDayCard').length).toEqual(1);
  });

  it('should have weather information on weather cards', () => {
    let icon = wrapper.find('.weatherIcon')
    expect(icon.prop('alt')).toEqual(dummyData.tenDay[0].icon);
  });
});
