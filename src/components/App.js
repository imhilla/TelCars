/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Home from '../containers/Home';
import Carview from './Carview';
import BookAppointment from './bookappointment';
import Welcome from './Welcome';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Registration from './auth/Registration';
import Life from '../containers/Lifestyle';
import Configure from './Configure';
import Shop from '../containers/Shop';
import Book from '../containers/Book';

export default function App() {
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});
  const [user_id, setUserId] = useState('');

  const handleLogin = data => {
    const log = 'LOGGED_IN';
    setLoggedInStatus(log);
    setUser(data);
    localStorage.setItem('token', data.token);
  };

  const handleLogout = () => {
    const logout = 'NOT_LOGGED_IN';
    setLoggedInStatus(logout);
    setUser({});
    localStorage.clear();
  };

  return (
    <div className="App">
      <Router>
        {
          localStorage.length === 1 ? (
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    loggedInStatus={loggedInStatus}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                  />
                )}
              />
              <Route
                exact
                path="/lifestyle"
                render={props => (
                  <Life
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/book/:model_id"
                render={props => (
                  <BookAppointment
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/shop"
                render={props => (
                  <Shop
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/book"
                render={props => (
                  <Book
                    {...props}
                    user={user}
                    user_id={user_id}
                  />
                )}
              />
              <Route
                path="/model/:model_id"
                component={Carview}
              />
              <Route
                exact
                path="/configure"
                component={Configure}
              />

            </Switch>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Welcome
                    {...props}
                    loggedInStatus={loggedInStatus}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={props => (
                  <Registration
                    {...props}
                    loggedInStatus={loggedInStatus}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                  />
                )}
              />
              <Route
                exact
                path="/login"
                render={props => (
                  <Login
                    {...props}
                    loggedInStatus={loggedInStatus}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                  />
                )}
              />
            </Switch>
          )
        }
      </Router>
    </div>
  );
}
