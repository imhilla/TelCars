/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function BookAppointment({ user, userId, history }) {
  let [models, setModels] = useState([]);
  let [model, setModel] = useState('');
  const [location, setLocation] = useState('');
  let [myid, setMyid] = useState('');
  let [startDate, setDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://infinite-ocean-27248.herokuapp.com/items', { withCredentials: true },
      );
      models = result.data;
      setModels(models);
    };
    fetchData();
  }, []);
  const locations = ['LOCATIONS', 'Nairobi', 'Kisumu', 'Mombasa', 'Eldoret', 'Kiambu', 'Migori', 'Isiolo'];

  const renderLocation = locations.map(item => (
    <option key={uuidv4()} value={item}>{item}</option>
  ));

  const item = history.location.pathname;
  for (let i = 0; i < item.length; i += 1) {
    if (!Number.isNaN((parseInt(item.charAt(i), 10)))) {
      myid = parseInt(item.charAt(i), 10);
    }
  }

  models.forEach(value => {
    if (value.id === myid) {
      model = value.model;
    }
  });

  const handleLocationChange = e => {
    const mylocation = e.target.value;
    setLocation(mylocation);
  };

  const handleChange = date => {
    setDate(date);
  };

  const handleSubmission = event => {
    const { username } = user;
    const mymodel = model;
    const date = '11/23/2020';
    const city = location;
    const myuserId = userId;
    axios.post('https://infinite-ocean-27248.herokuapp.com/appointments', {
      appointment: {
        username,
        model,
        date,
        city,
        userId: myuserId,
      },
    }, { withCredentials: true });
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
          onChange={handleLocationChange}
          className="locations"
        >
          {renderLocation}
        </select>
        <DatePicker selected={startDate} onChange={handleChange} />
        <button type="button" className="appbutton" onClick={handleSubmission}>
          Book now
        </button>
      </div>
    </div>
  );
}

BookAppointment.propTypes = {
  user: PropTypes.string,
  userId: PropTypes.string,
};

BookAppointment.defaultProps = {
  userId: 18,
  user: '',
};
