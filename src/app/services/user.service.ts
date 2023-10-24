import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { UsersApi } from "../api/users.api";

@Injectable()
export class UserService {
  constructor(
    private usersApi: UsersApi,
  ) { }

  getUsers(): Observable<Array<User>> {
    return this.usersApi.getUsers();
  }

  getUserById(id: number): Observable<User> {
    return this.usersApi.getUserById(id);
  }
}
