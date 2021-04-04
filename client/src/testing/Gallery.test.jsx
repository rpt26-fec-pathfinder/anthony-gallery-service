import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Gallery from '../components/Gallery.jsx'

Enzyme.configure({ adapter: new Adapter() });


const setup = () => shallow(<Gallery />)
const findByTestAtrr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('gallery app renders', () => {
  const wrapper = setup();
  const appComponent = findByTestAtrr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
})

test('contains 1 title', () => {
  const wrapper = setup();
  const title = findByTestAtrr(wrapper, 'title');
  expect(title.length).toBe(1);
})

test('contains hub community button', () => {
  const wrapper = setup();
  const hub = findByTestAtrr(wrapper, 'hub');
  expect(hub.length).toBe(1);
})

test('contains 1 main image', () => {
  const wrapper = setup();
  const mainImage = findByTestAtrr(wrapper, 'main');
  expect(mainImage.length).toBe(1);
})

test('contains thumbnail gallery', () => {
  const wrapper = setup();
  const thumbs = findByTestAtrr(wrapper, 'thumbs');
  expect(thumbs.length).toBe(1);
})

test('contains a modal', () => {
  const wrapper = setup();
  const modal = findByTestAtrr(wrapper, 'modal');
  expect(modal.length).toBe(1);
})

test('contains 2 buttons for decrement and increment', () => {
  const wrapper = setup();
  const decBtn = findByTestAtrr(wrapper, 'decrement button');
  const incBtn = findByTestAtrr(wrapper, 'increment button');
  expect(decBtn.text()).toBe('Prev');
  expect(incBtn.text()).toBe('Next');
  expect(decBtn.length).toBe(1);
  expect(incBtn.length).toBe(1);
})

test('message starts at 1', () => {
  const wrapper = setup();
  const message = findByTestAtrr(wrapper, 'message').text();
  expect(message).toBe('1 of 0 screenshots');
})

