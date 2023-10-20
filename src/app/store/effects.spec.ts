import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { UserEffects } from './effects';
import * as fromActions from './actions';

class MockUserService {
  getUsers() {
    return of({ name: 'Alice' });
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
        { provide: UserService, useClasss: MockUserService },
      ],
    });

    effects = TestBed.inject(UserEffects);
  });

  it('should return a LOAD_USER_SUCCESS action', () => {
    const action = new fromActions.LoadUser();
    const completion = new fromActions.LoadUserSuccess({ name: 'Alice' });

    actions$ = hot('-a', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadUser$).toBeObservable(expected);
  });
});
