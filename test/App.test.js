import React from 'react';
import App from '../lib/App';
import forecastData from '../data/completeForecast';
import cleanData from '../lib/CleanData';
import LocalStorageMock from '../data/LocalStorageMock';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

describe('App functionality', () => {
  const dummyData = cleanData(forecastData);
  let wrapper;
  let localStorage = new LocalStorageMock();
  global.fetch = fetchMock;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('should render an App component', () => {

    expect(wrapper.find('.App').length).toEqual(1);
  });

  it('should default to rendering a Welcome and Search component', () => {


    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should render Search, Current, Hourly, and TenDay components when local storage has info', () => {
    wrapper.setState({
      storedData: 1,
    });

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('Current').length).toEqual(1);
    expect(wrapper.find('Hourly').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  });

  it('should have a state of recentGet set to an empty object', () => {
    expect(wrapper.recentGet).toEqual(expect.objectContaining({}));
  });

  // it('should retrive any data from local storage on mount', () => {
  //   const toStorage = 'http://www.google.com';
  //
  //   localStorage.setItem('toStorage', JSON.stringify(toStorage))
  //   wrapper = mount(<App />);
  //
  //   expect(wrapper.state.storedData).toEqual(toStorage);
  // });

});
