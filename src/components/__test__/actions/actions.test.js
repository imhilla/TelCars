import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { login } from '../../../actions/index';
import '../../../setupTests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});

describe('test actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('Should dispatches the correct action and payload when loging in', () => {
    const expectedActions = [
      {
        payload: '',
        type: 'LOGIN',
      },
    ];
    store.dispatch(login(''));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
