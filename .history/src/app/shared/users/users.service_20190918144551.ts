import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly rootURL = 'http://localhost:8080/api';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  formUsersData: Users;
  listUsers: Users[];
  constructor() { }
}
