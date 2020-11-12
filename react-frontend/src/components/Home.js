/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Registration from './auth/Registration';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration />
      </div>
    );
  }
}
export default Home;
