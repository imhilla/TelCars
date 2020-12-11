import login from '../../../reducers/allreducers';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'LOGIN' };
    const initialState = { appointments: [], loading: true };

    expect(login(undefined, action)).toEqual(initialState);
  });
});
