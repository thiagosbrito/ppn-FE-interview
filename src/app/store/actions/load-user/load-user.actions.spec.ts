import * as FromUserActions from './load-user.actions';

describe('User Actions', () => {
  it('should create an action to load user', () => {
    const action = new FromUserActions.LoadUser();
    expect(action.type).toEqual(FromUserActions.UserActionTypes.LOAD_USER);
  });
});
