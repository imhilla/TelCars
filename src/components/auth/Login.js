/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSuccessfulAuth(data) {
    const { handleLogin, history } = this.props;
    handleLogin(data);
    history.push('/');
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    axios.post('/sessions', {
      user: {
        email,
        password,
      },
    }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          this.handleSuccessfulAuth(response.data);
        }
      });
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="welcomeContainer">
        <div className="loginwelcome">
          <h1>Welcome back</h1>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off" className="loginpage">
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} autoComplete="off" required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} autoComplete="off" required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

Login.defaultProps = {
  handleLogin: {},
};
export default Login;
