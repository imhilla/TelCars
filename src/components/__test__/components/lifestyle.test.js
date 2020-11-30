/* eslint-disable no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import '../../../setupTests';
import Lifestyle from '../../../containers/Lifestyle';

it('works', () => {
  const wrap = mount(<Lifestyle />);
  expect(wrap).toMatchSnapshot();
});
