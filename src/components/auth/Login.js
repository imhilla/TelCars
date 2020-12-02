/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { login } from '../../actions/index';
import './registration.css';

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
    login(data.user.username);
    handleLogin(data.user);
    history.push('/');
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    axios.post('https://infinite-ocean-27248.herokuapp.com/sessions', {
      user: {
        email,
        password,
      },
    }, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          this.handleSuccessfulAuth(response.data);
        }
      });
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="welcContainer">
        <div className="welcomeBack">
          <h1>Welcome back</h1>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off" className="regForm">
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} autoComplete="off" required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} autoComplete="off" required />
          <button className="redirectLogin" type="submit">LOG IN</button>
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

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  login: login => dispatch(login(login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
