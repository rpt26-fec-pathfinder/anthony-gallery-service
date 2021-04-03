import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Gallery from '../components/Gallery.jsx'

Enzyme.configure({ adapter: new Adapter() });


test('contains data-test attribute component-app for testing', () => {
  const wrapper = shallow(<Gallery />);
  const appComponent = wrapper.find("[data-test='component-app']");

  expect(appComponent.length).toBe(1);
})


