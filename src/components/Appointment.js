/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import '../styles/appointment.css';

export default function Appointment({ user, userId }) {
  const [models, setModels] = useState([]);
  let [model, setModel] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://infinite-ocean-27248.herokuapp.com/items', { withCredentials: true },
      );
      setModels(result.data);
    };

    fetchData();
  }, []);
  const locations = ['LOCATIONS', 'Nairobi', 'Kisumu', 'Mombasa', 'Eldoret', 'Kiambu', 'Migori', 'Isiolo'];

  const renderLocation = locations.map(item => (
    <option key={uuidv4()} value={item}>{item}</option>
  ));

  const allModels = ['All MODELS'];
  models.forEach(value => {
    allModels.push(value.model);
  });

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
    const { username } = user;
    const mymodel = model;
    const date = '11/23/2020';
    const city = location;
    const myuserId = userId;
    axios.post('http://localhost:3001/appointments', {
      appointment: {
        username,
        model: mymodel,
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus elit id tortor
          pulvinar sollicitudin.
          Nam placerat, risus vitae sollicitudin consequat, neque nunc
          vulputate justo, ac volutpat nunc ex elementum enim.
          Donec egestas vestibulum metus, in porttitor nulla facilisis id.
          Vivamus fermentum vitae neque vel blandit.
          Aenean ut mauris at arcu tincidunt vestibulum vel a mi.
          Fusce eget ipsum vitae tortor sollicitudin rutrum
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
  user: PropTypes.string,
  userId: PropTypes.string,
};

Appointment.defaultProps = {
  userId: 18,
  user: '',
};
