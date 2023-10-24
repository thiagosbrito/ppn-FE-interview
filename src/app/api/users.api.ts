import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { User } from "../interfaces/user";

const MOCK_USER_LIST = [
  {
    id: 1,
    name: 'Pierre',
    email: 'pierre@email.com',
    dob: '12/24/1992',
    address: {
      street_name: 'string',
      complement: 'string',
      number: 123,
      city: 'string',
      zip_code: 'string',
    }
  },
  {
    id: 2,
    name: 'John',
    email: 'john@email.com',
    dob: '01/02/1983',
    address: {
      street_name: 'string',
      complement: 'string',
      number: 321,
      city: 'string',
      zip_code: 'string',
    }
  },
  {
    id: 3,
    name: 'Jane',
    email: 'jane@email.com',
    dob: '05/03/1976',
    address: {
      street_name: 'string',
      complement: 'string',
      number: 312,
      city: 'string',
      zip_code: 'string',
    }
  },
];

@Injectable({
  providedIn: 'root'
})
export class UsersApi {

  getUsers(): Observable<Array<User>> {
    // simulates users endpoint
    return of(MOCK_USER_LIST).pipe(
      catchError((error) => {
        console.error('Error occurred when loading user settings.')
        return throwError(error);
      }),
    );
  }

  getUserById(id: number): Observable<User> {
    return this.getUsers().pipe(
      map((users: Array<User>) => users?.find((user: User) => user.id === id)),
    ) as Observable<User>;
  }
}
