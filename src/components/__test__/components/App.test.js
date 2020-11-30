import React from 'react';
import { mount } from 'enzyme';
import '../../../setupTests';
// import renderer from 'react-test-renderer';
import {
  BrowserRouter,
} from 'react-router-dom';
import App from '../../App';

it('works', () => {
  const wrap = mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  expect(wrap).toMatchSnapshot();
});
