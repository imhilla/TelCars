/* eslint-disable no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import {
  BrowserRouter,
} from 'react-router-dom';
import '../../../setupTests';
import Book from '../../../containers/Book';

it('works', () => {
  const wrap = mount(
    <BrowserRouter>
      <Book />
    </BrowserRouter>,
  );
  expect(wrap).toMatchSnapshot();
});
