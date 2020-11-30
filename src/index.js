import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
