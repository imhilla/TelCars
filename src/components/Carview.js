/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Logo from './Logo';
import Footer from './Footer';
import NavBar from './Navbar';

class Carview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const id = params.model_id;
    console.log(id);
  }

  render() {
    return (
      <div>
        <div className="homeContainer">
          <Logo className="logoo" />
          <NavBar className="mynav" />
          <Footer className="footerr" />
        </div>
        <div className="descriptionContainer">
          <h1>LATEST 2020 CAR MODELS</h1>
          <h2>Please select our top lates cars of choice</h2>
        </div>
        <div />
      </div>
    );
  }
}
export default Carview;
