import React from 'react';
import { mount } from 'enzyme';
import '../../../setupTests';
import App from '../../App';

it('works', () => {
  const wrap = mount(<App />);
  expect(wrap).toMatchSnapshot();
});
