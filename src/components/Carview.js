/* eslint-disable no-useless-concat */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FaRegSun, FaAngleRight,
} from 'react-icons/fa';
import { connect, ReactReduxContext } from 'react-redux';
import { getItems } from '../actions/index';
import Logo from './Logo';
import Footer from './Footer';
import NavBar from './Navbar';
import '../styles/carview.css';

const Carview = props => {
  const [, rerender] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => rerender(null), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const handleChange = () => {
    const { history } = props;
    history.push('/configue');
  };

  const { getItems } = props;
  getItems();
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        const { match } = props;
        const { params } = match;
        const id = params.model_id;
        const newCar = [];
        const nowState = store.getState();
        nowState.getAppointments.items.map(value => {
          if (value.id === parseInt(id, 10)) {
            newCar.push(value);
          }
          return newCar;
        });
        const img = newCar[0] === undefined ? (<div className="loading">Loading</div>) : (
          <img
            alt="img"
            className="itemimage"
            src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${newCar[0].id}.webp`}
          />
        );
        const display = newCar[0] !== undefined
          ? (
            <div className="carveiw">
              <div className="carim">
                {img}
              </div>
              <div className="cardetails">
                <p className="carname">
                  {newCar[0].name}
                </p>
                <p className="upon">$3000 deposit upon purchase</p>
                <p className="reviewsContainer">
                  Reviews:&nbsp;
                  {newCar[0].reviews}
                </p>
                <p className="modelContainer">
                  Model:&nbsp;
                  {newCar[0].model}
                </p>
                <div>
                  <p className="total">
                    Total amount payable&nbsp;
                    {newCar[0].price}
                  </p>
                </div>
                <div>
                  <Link
                    to={{
                      pathname: '/book/' + `${id}`,
                      state: { fromDashboard: true },
                    }}
                    className="buttonbook"
                  >
                    Book
                  </Link>
                </div>
                <button
                  type="button"
                  onClick={handleChange}
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
      }}
    </ReactReduxContext.Consumer>
  );
};

Carview.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  params: PropTypes.string,
  model_id: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

Carview.defaultProps = {
  match: {},
  params: '',
  model_id: '1',
};

const mapStateToProps = state => ({ items: state.items });
export default connect(mapStateToProps, { getItems })(Carview);
