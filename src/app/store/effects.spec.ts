import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, skip } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { UserEffects } from './effects';
import * as FromUserActions from './actions/load-user/load-user.actions';
import * as FromUserListActions from './actions/load-user-list/load-user-list.actions';
import * as FromSettingsActions from './actions/load-settings/load-settings.actions';
import { UserService } from "../services/user.service";
import { UsersApi } from "../api/users.api";
import { User } from "../interfaces/user";
import { SettingsService } from "../services/settings.service";
import { SettingsApi } from "../api/settings.api";
import { LanguageApi } from "../api/language.api";
import { Settings } from "../interfaces/settings";

const MOCK_USER: User = {
  id: 4,
  name: 'Alice',
  email: 'alice@email.com',
  dob: '05/03/1976',
  address: {
    street_name: 'string',
    complement: 'string',
    number: 312,
    city: 'string',
    zip_code: 'string',
  }
}

class MockUserApi {
  getUsers() {
    return of([MOCK_USER]);
  }

  getUserById(id: number) {
    return of(MOCK_USER);
  }
}

const MOCK_SETTINGS: Settings = {
  theme: 'light',
  language: 'en',
}


class MockSettingsApi {
  getSettings() {
    return of({
      theme: 'light',
    });
  }
}

class MockLanguageApi {
  getLanguage() {
    return of({
      lang_code: 'en',
    });
  }
}

describe('User Effects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        UserService,
        SettingsService,
        { provide: UsersApi, useClass: MockUserApi },
        { provide: SettingsApi, useClass: MockSettingsApi },
        { provide: LanguageApi, useClass: MockLanguageApi },
      ],
    });

    effects = TestBed.inject(UserEffects);
  });

  it('should return a LOAD_USER_SUCCESS action', () => {
    const action = new FromUserActions.LoadUser({id: 4});
    const completion = new FromUserActions.LoadUserSuccess(MOCK_USER);

    actions$ = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadUser$).toBeObservable(expected);
  });

  it('should return a LOAD_USER_LIST_SUCCESS action', () => {
    const action = new FromUserListActions.LoadUserList();
    const completion = new FromUserListActions.LoadUserListSuccess({list: [MOCK_USER]});

    actions$ = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadUserList$).toBeObservable(expected);
  });

  it('should return a LOAD_SETTINGS_SUCCESS action', () => {
    const action = new FromSettingsActions.LoadSettings();
    const completion = new FromSettingsActions.LoadSettingsSuccess(MOCK_SETTINGS);

    actions$ = hot('--a-', { a: action });
    const expected = cold('--c-', { c: completion });

    // Added skip(1) because loadSettings() has combinedLatest() and it emits for each endpoint is successful
    expect(effects.loadSettings$.pipe(skip(1))).toBeObservable(expected);
  });
});
