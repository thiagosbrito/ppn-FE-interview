import { Action } from '@ngrx/store';

export const LOAD_USER = '[User] Load User';

export class LoadUser implements Action {
  readonly type = LOAD_USER;
}

export type Actions = LoadUser;
