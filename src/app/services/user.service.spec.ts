// please add a test for the user.service
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { of } from "rxjs";
import { User } from "../interfaces/user";
import { UsersApi } from "../api/users.api";

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
    return of([
      MOCK_USER,
    ]);
  }

  getUserById(id: number) {
    return of(MOCK_USER);
  }
}

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: UsersApi, useClass: MockUserApi },
      ],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', (done) => {
    expect(service).toBeTruthy();
    done();
  });

  it('getUsers() should return value', () => {
    service.getUsers()
      .subscribe((users: Array<User>) => {
        expect(users).toEqual([MOCK_USER]);
      });
  });

  it('getUserById() should return value', () => {
    service.getUserById(MOCK_USER.id)
      .subscribe((user: User) => {
        expect(user.id).toEqual(MOCK_USER.id);
      });
  });

});

