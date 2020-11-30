import login from '../../../reducers/login';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'LOGIN' };
    const initialState = { username: '' };

    expect(login(undefined, action)).toEqual(initialState);
  });
});
