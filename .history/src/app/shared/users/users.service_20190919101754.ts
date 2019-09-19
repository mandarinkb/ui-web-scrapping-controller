import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient) { }
  readUsers() {
    return this.http.get(this.rootURL + '/users');
  }
}
