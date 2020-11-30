import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { mount } from 'enzyme';
import '../../../setupTests';
import Shop from '../../../containers/Shop';

it('works', () => {
  const wrap = mount(
    <BrowserRouter><Shop /></BrowserRouter>,

  );
  expect(wrap).toMatchSnapshot();
});
