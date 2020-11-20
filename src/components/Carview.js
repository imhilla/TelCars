/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import Logo from './Logo';
import Footer from './Footer';
import NavBar from './Navbar';

class Carview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const id = params.model_id;
    // console.log(id);
    axios.get('https://infinite-ocean-27248.herokuapp.com/items', { withCredentials: true })
      .then(response => {
        // console.log(response.data);
        response.data.map((value, index) => {
          if (value.id === parseInt(id, 10)) {
            this.setState({
              car: value,
            });
          }
          return value;
        });
      });
  }

  render() {
    const img = this.state.car.id === undefined ? (<div>Loading</div>) : (
      <img
        className="itemsImg"
        src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${this.state.car.id}.webp`}
      />
    );
    const display = this.state.car !== undefined
      ? (
        <div>
          <div>
            {img}
          </div>
          <div>
            <p>{this.state.car.name}</p>
            <p>{this.state.car.reviews}</p>
            <p>{this.state.car.model}</p>
            <p>{this.state.car.price}</p>
          </div>

        </div>
      )
      : (<div>Loading</div>);

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
          {display}
        </div>
        <div />
      </div>
    );
  }
}
export default Carview;
