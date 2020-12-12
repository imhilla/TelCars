/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ReactDOM from 'react-dom';
import '../../../setupTests';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../../../containers/Home';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});

it('works', () => {
  const wrap = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,

  );
  expect(wrap).toMatchSnapshot();
});
