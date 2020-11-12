/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      registrationErrors: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('handle change', event);
  }

  handleSubmit(event) {
    console.log('form submitted');
    event.preventDefault();
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} required />
          <input type="password" name="password_confirmation" placeholder="Password confirmation" value={passwordConfirmation} onChange={this.handleChange} required />
        </form>
      </div>
    );
  }
}
export default Registration;
