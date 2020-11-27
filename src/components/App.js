/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Home from '../containers/Home';
import Carview from './Carview';
import Welcome from './Welcome';
import Login from './auth/Login';
import Registration from './auth/Registration';
import Life from '../containers/Lifestyle';
import Configure from './Configure';
import Shop from '../containers/Shop';
import Book from '../containers/Book';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
      user_id: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data,
    });
  }

  handleLogout() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
  }

  checkLoginStatus() {
    const { loggedInStatus } = this.state;
    axios.get('/logged_in', { withCredentials: true }).then(response => {
      if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
        this.setState({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
          user_id: response.data.user_id,
        });
      } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
        this.setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
          user_id: '',
        });
      }
    });
  }

  render() {
    const { loggedInStatus, user, user_id } = this.state;
    return (
      <div className="App">
        <Router>
          {
            loggedInStatus === 'LOGGED_IN' ? (
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home
                      {...props}
                      loggedInStatus={loggedInStatus}
                      handleLogin={this.handleLogin}
                      handleLogout={this.handleLogout}
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
                      handleLogin={this.handleLogin}
                      handleLogout={this.handleLogout}
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
                      handleLogin={this.handleLogin}
                      handleLogout={this.handleLogout}
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
                      handleLogin={this.handleLogin}
                      handleLogout={this.handleLogout}
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
}

export default App;
