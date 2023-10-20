import * as fromActions from './actions';

describe('User Actions', () => {
  it('should create an action to load user', () => {
    const action = new fromActions.LoadUser();
    expect(action.type).toEqual(fromActions.LOAD_USER);
  });
});
