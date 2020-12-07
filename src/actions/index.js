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
