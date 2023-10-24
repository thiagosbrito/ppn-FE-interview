import * as FromUserActions from './actions/load-user/load-user.actions';
import { userReducer } from './reducer';

const MOCK_USER = {
  id: 3,
  name: 'Jane',
  email: 'jane@email.com',
  dob: '05/03/1976',
  address: {
    street_name: 'string',
    complement: 'string',
    number: 312,
    city: 'string',
    zip_code: 'string',
  }
};

const DEFAULT_STATE = {
  id: 0,
  name: '',
  email: '',
  dob: '',
  address: {
    street_name: '',
    complement: '',
    number: 0,
    city: '',
    zip_code: '',
  },
  error: '',
}

describe('User Reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = userReducer(undefined, action);
    expect(state).toEqual(DEFAULT_STATE as any);
  });

  it('should load user', () => {
    const action = new FromUserActions.LoadUser();
    const state = userReducer(MOCK_USER, action);
    expect(state.name).toEqual(MOCK_USER.name);
  });
});
