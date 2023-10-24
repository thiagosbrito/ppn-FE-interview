import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import * as FromUserActions from "./actions/load-user/load-user.actions";
import * as FromUserListActions from "./actions/load-user-list/load-user-list.actions";
import * as FromSettingsActions from "./actions/load-settings/load-settings.actions";
import { Settings } from "../interfaces/settings";
import { SettingsService } from "../services/settings.service";
import { User } from "../interfaces/user";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private settingsService: SettingsService,
  ) {}

  loadUserList$: Observable<FromUserListActions.LoadUserListSuccess | FromUserListActions.LoadUserListFail> = createEffect(() => {
    return this.actions$.pipe(
      ofType(FromUserListActions.UserListActionTypes.LOAD_USER_LIST),
      switchMap(() => this.userService.getUsers()),
      map( (list: Array<User>) => new FromUserListActions.LoadUserListSuccess({ list }) ),
      catchError( (errorMessage: string) => of(new FromUserListActions.LoadUserListFail({ error: errorMessage })) )
    )
  });

  loadUser$: Observable<FromUserActions.LoadUserSuccess | FromUserActions.LoadUserFail> = createEffect(() => {
    return this.actions$.pipe(
      ofType(FromUserActions.UserActionTypes.LOAD_USER),
      switchMap((data: FromUserActions.LoadUser) => this.userService.getUserById(data?.payload?.id as number)),
      map( (user) => new FromUserActions.LoadUserSuccess(user) ),
      catchError((errorMessage: string) => of(new FromUserActions.LoadUserFail({ error: errorMessage })))
    )
  });

  loadSettings$: Observable<FromSettingsActions.LoadSettingsSuccess | FromSettingsActions.LoadSettingsFail> = createEffect(() => {
    return this.actions$.pipe(
      ofType(FromSettingsActions.SettingsActionTypes.LOAD_SETTINGS),
      switchMap(() => this.settingsService.loadSettings()),
      map( (settings: Settings) => new FromSettingsActions.LoadSettingsSuccess(settings) ),
      catchError((errorMessage: string) => of(new FromSettingsActions.LoadSettingsFail({ error: errorMessage })))
    )
  });
}
