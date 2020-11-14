/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Dashboard from './Dashboard';
import Welcome from './Welcome';
import Login from './auth/Login';
import Registration from './auth/Registration';
import Latest from './Latest';
import Life from './Lifestyle';
import Shop from './Shop';
import Book from './Book';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true }).then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
        this.setState({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
        });
      } else if (!response.data.logged_in && this.state.loggedInStatus === 'LOGGED_IN') {
        this.setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        });
      }
    }).catch(error => {
      console.log(error);
    });
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

  render() {
    return (
      <div className="App">
        <Router>
          {/* <nav>
            <ul>
              <Link to="/">WELCOME</Link>
              <Link to="/">HOME</Link>
              <Link to="/">LIFESTYLE & HEALTH</Link>
              <Link to="/">SHOP</Link>
              <Link to="/">BOOK APPOINTMENT</Link>
              <Link to="/">ABOUT</Link>
            </ul>
          </nav> */}
          {
            this.state.loggedInStatus === 'LOGGED_IN' ? (
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home
                      {...props}
                      loggedInStatus={this.state.loggedInStatus}
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
                    />
                  )}
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
                      loggedInStatus={this.state.loggedInStatus}
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
                      loggedInStatus={this.state.loggedInStatus}
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
                      loggedInStatus={this.state.loggedInStatus}
                      handleLogin={this.handleLogin}
                      handleLogout={this.handleLogout}
                    />
                  )}
                />
              </Switch>
            )
          }
          {/* <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Welcome
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                />
              )}
            />

            <Route
              exact
              path="/home"
              render={props => (
                <Home
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
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
                  loggedInStatus={this.state.loggedInStatus}
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
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                />
              )}
            />
          </Switch> */}
        </Router>
      </div>
    );
  }
}

export default App;
