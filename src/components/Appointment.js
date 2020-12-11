/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { getItems, postAppointments } from '../actions/index';
import '../styles/appointment.css';

export default function Appointment({ user, userId }) {
  const currentItems = useSelector(state => state.getAppointments);
  const dispatch = useDispatch();
  const [, rerender] = useState(false);

  let [model, setModel] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    dispatch(getItems());

    const timer1 = setTimeout(() => rerender(null), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const locations = ['LOCATIONS', 'Nairobi', 'Kisumu', 'Mombasa', 'Eldoret', 'Kiambu', 'Migori', 'Isiolo'];

  const renderLocation = locations.map(item => (
    <option key={uuidv4()} value={item}>{item}</option>
  ));

  const allModels = ['All MODELS'];
  if (currentItems.items) {
    currentItems.items.forEach(value => {
      allModels.push(value.model);
    });
  }

  const renderModels = allModels.map(item => (
    <option
      key={uuidv4()}
      value={item}
    >
      {item}
    </option>
  ));

  const handleModelChange = e => {
    model = e.target.value;
    setModel(model);
  };

  const handleLocationChange = e => {
    const mylocation = e.target.value;
    setLocation(mylocation);
  };

  const handleSubmission = event => {
    const username = user;
    const mymodel = model;
    const date = '11/23/2020';
    const city = location;
    const myuserId = userId;
    const appointment = {
      appointment: {
        username,
        model: mymodel,
        date,
        city,
        user_id: myuserId,
      },
    };
    dispatch(postAppointments(appointment));
    event.preventDefault();
  };

  return (
    <div className="appointmentContainer">
      <h1>
        B&nbsp;&nbsp; o &nbsp;&nbsp;o&nbsp;&nbsp; k&nbsp;&nbsp; &nbsp;&nbsp;a
        &nbsp;&nbsp;&nbsp;&nbsp;t &nbsp;&nbsp;e&nbsp;&nbsp;
        s&nbsp;&nbsp; t &nbsp;-&nbsp; r&nbsp;&nbsp; i&nbsp;&nbsp; d&nbsp;&nbsp; e
      </h1>
      <div className="hardline" />
      <div className="appointmentcontent">
        <p>
          Please let us know what you would like to do so we can help meet your needs.
          Book an appointment.
        </p>
      </div>
      <div className="booksection">
        <select
          onChange={handleModelChange}
          className="models"
        >
          {renderModels}
        </select>
        <select
          onChange={handleLocationChange}
          className="locations"
        >
          {renderLocation}
        </select>
        <button type="button" className="appbutton" onClick={handleSubmission}>
          Book now
        </button>
      </div>
    </div>
  );
}

Appointment.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  userId: PropTypes.string,
};

Appointment.defaultProps = {
  userId: undefined,
  user: {},
};
