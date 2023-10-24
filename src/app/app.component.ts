import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from './store/state';
import * as FromUserListActions from "./store/actions/load-user-list/load-user-list.actions";
import * as FromUserActions from "./store/actions/load-user/load-user.actions";
import * as FromSettingsActions from "./store/actions/load-settings/load-settings.actions";
import { User } from './interfaces/user';
import { Settings } from "./interfaces/settings";
import { UserList } from "./interfaces/user-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  user$: Observable<User> = of({} as User);
  userList$: Observable<UserList> = of({} as UserList);
  userSettings$: Observable<Settings> = of({} as Settings);

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select((state) => state.user);
    this.userList$ = this.store.select((state) => state.userList);
    this.userSettings$ = this.store.select((state) => state.userSettings);
  }

  loadUser(user: User): void {
    this.store.dispatch(new FromUserActions.LoadUser({id: user.id}));
  }

  loadUserList(): void {
    this.store.dispatch(new FromUserListActions.LoadUserList());
  }

  loadSettings(): void {
    this.store.dispatch(new FromSettingsActions.LoadSettings());
  }
}
