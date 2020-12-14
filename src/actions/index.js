/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
  },
};

export const getAppointments = () => async dispatch => {
  try {
    const res = await axios.get('https://infinite-ocean-27248.herokuapp.com/appointments', config, { withCredentials: true });
    dispatch({
      type: 'GET_APPOINTMENTS',
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
export const getItems = () => async dispatch => {
  try {
    const res = await axios.get('https://infinite-ocean-27248.herokuapp.com/items', config, { withCredentials: true });
    dispatch({
      type: 'GET_ITEMS',
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const postAppointments = appointments => async dispatch => {
  try {
    const res = await axios.post(
      'https://infinite-ocean-27248.herokuapp.com/appointments',
      appointments,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }, { withCredentials: true },
    );
    dispatch({
      type: 'POST_APPOINTMENTS',
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
