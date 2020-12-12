import getAppointments from '../../../reducers/allreducers';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'GET_APPOINTMENTS' };
    const initialState = {};

    expect(getAppointments(undefined, action)).toEqual(initialState);
  });
});
