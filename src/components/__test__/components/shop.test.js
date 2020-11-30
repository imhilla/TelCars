import React from 'react';
import { mount } from 'enzyme';
import '../../../setupTests';
import Shop from '../../../containers/Shop';

it('works', () => {
  const wrap = mount(<Shop />);
  expect(wrap).toMatchSnapshot();
});
