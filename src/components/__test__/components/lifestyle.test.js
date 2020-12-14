import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { mount } from 'enzyme';
import '../../../setupTests';
import Lifestyle from '../../../containers/Lifestyle';

it('works', () => {
  const wrap = mount(
    <BrowserRouter>
      <Lifestyle />
    </BrowserRouter>,

  );
  expect(wrap).toMatchSnapshot();
});
