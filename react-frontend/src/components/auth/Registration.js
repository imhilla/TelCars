/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import './registration.css';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;
    axios.post('http://localhost:3001/registrations', {
      user: {
        email,
        password,
        password_confirmation,
      },
    }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleSuccessfulAuth(response.data);
        }
      }).catch(error => {
        console.log('registration', error);
      });
    event.preventDefault();
  }

  render() {
    const { email, password, password_confirmation } = this.state;
    return (
      <div>

        <div className="welcomeBack">
          <h1>Welcome back!</h1>
          <p>To keep connected with us, please log in with your personal info</p>
          <button>SIGN IN</button>
        </div>
        <div>
          <div className="createAccount">
            <h1>Create account</h1>
          </div>
          <form onSubmit={this.handleSubmit} className="regForm">
            <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required />
            <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} required />
            <input type="password" name="password_confirmation" placeholder="Password confirmation" value={password_confirmation} onChange={this.handleChange} required />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Registration;
