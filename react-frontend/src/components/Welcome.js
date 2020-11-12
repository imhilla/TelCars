/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextImage: false,
    };
  }

  render() {
    return (
      <div>Hello world</div>
    );
  }
}
export default Welcome;
