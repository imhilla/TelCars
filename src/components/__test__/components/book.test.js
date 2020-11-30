/* eslint-disable no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import '../../../setupTests';
import Book from '../../../containers/Book';

it('works', () => {
  const wrap = mount(<Book />);
  expect(wrap).toMatchSnapshot();
});
