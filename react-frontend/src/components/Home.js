/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import NavBar from './Navbar';
import './home.css';
import Logo from './Logo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Latest from './Latest';
import Life from './Lifestyle';
import Shop from './Shop';
import Book from './Book';
// import Login from './auth/Login';
// import Logout from './auth/Logout';
// import Registration from './auth/Registration';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  handleLogoutClick() {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(error => {
        console.log('logout errors', error);
      });
    this.props.handleLogout();
  }

  render() {
    return (
      <div className="home">
        <div>
          <Logo />
          <NavBar />
        </div>
        <div>
          <h1>Other items</h1>
          <Router>
            <Switch>
              <Route
                exact
                path="/latest"
                render={props => (
                  <Latest
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/lifstyle"
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
                path="/shop"
                render={props => (
                  <Book
                    {...props}
                  />
                )}
              />
            </Switch>
          </Router>
        </div>
        {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
        {/* <Logout /> */}
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        {/* <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        <div />
        {/* <Router>
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
          </Switch>
        </Router> */}
      </div>
    );
  }
}
export default Home;
