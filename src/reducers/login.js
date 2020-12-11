function getAppointments(state = {}, action) {
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
    case 'POST_APPOINTMENTS':
      return {
        ...state,
        appointments: action.payload,
      };
    default:
      return state;
  }
}

export default getAppointments;
