import React from 'react';
import Search from '../lib/Search';
import forecastData from '../data/completeForecast';
import cleanData from '../lib/CleanData';
import { shallow, mount } from 'enzyme';
let wrapper;


describe('Search functionality with shallow', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Search />
    );
  });

  it('should render an Search component', () => {
    expect(wrapper.find('.Search').length).toEqual(1);
  });

  it('should render an input box', () => {
    expect(wrapper.find('input')).toBeDefined();
  });

  it('sohuld render a button', () => {
    expect(wrapper.find('button')).toBeDefined()
  });
});

describe('Search functionality with mount', () => {
  beforeEach(() => {
    wrapper = mount(
      <Search />
    );
  });

  it('should have default state', () => {
    expect(wrapper.state('weatherSearchInput')).toEqual('');
  });

  it('should change state of Search when input is received', () => {
    const userInput = wrapper.find('input');

    expect(wrapper.state('weatherSearchInput')).toEqual('');
    const newInput = { target: { value: 'Arrakis' } };

    userInput.simulate('change', newInput);
    expect(wrapper.state('weatherSearchInput')).toEqual('Arrakis');
  });

  it('should fire a funciton on button click', () => {
    const ghostFunction = jest.fn();
    wrapper = mount(<Search searchWeather={ghostFunction}/>);
    console.log(wrapper.debug());
    const userButton = wrapper.find('button');

    userButton.simulate('click');

    expect(ghostFunction).toHaveBeenCalledTimes(1);
  });
});
