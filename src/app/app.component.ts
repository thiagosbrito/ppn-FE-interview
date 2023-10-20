import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state';
import * as fromActions from './store/actions';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="user$ | async as user">
      <h1>Hello, {{ user.name }}!</h1>
      <button (click)="loadUser()">Load User</button>
      <button (click)="loadSettings()">Load Settings</button>
    </div>
  `,
})
export class AppComponent {
  user$: Observable<any>;
  _userList: Array<User>;

  constructor(
    private store: Store<AppState>,
    private settings_service: SettingsService
  ) {}

  ngOnInit() {
    this.user$ = this.store.select((state) => state.user);
    this.user$.subscribe((users) => this._userList = users);
  }

  // Error: No return type
  loadUser() {
    this.store.dispatch(new fromActions.LoadUser());
  }

  // Error: No return type
  loadSettings() {
    this.settings_service.getSettings();
  }
}
