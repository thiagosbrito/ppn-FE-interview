import { Action } from '@ngrx/store';
import { User } from "../../../interfaces/user";

export enum UserListActionTypes {
  LOAD_USER_LIST = '[User] Load User list',
  LOAD_USER_LIST_SUCCESS = '[User] Load User list Success',
  LOAD_USER_LIST_FAIL = '[User] Load User list Fail',
}

export class LoadUserList implements Action {
  readonly type: string = UserListActionTypes.LOAD_USER_LIST;

  constructor(public payload?: { list: Array<User> }) {}
}

export class LoadUserListFail implements Action {
  readonly type: string = UserListActionTypes.LOAD_USER_LIST_FAIL;
  constructor(public payload: { error: string }) {}
}

export class LoadUserListSuccess implements Action {
  readonly type: string = UserListActionTypes.LOAD_USER_LIST_SUCCESS;

  constructor(public payload: { list: Array<User> }) {}
}

export type UserListActions = LoadUserList | LoadUserListFail | LoadUserListSuccess;
