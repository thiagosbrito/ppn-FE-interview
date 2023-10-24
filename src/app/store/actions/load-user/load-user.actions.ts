import { Action } from '@ngrx/store';
import { User } from "../../../interfaces/user";

export enum UserActionTypes {
  LOAD_USER = '[User] Load User',
  LOAD_USER_FAIL = '[User] Load User Fail',
  LOAD_USER_SUCCESS = '[User] Load User Success',
}

export class LoadUser implements Action {
  readonly type: string = UserActionTypes.LOAD_USER;
  constructor(public payload?: { id: number }) {}
}

export class LoadUserFail implements Action {
  readonly type: string = UserActionTypes.LOAD_USER_FAIL;
  constructor(public payload: { error: string }) {}
}

export class LoadUserSuccess implements Action {
  readonly type: string = UserActionTypes.LOAD_USER_SUCCESS;

  constructor(public payload: User) { }
}

export type UserActions = LoadUser | LoadUserSuccess | LoadUserFail;
