import * as FromUserListActions from './load-user-list.actions';

describe('User List Actions', () => {
  it('should create an action to load user list', () => {
    const action = new FromUserListActions.LoadUserList();
    expect(action.type).toEqual(FromUserListActions.UserListActionTypes.LOAD_USER_LIST);
  });
});
