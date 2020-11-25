/* eslint-disable react/button-has-type */
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
import { Link } from 'react-router-dom';
import {
  FaRegSun, FaAngleRight,
} from 'react-icons/fa';
import Logo from './Logo';
import Footer from './Footer';
import NavBar from './Navbar';
import '../styles/carview.css';

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
    axios.get('https://infinite-ocean-27248.herokuapp.com/items', { withCredentials: true })
      .then(response => {
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
    const img = this.state.car.id === undefined ? (<div className="loading">Loading</div>) : (
      <img
        className="itemimage"
        src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${this.state.car.id}.webp`}
      />
    );
    const display = this.state.car !== undefined
      ? (
        <div className="carveiw">
          <div className="carim">
            {img}
          </div>
          <div className="cardetails">
            <p className="carname">
              {this.state.car.name}
            </p>
            <p className="upon">$3000 deposit upon purchase</p>
            <p className="reviewsContainer">
              Reviews:&nbsp;
              {this.state.car.reviews}
            </p>
            <p className="modelContainer">
              Model:&nbsp;
              {this.state.car.model}
            </p>
            <div>
              <p className="total">
                Total amount payable&nbsp;
                {this.state.car.price}
              </p>
            </div>
            <div>
              <Link
                to={{
                  pathname: '/book',
                  state: { fromDashboard: true },
                }}
                className="buttonbook"
              >
                Book
              </Link>
            </div>
            <button className="configure">
              <FaRegSun className="regsum" />
              <div className="config">Configure</div>
              <FaAngleRight className="rightfa" />
            </button>
          </div>
        </div>
      )
      : (<div className="loading">Loading</div>);

    return (
      <div className="carviewContainer">
        <div className="homeContainer">
          <Logo className="logoo" />
          <NavBar className="mynav" />
          <Footer className="footerr" />
        </div>
        {display}
        <div />
      </div>
    );
  }
}
export default Carview;
