import React from 'react';
import cleanData from '../lib/CleanData';
import forecastData from '../data/completeForecast';
import { shallow, mount } from 'enzyme';

describe('cleanData functionality', () => {
  let dummyData = cleanData(forecastData);

  it.only('should be an object', () => {
    expect(dummyData.current.currentCity).toEqual("Denver, CO");
  });

  
});
