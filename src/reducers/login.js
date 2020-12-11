const initialState = {
  appointments: [],
  items: [],
};

function getAppointments(state = initialState, action) {
  switch (action.type) {
    case 'GET_APPOINTMENTS':
      return {
        ...state,
        appointments: action.payload,
      };
    case 'GET_ITEMS':
      console.log(action.payload);
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

export default getAppointments;
