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
import Home from './Home';
import Dashboard from './Dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data,
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} loggedInStatus={this.state.loggedInStatus} handleLogin={this.handleLogin} />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={props => (
                <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
