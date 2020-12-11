/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect, ReactReduxContext } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import { getAppointments } from '../actions/index';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../styles/appointment.css';

function BookAppointment({
  user, userId, history, getAppointments,
}) {
  let [models, setModels] = useState([]);
  let [model, setModel] = useState('');
  const [location, setLocation] = useState('');
  let [myid, setMyid] = useState('');
  let [startDate, setDate] = useState(new Date());
  let [success, setSuccess] = useState('We would be glad if you set an appointment with us');
  let [myappointments, setAppointments] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };

    const fetchData = async () => {
      const result = await axios(
        // http://localhost:3001
        'http://localhost:3001/items', config, { withCredentials: true },
        // 'https://infinite-ocean-27248.herokuapp.com/items', config, { withCredentials: true },
      );
      models = result.data;
      setModels(models);
    };
    fetchData();
    myappointments = getAppointments();
    setAppointments(myappointments);
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
    const date = startDate;
    const city = location;
    const myuserId = userId;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },

    };

    axios.post(
      // http://localhost:3001
      'http://localhost:3001/appointments',
      // 'https://infinite-ocean-27248.herokuapp.com/appointments',
      {
        appointment: {
          username,
          model,
          date,
          city,
          userId: myuserId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },

      },
      { withCredentials: true },
    ).then(response => {
      setSuccess(response.data.success);
    });
    event.preventDefault();
  };
  const mysuccess = success;
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        const nowState = store.getState();
        return (
          <div className="appointmentContainer">
            <h1>
              B&nbsp;&nbsp; o &nbsp;&nbsp;o&nbsp;&nbsp; k&nbsp;&nbsp; &nbsp;&nbsp;a
              &nbsp;&nbsp;&nbsp;&nbsp;t &nbsp;&nbsp;e&nbsp;&nbsp;
              s&nbsp;&nbsp; t &nbsp;-&nbsp; r&nbsp;&nbsp; i&nbsp;&nbsp; d&nbsp;&nbsp; e
            </h1>
            <div className="hardline" />
            <div className="appointmentcontent">
              <p>{mysuccess}</p>
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
            <h1>Your appointments</h1>

            <div className="appointmentsContainer">
              {
                nowState.getAppointments.appointments.length > 0
                  ? nowState.getAppointments.appointments.map((value, index) => (
                    <div key={uuidv4()} className="appointments">
                      <h3>{value.model}</h3>
                      <p>{value.date}</p>
                      <p>{value.city}</p>
                    </div>
                  )) : <div className="appointments">Loading your appointments..</div>
              }
            </div>
          </div>
        );
      }}
    </ReactReduxContext.Consumer>
  );
}

BookAppointment.propTypes = {
  user: PropTypes.string,
  userId: PropTypes.number,
};

BookAppointment.defaultProps = {
  userId: 18,
  user: '',
};

const mapStateToProps = state => ({ appointments: state.appointments });

export default connect(mapStateToProps, { getAppointments })(BookAppointment);
