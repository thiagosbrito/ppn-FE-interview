import * as fromActions from './actions';
import { userReducer } from './reducer';

describe('User Reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = userReducer(undefined, action);
    expect(state).toEqual({});
  });

  it('should load user', () => {
    const action = new fromActions.LoadUser();
    const state = userReducer({ name: 'Jane' }, action);
    expect(state.name).toEqual('Alice');
  });
});
