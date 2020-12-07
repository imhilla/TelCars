const initialState = {
  appointments: [],
  loading: true,
};

function getAppointments(state = initialState, action) {
  switch (action.type) {
    case 'GET_APPOINTMENTS':
      return {
        ...state,
        appointments: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default getAppointments;
