/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './registration.css';
import image from '../../images/itemimages/teslay.webp';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      username: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleLogin() {
    const { history } = this.props;
    history.push('/login');
  }

  handleSuccessfulAuth(data) {
    const { handleLogin, history } = this.props;
    handleLogin(data);
    history.push('/');
  }

  handleSubmit(event) {
    const {
      email, password, password_confirmation, username,
    } = this.state;
    axios.post('https://infinite-ocean-27248.herokuapp.com/registrations', {
      user: {
        email,
        password,
        password_confirmation,
        username,
      },
    }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          console.log(response);
          this.handleSuccessfulAuth(response.data);
        }
      }).catch(errors => {
        console.log(errors);
      });
    event.preventDefault();
  }

  render() {
    const {
      email, password, password_confirmation, username,
    } = this.state;
    return (
      <div className="welcContainer" style={{ backgroundImage: { image } }}>
        <div className="welcomeBack">
          <h1>Welcome back!</h1>
          <p>To keep connected with us, please log in with your personal info</p>
          <button className="redirectLogin" type="button" onClick={this.handleLogin}>LOG IN</button>
        </div>
        <div className="formContainer">
          <div className="createAccount">
            <h1>Create account</h1>
          </div>
          <form onSubmit={this.handleSubmit} className="regForm">
            <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required />
            <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} required />
            <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} required />
            <input type="password" name="password_confirmation" placeholder="Password confirmation" value={password_confirmation} onChange={this.handleChange} required />
            <button className="regB" type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  handleLogin: PropTypes.func,
  history: PropTypes.objectOf(PropTypes.any),
};

Registration.defaultProps = {
  handleLogin: {},
  history: {},
};
export default Registration;
