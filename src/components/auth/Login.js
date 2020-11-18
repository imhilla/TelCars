/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginErrors: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/');
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    axios.post('http://localhost:3001/sessions', {
      user: {
        email,
        password,
      },
    }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          console.log(this.props);
          this.handleSuccessfulAuth(response.data);
        }
      }).catch(error => {
        console.log('registration', error);
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
export default Login;
