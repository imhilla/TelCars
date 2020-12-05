import axios from 'axios';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
  },
};

function axiosTest() {
  const promise = axios.get(
    'http://localhost:3001/appointments', config, { withCredentials: true },
  );
  const dataPromise = promise.then(response => response.data);
  return dataPromise;
}

const initialState = {
  appointments: axiosTest().then(data => data),
};

function login(state = initialState, action) {
  switch (action.type) {
    case 'All STATE':
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
}

export default login;
