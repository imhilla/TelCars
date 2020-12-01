/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const id = params.model_id;
    axios.get('https://infinite-ocean-27248.herokuapp.com/items', { withCredentials: true })
      .then(response => {
        response.data.map(value => {
          if (value.id === parseInt(id, 10)) {
            this.setState({
              car: value,
            });
          }
          return value;
        });
      });
  }

  handleChange(carid) {
    const { history } = this.props;
    console.log(carid);
    history.push('/bookappointment');
  }

  render() {
    const { car } = this.state;
    const img = car.id === undefined ? (<div className="loading">Loading</div>) : (
      <img
        alt="img"
        className="itemimage"
        src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${car.id}.webp`}
      />
    );
    const display = car !== undefined
      ? (
        <div className="carveiw">
          <div className="carim">
            {img}
          </div>
          <div className="cardetails">
            <p className="carname">
              {car.name}
            </p>
            <p className="upon">$3000 deposit upon purchase</p>
            <p className="reviewsContainer">
              Reviews:&nbsp;
              {car.reviews}
            </p>
            <p className="modelContainer">
              Model:&nbsp;
              {car.model}
            </p>
            <div>
              <p className="total">
                Total amount payable&nbsp;
                {car.price}
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
            <button
              type="button"
              onClick={this.handleChange(car.id)}
              className="configure"
            >
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

Carview.propTypes = {
  match: PropTypes.func,
  params: PropTypes.string,
  model_id: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

Carview.defaultProps = {
  match: {},
  params: '',
  model_id: 1,
};
export default Carview;
