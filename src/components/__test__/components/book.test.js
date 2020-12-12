/* eslint-disable no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '../../../setupTests';
import Book from '../../../containers/Book';

const initialState = {};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let wrapper;
const store = mockStore(initialState);

it('works', () => {
  const wrap = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Book />
      </BrowserRouter>
    </Provider>,
  );
  expect(wrap).toMatchSnapshot();
});
