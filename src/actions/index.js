/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
  },
};

export const getAppointments = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/appointments', config, { withCredentials: true });
    console.log(res.data);
    dispatch({
      type: 'GET_APPOINTMENTS',
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
